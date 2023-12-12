// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9NIszCNdFzYMqP7xCGE4HB2XzB8yOai4",
  authDomain: "authorio-3180.firebaseapp.com",
  projectId: "authorio-3180",
  storageBucket: "authorio-3180.appspot.com",
  messagingSenderId: "216117594046",
  appId: "1:216117594046:web:6ee17f329757ff2b415bef",
  measurementId: "G-JTRCZ7MTDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dataBase = getFirestore(app)