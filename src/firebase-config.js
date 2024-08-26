// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7oEOgU6ILJcHUxfwp9QYGe81LBwp0sq8",
  authDomain: "articlesuggestion.firebaseapp.com",
  projectId: "articlesuggestion",
  storageBucket: "articlesuggestion.appspot.com",
  messagingSenderId: "1023825505471",
  appId: "1:1023825505471:web:748092ed93fe8dcc1e6a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
