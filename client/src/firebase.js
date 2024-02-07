// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rk-estates.firebaseapp.com",
  projectId: "rk-estates",
  storageBucket: "rk-estates.appspot.com",
  messagingSenderId: "906260731924",
  appId: "1:906260731924:web:250114e3eeb25058b4af01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
