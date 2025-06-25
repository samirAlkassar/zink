// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7BB8IaRSRHZ0Sz_3ifGUDFG-S1sSLLmw",
  authDomain: "zenk-a7540.firebaseapp.com",
  projectId: "zenk-a7540",
  storageBucket: "zenk-a7540.firebasestorage.app",
  messagingSenderId: "722272564297",
  appId: "1:722272564297:web:8ac8873741aa500991fb98",
  measurementId: "G-MJB1TN0TNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };