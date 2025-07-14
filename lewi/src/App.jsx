import AddTransaction from './Components/AddTransaction';
import BalanceSheet from './Components/BalanceSheet';
import Footer from './Components/Footer';
import IncomeExp from './Components/IncomeExp';
import Header from './Header';
import Auth from './Components/Auth';
import React, { useState, useEffect } from 'react';
import { 
  addTransaction as addTransactionToDB, 
  getTransactions, 
  deleteTransaction as deleteTransactionFromDB 
} from './services/database';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactionError, setTransactionError] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      
      if (currentUser) {
        console.log('User authenticated:', currentUser.email);
      } else {
        console.log('User not authenticated');
        setTransactions([]); // Clear transactions when user logs out
      }
    });

    return () => unsubscribe();
  }, []);

  // Load transactions when user changes
  useEffect(() => {
    if (user) {
      loadTransactions();
    }
  }, [user]);

  const loadTransactions = async () => {
    if (!user) return;
    
    try {
      setTransactionsLoading(true);
      setTransactionError(null);
      const data = await getTransactions(user.uid);
      setTransactions(data);
      console.log('Loaded transactions:', data.length);
    } catch (err) {
      setTransactionError('Failed to load transactions');
      console.error('Error loading transactions:', err);
    } finally {
      setTransactionsLoading(false);
    }
  };

  const addTransaction = async (transactionData) => {
    console.log('=== DEBUG: Adding transaction ===');
    console.log('User:', user);
    console.log('Transaction data:', transactionData);
    
    if (!user) {
      setTransactionError('You must be logged in to add transactions');
      return;
    }

    try {
      setTransactionError(null);
      console.log('Calling addTransactionToDB...');
      const newTransaction = await addTransactionToDB(user.uid, transactionData);
      console.log('New transaction returned:', newTransaction);
      
      setTransactions(prev => {
        const updated = [newTransaction, ...prev];
        console.log('Updated transactions:', updated);
        return updated;
      });
      
      console.log('Transaction added successfully');
    } catch (err) {
      setTransactionError('Failed to add transaction: ' + err.message);
      console.error('Error adding transaction:', err);
    }
  };

  const deleteTransaction = async (transactionId) => {
    console.log('=== DEBUG: Deleting transaction ===');
    console.log('Transaction ID:', transactionId);
    
    if (!user) {
      setTransactionError('You must be logged in to delete transactions');
      return;
    }

    try {
      setTransactionError(null);
      await deleteTransactionFromDB(transactionId);
      
      // FIX: Use prev state instead of current transactions
      setTransactions(prev => prev.filter((tx) => tx.id == transactionId));
      
      console.log('Transaction deleted successfully');
    } catch (err) {
      setTransactionError('Failed to delete transaction: ' + err.message);
      console.error('Error deleting transaction:', err);
    }
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    console.log('User logged in successfully:', loggedInUser.email);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setTransactions([]);
      setTransactionError(null);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Show loading screen while checking authentication
  if (authLoading) {
    return (
      <div>
        <Header />
        <div style={{ 
          textAlign: 'center', 
          padding: '50px',
          fontSize: '18px',
          color: '#666'
        }}>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  // Show login screen if user is not authenticated
  if (!user) {
    return (
      <div>
        <Header />
        <Auth onLogin={handleLogin} />
      </div>
    );
  }

  // Main app content for authenticated users
  return (
    <div>
      <Header />
      
      {/* User info and logout button */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6'
      }}>
        <span style={{ color: '#666' }}>
          Welcome, {user.email}
        </span>
        <button 
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {/* Error Display */}
      {transactionError && (
        <div style={{ 
          color: '#d32f2f', 
          textAlign: 'center', 
          padding: '12px',
          backgroundColor: '#ffebee',
          margin: '10px',
          borderRadius: '8px',
          border: '1px solid #ffcdd2'
        }}>
          {transactionError}
          <button 
            onClick={loadTransactions}
            style={{
              marginLeft: '10px',
              padding: '4px 8px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading indicator for transactions */}
      {transactionsLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          color: '#666'
        }}>
          Loading transactions...
        </div>
      )}

      {/* Empty state message */}
      {!transactionsLoading && transactions.length === 0 && !transactionError && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          color: '#666',
          backgroundColor: '#f5f5f5',
          margin: '10px',
          borderRadius: '8px'
        }}>
          No transactions yet. Add your first transaction below!
        </div>
      )}

      {/* Main app components */}
      <AddTransaction onAddTransaction={addTransaction} />
      <IncomeExp transactions={transactions} />
      <Footer transactions={transactions} onDelete={deleteTransaction} />
      <BalanceSheet transactions={transactions} />
    </div>
  );
}

export default App;