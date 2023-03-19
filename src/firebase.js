// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXTs867Z2r69_V-MBYfQOoyqnchAfuo-Y",
  authDomain: "todo-apps-250ca.firebaseapp.com",
  projectId: "todo-apps-250ca",
  storageBucket: "todo-apps-250ca.appspot.com",
  messagingSenderId: "1050408711388",
  appId: "1:1050408711388:web:31fe1970c84503fbdcb019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)