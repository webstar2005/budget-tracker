import React from 'react'

const BalanceSheet = ({transactions = []}) => {

  // Group transactions by date
  const transactionsByDate = transactions.reduce((acc, tx) => {
    const date = tx.date || new Date().toISOString().split('T')[0]; // Use today if no date
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(tx);
    return acc;
  }, {});

  // Sort dates in descending order (most recent first)
  const sortedDates = Object.keys(transactionsByDate).sort((a, b) => new Date(b) - new Date(a));

  const calculateDayBalance = (dayTransactions) => {
    const totalRevenue = dayTransactions.filter(tx => tx.type === 'Income').reduce((sum,tx) => sum + parseFloat(tx.amount), 0);
    
    const expenseByCategory = dayTransactions.filter(tx => tx.type === 'Expense').reduce((acc,tx) => {
      acc[tx.category] = (acc[tx.category] || 0) + parseFloat(tx.amount);
      return acc;
    }, {});

    const totalExpenses = Object.values(expenseByCategory).reduce((a,b) => a + b,0);
    const net = totalRevenue - totalExpenses;

    return { totalRevenue, expenseByCategory, totalExpenses, net };
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Calculate overall totals
  const overallTotals = calculateDayBalance(transactions);

  if (sortedDates.length === 0) {
    return (
      <div style={styles.balanceSheet}>
        <div style={styles.header}>
          <h2 style={styles.title}>Balance Sheet Summary</h2>
          <p style={styles.period}>No transactions available</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.balanceSheet}>
      <div style={styles.header}>
        <h2 style={styles.title}>Daily Balance Sheet Summary</h2>
        <p style={styles.period}>Financial Overview by Day</p>
      </div>

      {/* Overall Summary */}
      <div style={{...styles.section, ...styles.overallSummary}}>
        <h3 style={styles.sectionTitle}>Overall Summary</h3>
        <div style={styles.summaryGrid}>
          <div style={styles.summaryCard}>
            <h4 style={styles.summaryTitle}>Total Revenue</h4>
            <div style={styles.summaryAmount}>{formatCurrency(overallTotals.totalRevenue)}</div>
          </div>
          <div style={styles.summaryCard}>
            <h4 style={styles.summaryTitle}>Total Expenses</h4>
            <div style={styles.summaryAmount}>{formatCurrency(overallTotals.totalExpenses)}</div>
          </div>
          <div style={{
            ...styles.summaryCard,
            backgroundColor: overallTotals.net >= 0 ? '#e8f5e8' : '#ffeaea'
          }}>
            <h4 style={styles.summaryTitle}>Net Result</h4>
            <div style={{
              ...styles.summaryAmount,
              color: overallTotals.net >= 0 ? '#2e7d32' : '#d32f2f'
            }}>
              {formatCurrency(Math.abs(overallTotals.net))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Balance Sheets */}
      {sortedDates.map(date => {
        const dayTransactions = transactionsByDate[date];
        const { totalRevenue, expenseByCategory, totalExpenses, net } = calculateDayBalance(dayTransactions);

        return (
          <div key={date} style={styles.dailySheet}>
            <div style={styles.dateHeader}>
              <h3 style={styles.dateTitle}>{formatDate(date)}</h3>
              <div style={styles.dateStats}>
                {dayTransactions.length} transaction{dayTransactions.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Daily Revenue Section */}
            <div style={styles.section}>
              <h4 style={styles.subsectionTitle}>Revenue</h4>
              <div style={styles.card}>
                <div style={styles.totalAmount}>
                  {formatCurrency(totalRevenue)}
                </div>
                <div style={styles.subtitle}>
                  {dayTransactions.filter(tx => tx.type === 'Income').length} income transactions
                </div>
              </div>
            </div>

            {/* Daily Expenses Section */}
            <div style={styles.section}>
              <h4 style={styles.subsectionTitle}>Expenses by Category</h4>
              <div style={styles.card}>
                {Object.keys(expenseByCategory).length > 0 ? (
                  <>
                    <table style={styles.table}>
                      <thead>
                        <tr style={styles.tableHeader}>
                          <th style={styles.th}>Category</th>
                          <th style={styles.th}>Amount</th>
                          <th style={styles.th}>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(expenseByCategory)
                          .sort(([,a], [,b]) => b - a)
                          .map(([category, amount]) => (
                            <tr key={category} style={styles.tableRow}>
                              <td style={styles.td}>{category}</td>
                              <td style={styles.td}>{formatCurrency(amount)}</td>
                              <td style={styles.td}>
                                {totalExpenses > 0 ? ((amount / totalExpenses) * 100).toFixed(1) : '0.0'}%
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div style={styles.totalRow}>
                      <strong>Total Expenses: {formatCurrency(totalExpenses)}</strong>
                    </div>
                  </>
                ) : (
                  <div style={styles.noData}>No expenses recorded</div>
                )}
              </div>
            </div>

            {/* Daily Net Result Section */}
            <div style={styles.sectionNet}>
              <h4 style={styles.subsectionTitle}>
                {net >= 0 ? 'Net Profit' : 'Net Loss'}
              </h4>
              <div style={styles.card}>
                <div style={styles.netCalculation}>
                  <div style={styles.calculationRow}>
                    <span>Revenue:</span>
                    <span>{formatCurrency(totalRevenue)}</span>
                  </div>
                  <div style={styles.calculationRow}>
                    <span>Expenses:</span>
                    <span>({formatCurrency(totalExpenses)})</span>
                  </div>
                  <div style={styles.separator}></div>
                  <div style={{
                    ...styles.calculationRow,
                    ...styles.netResult,
                    color: net >= 0 ? '#2e7d32' : '#d32f2f'
                  }}>
                    <span><strong>{net >= 0 ? 'Net Profit:' : 'Net Loss:'}</strong></span>
                    <span><strong>{formatCurrency(Math.abs(net))}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

const styles = {
  balanceSheet: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '2.2rem',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    fontWeight: 'bold'
  },
  period: {
    fontSize: '1rem',
    color: '#7f8c8d',
    margin: '0'
  },
  overallSummary: {
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '40px'
  },
  dailySheet: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #ecf0f1'
  },
  dateHeader: {
    textAlign: 'center',
    marginBottom: '25px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '15px'
  },
  dateTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    fontWeight: 'bold'
  },
  dateStats: {
    fontSize: '0.9rem',
    color: '#7f8c8d'
  },
  section: {
    marginBottom: '25px'
  },
  sectionNet: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    margin: '0 0 15px 0',
    fontWeight: '600'
  },
  subsectionTitle: {
    fontSize: '1.2rem',
    color: '#34495e',
    margin: '0 0 12px 0',
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '6px',
    border: '1px solid #e9ecef'
  },
  totalAmount: {
    fontSize: '2rem',
    color: '#27ae60',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '15px'
  },
  tableHeader: {
    backgroundColor: '#ecf0f1'
  },
  th: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '2px solid #bdc3c7',
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '0.9rem'
  },
  tableRow: {
    borderBottom: '1px solid #ecf0f1'
  },
  td: {
    padding: '10px 12px',
    color: '#34495e',
    fontSize: '0.9rem'
  },
  totalRow: {
    textAlign: 'right',
    fontSize: '1rem',
    color: '#2c3e50',
    borderTop: '2px solid #bdc3c7',
    paddingTop: '10px'
  },
  noData: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '0.9rem',
    padding: '15px'
  },
  netCalculation: {
    maxWidth: '350px',
    margin: '0 auto'
  },
  calculationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '1rem'
  },
  separator: {
    height: '2px',
    backgroundColor: '#bdc3c7',
    margin: '10px 0'
  },
  netResult: {
    fontSize: '1.2rem',
    backgroundColor: '#ffffff',
    padding: '12px',
    borderRadius: '5px',
    marginTop: '8px',
    border: '1px solid #e9ecef'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  summaryCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  summaryTitle: {
    fontSize: '1rem',
    color: '#7f8c8d',
    margin: '0 0 8px 0',
    fontWeight: '600'
  },
  summaryAmount: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    margin: '0',
    fontWeight: 'bold'
  }
};

export default BalanceSheet