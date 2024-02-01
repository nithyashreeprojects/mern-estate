// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f3549.firebaseapp.com",
  projectId: "real-estate-f3549",
  storageBucket: "real-estate-f3549.appspot.com",
  messagingSenderId: "82008539874",
  appId: "1:82008539874:web:13a4995cbbb8e0242a14bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);