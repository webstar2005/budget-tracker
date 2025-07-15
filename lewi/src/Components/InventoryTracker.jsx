import React, { useState, useEffect } from 'react';

const InventoryTracker = ({ transactions = [] }) => {
  const [initialStock, setInitialStock] = useState({
    'Maize bran': { quantity: 0, weightPerBag: 90 },
    'Wheat bran': { quantity: 0, weightPerBag: 50 },
    'Maize germ': { quantity: 0, weightPerBag: 50 },
    'Cob dust': { quantity: 0, weightPerBag: 1 } // For cob dust, quantity is in kg
  });

  const [showStockForm, setShowStockForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [weightInput, setWeightInput] = useState('');

  // Weight-based categories that we track
  const weightBasedCategories = ["Maize bran", "Wheat bran", "Maize germ", "Cob dust"];

  // Calculate inventory movements from transactions
  const calculateInventoryMovements = () => {
    const movements = {};
    
    // Initialize movements for each product
    weightBasedCategories.forEach(category => {
      movements[category] = {
        purchases: [],
        sales: [],
        totalPurchased: 0,
        totalSold: 0,
        totalPurchasedWeight: 0,
        totalSoldWeight: 0
      };
    });

    // Process transactions
    transactions.forEach(transaction => {
      if (weightBasedCategories.includes(transaction.category)) {
        const category = transaction.category;
        const quantity = transaction.quantity || 0;
        const weightPerBag = transaction.weightPerBag || initialStock[category].weightPerBag;
        const totalWeight = transaction.totalWeight || (quantity * weightPerBag);

        const movement = {
          date: transaction.date,
          quantity: quantity,
          weightPerBag: weightPerBag,
          totalWeight: totalWeight,
          amount: transaction.amount,
          pricePerUnit: transaction.pricePerUnit,
          description: transaction.description
        };

        if (transaction.type === 'Expense') { // Purchase
          movements[category].purchases.push(movement);
          movements[category].totalPurchased += quantity;
          movements[category].totalPurchasedWeight += totalWeight;
        } else if (transaction.type === 'Income') { // Sale
          movements[category].sales.push(movement);
          movements[category].totalSold += quantity;
          movements[category].totalSoldWeight += totalWeight;
        }
      }
    });

    return movements;
  };

  const movements = calculateInventoryMovements();

  // Calculate current stock for each product
  const calculateCurrentStock = (category) => {
    const initial = initialStock[category].quantity;
    const purchased = movements[category].totalPurchased;
    const sold = movements[category].totalSold;
    const remaining = initial + purchased - sold;
    
    const initialWeight = initial * initialStock[category].weightPerBag;
    const purchasedWeight = movements[category].totalPurchasedWeight;
    const soldWeight = movements[category].totalSoldWeight;
    const remainingWeight = initialWeight + purchasedWeight - soldWeight;
    
    return {
      quantity: remaining,
      weight: remainingWeight,
      weightPerBag: initialStock[category].weightPerBag
    };
  };

  // Handle adding initial stock
  const handleAddStock = () => {
    if (selectedProduct && stockInput) {
      setInitialStock(prev => ({
        ...prev,
        [selectedProduct]: {
          ...prev[selectedProduct],
          quantity: parseFloat(stockInput),
          weightPerBag: weightInput ? parseFloat(weightInput) : prev[selectedProduct].weightPerBag
        }
      }));
      setStockInput('');
      setWeightInput('');
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
    if (currentStock.quantity <= 0) return { status: 'Out of Stock', color: '#e74c3c' };
    if (currentStock.quantity <= 10) return { status: 'Low Stock', color: '#f39c12' };
    return { status: 'In Stock', color: '#27ae60' };
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Inventory Management</h2>
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
                {weightBasedCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div style={styles.formGroup}>
              <label>
                {selectedProduct === 'Cob dust' ? 'Quantity (kg):' : 'Quantity (bags):'}
              </label>
              <input 
                type="number" 
                value={stockInput} 
                onChange={(e) => setStockInput(e.target.value)}
                style={styles.input}
                placeholder="Enter quantity"
              />
            </div>
            
            {selectedProduct && selectedProduct !== 'Cob dust' && (
              <div style={styles.formGroup}>
                <label>Weight per bag (kg):</label>
                <input 
                  type="number" 
                  value={weightInput} 
                  onChange={(e) => setWeightInput(e.target.value)}
                  style={styles.input}
                  placeholder={`Default: ${initialStock[selectedProduct]?.weightPerBag || 0} kg`}
                />
              </div>
            )}
            
            <div style={styles.formButtons}>
              <button onClick={handleAddStock} style={styles.saveBtn}>Save</button>
              <button onClick={() => setShowStockForm(false)} style={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Inventory Overview */}
      <div style={styles.overviewGrid}>
        {weightBasedCategories.map(category => {
          const currentStock = calculateCurrentStock(category);
          const stockStatus = getStockStatus(currentStock);
          
          return (
            <div key={category} style={styles.overviewCard}>
              <h3 style={styles.productName}>{category}</h3>
              <div style={styles.stockInfo}>
                <div style={styles.stockQuantity}>
                  {currentStock.quantity.toFixed(1)} {category === 'Cob dust' ? 'kg' : 'bags'}
                </div>
                <div style={styles.stockWeight}>
                  {currentStock.weight.toFixed(1)} kg total
                </div>
                <div style={{...styles.stockStatus, color: stockStatus.color}}>
                  {stockStatus.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Inventory Table */}
      <div style={styles.detailsSection}>
        <h3 style={styles.sectionTitle}>Detailed Inventory Tracking</h3>
        
        {weightBasedCategories.map(category => {
          const currentStock = calculateCurrentStock(category);
          const categoryMovements = movements[category];
          
          return (
            <div key={category} style={styles.productSection}>
              <div style={styles.productHeader}>
                <h4 style={styles.productTitle}>{category}</h4>
                <div style={styles.currentStockSummary}>
                  Current Stock: {currentStock.quantity.toFixed(1)} {category === 'Cob dust' ? 'kg' : 'bags'} 
                  ({currentStock.weight.toFixed(1)} kg)
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
                          <th style={styles.th}>Quantity</th>
                          <th style={styles.th}>Weight</th>
                          <th style={styles.th}>Price/Unit</th>
                          <th style={styles.th}>Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryMovements.purchases.map((purchase, index) => (
                          <tr key={index} style={styles.tableRow}>
                            <td style={styles.td}>{formatDate(purchase.date)}</td>
                            <td style={styles.td}>
                              {purchase.quantity} {category === 'Cob dust' ? 'kg' : 'bags'}
                            </td>
                            <td style={styles.td}>{purchase.totalWeight.toFixed(1)} kg</td>
                            <td style={styles.td}>{formatCurrency(purchase.pricePerUnit)}</td>
                            <td style={styles.td}>{formatCurrency(purchase.amount)}</td>
                          </tr>
                        ))}
                        <tr style={styles.totalRow}>
                          <td style={styles.td}><strong>Total</strong></td>
                          <td style={styles.td}>
                            <strong>{categoryMovements.totalPurchased.toFixed(1)} {category === 'Cob dust' ? 'kg' : 'bags'}</strong>
                          </td>
                          <td style={styles.td}>
                            <strong>{categoryMovements.totalPurchasedWeight.toFixed(1)} kg</strong>
                          </td>
                          <td style={styles.td}></td>
                          <td style={styles.td}>
                            <strong>{formatCurrency(categoryMovements.purchases.reduce((sum, p) => sum + p.amount, 0))}</strong>
                          </td>
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
                          <th style={styles.th}>Quantity</th>
                          <th style={styles.th}>Weight</th>
                          <th style={styles.th}>Price/Unit</th>
                          <th style={styles.th}>Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryMovements.sales.map((sale, index) => (
                          <tr key={index} style={styles.tableRow}>
                            <td style={styles.td}>{formatDate(sale.date)}</td>
                            <td style={styles.td}>
                              {sale.quantity} {category === 'Cob dust' ? 'kg' : 'bags'}
                            </td>
                            <td style={styles.td}>{sale.totalWeight.toFixed(1)} kg</td>
                            <td style={styles.td}>{formatCurrency(sale.pricePerUnit)}</td>
                            <td style={styles.td}>{formatCurrency(sale.amount)}</td>
                          </tr>
                        ))}
                        <tr style={styles.totalRow}>
                          <td style={styles.td}><strong>Total</strong></td>
                          <td style={styles.td}>
                            <strong>{categoryMovements.totalSold.toFixed(1)} {category === 'Cob dust' ? 'kg' : 'bags'}</strong>
                          </td>
                          <td style={styles.td}>
                            <strong>{categoryMovements.totalSoldWeight.toFixed(1)} kg</strong>
                          </td>
                          <td style={styles.td}></td>
                          <td style={styles.td}>
                            <strong>{formatCurrency(categoryMovements.sales.reduce((sum, s) => sum + s.amount, 0))}</strong>
                          </td>
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
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '0 0 15px 0'
  },
  stockInfo: {
    textAlign: 'center'
  },
  stockQuantity: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '5px'
  },
  stockWeight: {
    fontSize: '1rem',
    color: '#7f8c8d',
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
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    marginBottom: '20px'
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
    fontSize: '1.3rem',
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