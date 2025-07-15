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
import InventoryTracker from './Components/InventoryTracker';

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
      
      // Debug: Check transaction structure
      console.log('Loaded transactions:', data);
      if (data.length > 0) {
        console.log('First transaction:', data[0]);
        console.log('First transaction ID:', data[0].id);
        console.log('First transaction ID type:', typeof data[0].id);
      }
      
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

  // FIXED: Enhanced delete function with proper persistent deletion
  const deleteTransaction = async (transactionId) => {
    console.log('=== DEBUG: Deleting transaction ===');
    console.log('Transaction ID:', transactionId);
    console.log('Transaction ID type:', typeof transactionId);
    console.log('Current transactions:', transactions);
    
    if (!user) {
      setTransactionError('You must be logged in to delete transactions');
      return;
    }

    // Validate transaction ID
    if (!transactionId) {
      setTransactionError('Invalid transaction ID');
      console.error('Transaction ID is missing or invalid');
      return;
    }

    // Convert to string to ensure proper format
    const stringTransactionId = String(transactionId);
    console.log('String transaction ID:', stringTransactionId);

    // Check if transaction exists in current state
    const transactionExists = transactions.find(tx => String(tx.id) === stringTransactionId);
    console.log('Transaction exists in state:', transactionExists);

    if (!transactionExists) {
      setTransactionError('Transaction not found');
      console.error('Transaction not found in current state');
      return;
    }

    // Optional: Add confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this transaction?');
    if (!confirmDelete) {
      console.log('User cancelled deletion');
      return;
    }

    try {
      setTransactionError(null);
      console.log('Calling deleteTransactionFromDB with:', stringTransactionId);
      
      // Delete from Firebase database first - this ensures persistence
      await deleteTransactionFromDB(stringTransactionId);
      console.log('Database deletion successful');
      
      // Update local state by filtering out the deleted transaction
      // FIXED: Changed the filter logic - was inverted before
      setTransactions(prev => {
        const filtered = prev.filter((tx) => String(tx.id) !== stringTransactionId);
        console.log('Filtered transactions:', filtered);
        console.log('Original count:', prev.length, 'New count:', filtered.length);
        return filtered;
      });
      
      console.log('Transaction deleted successfully');
    } catch (err) {
      setTransactionError('Failed to delete transaction: ' + err.message);
      console.error('Error deleting transaction:', err);
      console.error('Full error object:', err);
      
      // On error, reload transactions to ensure UI is in sync with database
      loadTransactions();
    }
  };

  // ENHANCED: Batch delete function for multiple transactions
  const deleteMultipleTransactions = async (transactionIds) => {
    if (!user) {
      setTransactionError('You must be logged in to delete transactions');
      return;
    }

    if (!transactionIds || transactionIds.length === 0) {
      setTransactionError('No transactions selected for deletion');
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${transactionIds.length} transaction(s)?`
    );
    if (!confirmDelete) {
      return;
    }

    try {
      setTransactionError(null);
      
      // Delete all transactions from database
      await Promise.all(
        transactionIds.map(id => deleteTransactionFromDB(String(id)))
      );
      
      // Update local state
      setTransactions(prev => 
        prev.filter(tx => !transactionIds.includes(String(tx.id)))
      );
      
      console.log(`Successfully deleted ${transactionIds.length} transactions`);
    } catch (err) {
      setTransactionError('Failed to delete transactions: ' + err.message);
      console.error('Error deleting multiple transactions:', err);
      
      // Reload transactions to ensure UI is in sync
      loadTransactions();
    }
  };

  // ENHANCED: Soft delete function (if you want to implement soft deletes)
  const softDeleteTransaction = async (transactionId) => {
    if (!user) {
      setTransactionError('You must be logged in to delete transactions');
      return;
    }

    try {
      setTransactionError(null);
      
      // Update transaction with deleted flag instead of removing
      const updatedTransaction = {
        ...transactions.find(tx => String(tx.id) === String(transactionId)),
        deleted: true,
        deletedAt: new Date().toISOString()
      };
      
      // Update in database (you'd need to implement updateTransaction in your database service)
      // await updateTransactionInDB(String(transactionId), updatedTransaction);
      
      // Update local state to hide deleted transactions
      setTransactions(prev => 
        prev.filter(tx => String(tx.id) !== String(transactionId))
      );
      
      console.log('Transaction soft deleted successfully');
    } catch (err) {
      setTransactionError('Failed to delete transaction: ' + err.message);
      console.error('Error soft deleting transaction:', err);
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
      <Footer 
        transactions={transactions} 
        onDelete={deleteTransaction}
        onDeleteMultiple={deleteMultipleTransactions} // Pass batch delete function
      />
      <BalanceSheet transactions={transactions} />
      <InventoryTracker transactions={transactions} />
    </div>
  );
}

export default App;