import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ADLaAFiF44D-2yFSqsvd7jx8EEM6hr8",
  authDomain: "clone-79347.firebaseapp.com",
  projectId: "clone-79347",
  storageBucket: "clone-79347.firebasestorage.app",
  messagingSenderId: "388935220794",
  appId: "1:388935220794:web:eed38ba1403f3a2a287f03",
  measurementId: "G-2B4GRD9QY5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
