import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUNf_1Kdir1fXAqBlSjLj2owRty5rsE-c",
  authDomain: "netflix-build-8699c.firebaseapp.com",
  projectId: "netflix-build-8699c",
  storageBucket: "netflix-build-8699c.appspot.com",
  messagingSenderId: "204492203026",
  appId: "1:204492203026:web:3d53848772bb2b0d62a4cb"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };