// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB55x6T9_GCV6qsdYu7bF6JNfFYzlEBb20",
  authDomain: "infinitytech-29723.firebaseapp.com",
  projectId: "infinitytech-29723",
  storageBucket: "infinitytech-29723.appspot.com",
  messagingSenderId: "527885850325",
  appId: "1:527885850325:web:37c5836deec9d95a70f45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)