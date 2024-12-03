// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbF7G63VQlw5u5Tkmow4ZCp1-DR0phM1E",
  authDomain: "coffee-store-d4a40.firebaseapp.com",
  projectId: "coffee-store-d4a40",
  storageBucket: "coffee-store-d4a40.firebasestorage.app",
  messagingSenderId: "22973293706",
  appId: "1:22973293706:web:85a31f6c581d2f1112b973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);