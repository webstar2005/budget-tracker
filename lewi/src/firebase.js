// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_851yvrL4JUz33TAl_ruxurOtT4Rrud0",
  authDomain: "my-finance-tracker-82c77.firebaseapp.com",
  projectId: "my-finance-tracker-82c77",
  storageBucket: "my-finance-tracker-82c77.firebasestorage.app",
  messagingSenderId: "623672480384",
  appId: "1:623672480384:web:5bdeef1416359f846d0c65",
  measurementId: "G-NJSJSBS90K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Auth
export const auth = getAuth(app)