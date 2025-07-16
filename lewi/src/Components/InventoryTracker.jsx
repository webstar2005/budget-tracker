import React, { useState, useEffect } from 'react';

const InventoryTracker = ({ transactions = [] }) => {
  const [initialStock, setInitialStock] = useState({
    // Raw Materials
    'Maize bran': { weightInKg: 0 },
    'Wheat bran': { weightInKg: 0 },
    'Cob dust': { weightInKg: 0 },
    'Rice dust': { weightInKg: 0 },
    // End Products
    'Maize germ': { weightInKg: 0 },
    'Wheat bran (finished)': { weightInKg: 0 }
  });

  const [showStockForm, setShowStockForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [activeTab, setActiveTab] = useState('rawMaterials');

  // Define inventory categories
  const rawMaterials = ["Maize bran", "Wheat bran", "Cob dust", "Rice dust"];
  const endProducts = ["Maize germ", "Wheat bran (finished)"];
  const allCategories = [...rawMaterials, ...endProducts];

  // Calculate inventory movements from transactions
  const calculateInventoryMovements = () => {
    const movements = {};
    
    // Initialize movements for each product
    allCategories.forEach(category => {
      movements[category] = {
        purchases: [],
        sales: [],
        totalPurchasedWeight: 0,
        totalSoldWeight: 0
      };
    });

    // Process transactions
    transactions.forEach(transaction => {
      if (allCategories.includes(transaction.category)) {
        const category = transaction.category;
        const weight = transaction.weightInKg || 0;
        const pricePerKg = transaction.pricePerKg || 0;

        const movement = {
          date: transaction.date,
          weightInKg: weight,
          pricePerKg: pricePerKg,
          amount: transaction.amount,
          description: transaction.description
        };

        // Special handling for wheat bran - it affects both inventories
        if (category === 'Wheat bran') {
          // Add to raw materials wheat bran
          if (transaction.type === 'Expense') { // Purchase
            movements['Wheat bran'].purchases.push(movement);
            movements['Wheat bran'].totalPurchasedWeight += weight;
            // Also add to finished wheat bran
            movements['Wheat bran (finished)'].purchases.push(movement);
            movements['Wheat bran (finished)'].totalPurchasedWeight += weight;
          } else if (transaction.type === 'Income') { // Sale
            movements['Wheat bran'].sales.push(movement);
            movements['Wheat bran'].totalSoldWeight += weight;
            // Also subtract from finished wheat bran
            movements['Wheat bran (finished)'].sales.push(movement);
            movements['Wheat bran (finished)'].totalSoldWeight += weight;
          }
        } else if (category === 'Wheat bran (finished)') {
          // If transaction is specifically for finished wheat bran, sync with raw material
          if (transaction.type === 'Expense') { // Purchase
            movements['Wheat bran (finished)'].purchases.push(movement);
            movements['Wheat bran (finished)'].totalPurchasedWeight += weight;
            // Also add to raw materials wheat bran
            movements['Wheat bran'].purchases.push(movement);
            movements['Wheat bran'].totalPurchasedWeight += weight;
          } else if (transaction.type === 'Income') { // Sale
            movements['Wheat bran (finished)'].sales.push(movement);
            movements['Wheat bran (finished)'].totalSoldWeight += weight;
            // Also subtract from raw materials wheat bran
            movements['Wheat bran'].sales.push(movement);
            movements['Wheat bran'].totalSoldWeight += weight;
          }
        } else {
          // Normal processing for other products
          if (transaction.type === 'Expense') { // Purchase
            movements[category].purchases.push(movement);
            movements[category].totalPurchasedWeight += weight;
          } else if (transaction.type === 'Income') { // Sale
            movements[category].sales.push(movement);
            movements[category].totalSoldWeight += weight;
          }
        }
      }
    });

    return movements;
  };

  const movements = calculateInventoryMovements();

  // Calculate current stock for each product
  const calculateCurrentStock = (category) => {
    const initial = initialStock[category].weightInKg;
    const purchased = movements[category].totalPurchasedWeight;
    const sold = movements[category].totalSoldWeight;
    const remaining = initial + purchased - sold;
    
    // For wheat bran synchronization - ensure both inventories show the same stock
    if (category === 'Wheat bran' || category === 'Wheat bran (finished)') {
      const wheatBranRawInitial = initialStock['Wheat bran'].weightInKg;
      const wheatBranFinishedInitial = initialStock['Wheat bran (finished)'].weightInKg;
      const totalInitial = wheatBranRawInitial + wheatBranFinishedInitial;
      
      const wheatBranPurchased = movements['Wheat bran'].totalPurchasedWeight;
      const wheatBranSold = movements['Wheat bran'].totalSoldWeight;
      
      const synchronizedRemaining = totalInitial + wheatBranPurchased - wheatBranSold;
      
      return {
        weightInKg: synchronizedRemaining
      };
    }
    
    return {
      weightInKg: remaining
    };
  };

  // Handle adding initial stock
  const handleAddStock = () => {
    if (selectedProduct && stockInput) {
      setInitialStock(prev => ({
        ...prev,
        [selectedProduct]: {
          weightInKg: parseFloat(stockInput)
        }
      }));
      setStockInput('');
      setSelectedProduct('');
      setShowStockForm(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getStockStatus = (currentStock) => {
    if (currentStock.weightInKg <= 0) return { status: 'Out of Stock', color: '#e74c3c' };
    if (currentStock.weightInKg <= 100) return { status: 'Low Stock', color: '#f39c12' };
    return { status: 'In Stock', color: '#27ae60' };
  };

  const renderInventorySection = (categories, title) => {
    return (
      <div style={styles.inventorySection}>
        <h3 style={styles.inventoryTitle}>{title}</h3>
        
        {/* Overview Cards */}
        <div style={styles.overviewGrid}>
          {categories.map(category => {
            const currentStock = calculateCurrentStock(category);
            const stockStatus = getStockStatus(currentStock);
            
            return (
              <div key={category} style={styles.overviewCard}>
                <h4 style={styles.productName}>{category}</h4>
                <div style={styles.stockInfo}>
                  <div style={styles.stockQuantity}>
                    {currentStock.weightInKg.toFixed(1)} kg
                  </div>
                  <div style={{...styles.stockStatus, color: stockStatus.color}}>
                    {stockStatus.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Tables */}
        <div style={styles.detailsSection}>
          {categories.map(category => {
            const currentStock = calculateCurrentStock(category);
            const categoryMovements = movements[category];
            
            return (
              <div key={category} style={styles.productSection}>
                <div style={styles.productHeader}>
                  <h4 style={styles.productTitle}>{category}</h4>
                  <div style={styles.currentStockSummary}>
                    Current Stock: {currentStock.weightInKg.toFixed(1)} kg
                  </div>
                </div>
                
                <div style={styles.movementTables}>
                  {/* Purchases Table */}
                  <div style={styles.tableContainer}>
                    <h5 style={styles.tableTitle}>Purchases (Stock In)</h5>
                    {categoryMovements.purchases.length > 0 ? (
                      <table style={styles.table}>
                        <thead>
                          <tr style={styles.tableHeader}>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Weight (kg)</th>
                            <th style={styles.th}>Price/kg</th>
                            <th style={styles.th}>Total Amount</th>
                            <th style={styles.th}>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoryMovements.purchases.map((purchase, index) => (
                            <tr key={index} style={styles.tableRow}>
                              <td style={styles.td}>{formatDate(purchase.date)}</td>
                              <td style={styles.td}>{purchase.weightInKg.toFixed(1)} kg</td>
                              <td style={styles.td}>{formatCurrency(purchase.pricePerKg)}</td>
                              <td style={styles.td}>{formatCurrency(purchase.amount)}</td>
                              <td style={styles.td}>{purchase.description}</td>
                            </tr>
                          ))}
                          <tr style={styles.totalRow}>
                            <td style={styles.td}><strong>Total</strong></td>
                            <td style={styles.td}>
                              <strong>{categoryMovements.totalPurchasedWeight.toFixed(1)} kg</strong>
                            </td>
                            <td style={styles.td}></td>
                            <td style={styles.td}>
                              <strong>{formatCurrency(categoryMovements.purchases.reduce((sum, p) => sum + p.amount, 0))}</strong>
                            </td>
                            <td style={styles.td}></td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <div style={styles.noData}>No purchases recorded</div>
                    )}
                  </div>

                  {/* Sales Table */}
                  <div style={styles.tableContainer}>
                    <h5 style={styles.tableTitle}>Sales (Stock Out)</h5>
                    {categoryMovements.sales.length > 0 ? (
                      <table style={styles.table}>
                        <thead>
                          <tr style={styles.tableHeader}>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Weight (kg)</th>
                            <th style={styles.th}>Price/kg</th>
                            <th style={styles.th}>Total Amount</th>
                            <th style={styles.th}>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoryMovements.sales.map((sale, index) => (
                            <tr key={index} style={styles.tableRow}>
                              <td style={styles.td}>{formatDate(sale.date)}</td>
                              <td style={styles.td}>{sale.weightInKg.toFixed(1)} kg</td>
                              <td style={styles.td}>{formatCurrency(sale.pricePerKg)}</td>
                              <td style={styles.td}>{formatCurrency(sale.amount)}</td>
                              <td style={styles.td}>{sale.description}</td>
                            </tr>
                          ))}
                          <tr style={styles.totalRow}>
                            <td style={styles.td}><strong>Total</strong></td>
                            <td style={styles.td}>
                              <strong>{categoryMovements.totalSoldWeight.toFixed(1)} kg</strong>
                            </td>
                            <td style={styles.td}></td>
                            <td style={styles.td}>
                              <strong>{formatCurrency(categoryMovements.sales.reduce((sum, s) => sum + s.amount, 0))}</strong>
                            </td>
                            <td style={styles.td}></td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <div style={styles.noData}>No sales recorded</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Dual Inventory Management System</h2>
        <button 
          style={styles.addStockBtn}
          onClick={() => setShowStockForm(true)}
        >
          Add Initial Stock
        </button>
      </div>

      {/* Add Stock Form */}
      {showStockForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Add Initial Stock</h3>
            <div style={styles.formGroup}>
              <label>Product:</label>
              <select 
                value={selectedProduct} 
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Product</option>
                <optgroup label="Raw Materials">
                  {rawMaterials.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </optgroup>
                <optgroup label="End Products">
                  {endProducts.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </optgroup>
              </select>
            </div>
            
            <div style={styles.formGroup}>
              <label>Weight (kg):</label>
              <input 
                type="number" 
                step="0.01"
                value={stockInput} 
                onChange={(e) => setStockInput(e.target.value)}
                style={styles.input}
                placeholder="Enter weight in kg"
              />
            </div>
            
            <div style={styles.formButtons}>
              <button onClick={handleAddStock} style={styles.saveBtn}>Save</button>
              <button onClick={() => setShowStockForm(false)} style={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div style={styles.tabContainer}>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'rawMaterials' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('rawMaterials')}
        >
          Raw Materials
        </button>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'endProducts' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('endProducts')}
        >
          End Products
        </button>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'all' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('all')}
        >
          All Inventory
        </button>
      </div>

      {/* Content based on active tab */}
      <div style={styles.content}>
        {activeTab === 'rawMaterials' && renderInventorySection(rawMaterials, 'Raw Materials Inventory')}
        {activeTab === 'endProducts' && renderInventorySection(endProducts, 'End Products Inventory')}
        {activeTab === 'all' && (
          <>
            {renderInventorySection(rawMaterials, 'Raw Materials Inventory')}
            {renderInventorySection(endProducts, 'End Products Inventory')}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '15px'
  },
  title: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    margin: 0
  },
  addStockBtn: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  tabContainer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  tab: {
    flex: 1,
    padding: '15px 20px',
    backgroundColor: '#ecf0f1',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#2c3e50',
    transition: 'all 0.3s ease'
  },
  activeTab: {
    backgroundColor: '#3498db',
    color: 'white'
  },
  content: {
    minHeight: '400px'
  },
  inventorySection: {
    marginBottom: '30px'
  },
  inventoryTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    marginBottom: '20px',
    padding: '15px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderLeft: '4px solid #3498db'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    maxWidth: '95%',
    margin: '10px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  formButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '20px'
  },
  saveBtn: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  cancelBtn: {
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '20px'
  },
  overviewCard: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    minHeight: '120px'
  },
  productName: {
    fontSize: '1.1rem',
    color: '#2c3e50',
    margin: '0 0 15px 0'
  },
  stockInfo: {
    textAlign: 'center'
  },
  stockQuantity: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  stockStatus: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  detailsSection: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  productSection: {
    marginBottom: '30px',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    padding: '15px'
  },
  productHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  productTitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: 0
  },
  currentStockSummary: {
    fontSize: '1rem',
    color: '#7f8c8d',
    fontWeight: 'bold'
  },
  movementTables: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  },
  tableContainer: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '6px',
    overflowX: 'auto',
    minWidth: '300px'
  },
  tableTitle: {
    fontSize: '1rem',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.8rem',
    overflowX: 'auto'
  },
  tableHeader: {
    backgroundColor: '#ecf0f1'
  },
  th: {
    padding: '8px 4px',
    textAlign: 'left',
    borderBottom: '2px solid #bdc3c7',
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '0.75rem',
    minWidth: '80px'
  },
  tableRow: {
    borderBottom: '1px solid #ecf0f1'
  },
  td: {
    padding: '6px 4px',
    color: '#34495e',
    fontSize: '0.75rem',
    wordBreak: 'break-word'
  },
  totalRow: {
    backgroundColor: '#ecf0f1',
    fontWeight: 'bold'
  },
  noData: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '0.9rem',
    padding: '20px'
  }
};

export default InventoryTracker;