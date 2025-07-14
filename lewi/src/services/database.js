// services/database.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase';

// Add a new transaction
export const addTransaction = async (userId, transactionData) => {
  try {
    console.log('Adding transaction for user:', userId);
    
    const transaction = {
      ...transactionData,
      userId: userId, // This ensures the transaction belongs to the current user
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to the 'transactions' collection
    const docRef = await addDoc(collection(db, 'transactions'), transaction);
    
    console.log('Transaction added with ID:', docRef.id);
    return { id: docRef.id, ...transaction };
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Get all transactions for a user
export const getTransactions = async (userId) => {
  try {
    console.log('Getting transactions for user:', userId);
    
    // Create a query to get only transactions for this user
    const q = query(
      collection(db, 'transactions'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc') // Most recent first
    );
    
    const querySnapshot = await getDocs(q);
    const transactions = [];
    
    querySnapshot.forEach((doc) => {
      transactions.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('Found', transactions.length, 'transactions');
    return transactions;
  } catch (error) {
    console.error('Error getting transactions:', error);
    throw error;
  }
};

// Update a transaction
export const updateTransaction = async (transactionId, updates) => {
  try {
    console.log('Updating transaction:', transactionId);
    
    const transactionRef = doc(db, 'transactions', transactionId);
    const updateData = {
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    await updateDoc(transactionRef, updateData);
    console.log('Transaction updated successfully');
    
    return { id: transactionId, ...updateData };
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
};

// Delete a transaction
export const deleteTransaction = async (transactionId) => {
  try {
    console.log('Deleting transaction:', transactionId);
    console.log('Transaction ID type:', typeof transactionId);
    
    // Validate and convert transactionId to string
    if (!transactionId) {
      throw new Error('Transaction ID is required');
    }
    
    const stringTransactionId = String(transactionId).trim();
    
    if (!stringTransactionId) {
      throw new Error('Invalid transaction ID');
    }
    
    console.log('Using string transaction ID:', stringTransactionId);
    
    await deleteDoc(doc(db, 'transactions', stringTransactionId));
    console.log('Transaction deleted successfully');
    
    return stringTransactionId;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    console.error('Original transaction ID:', transactionId);
    console.error('Transaction ID type:', typeof transactionId);
    throw error;
  }
};

// Get transactions by category for a user
export const getTransactionsByCategory = async (userId, category) => {
  try {
    console.log('Getting transactions by category:', category, 'for user:', userId);
    
    const q = query(
      collection(db, 'transactions'),
      where('userId', '==', userId),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const transactions = [];
    
    querySnapshot.forEach((doc) => {
      transactions.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return transactions;
  } catch (error) {
    console.error('Error getting transactions by category:', error);
    throw error;
  }
};