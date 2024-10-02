// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfLfhOMCTuoQP6RR6jRepgXoikpo2sqeY",
  authDomain: "tp1-clientes-web-mobile.firebaseapp.com",
  projectId: "tp1-clientes-web-mobile",
  storageBucket: "tp1-clientes-web-mobile.appspot.com",
  messagingSenderId: "133294048264",
  appId: "1:133294048264:web:205912120e38a981643dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);