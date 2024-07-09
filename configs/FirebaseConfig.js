// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC88Ofe123qktRX_2-sQ-tBWK_d0k4v0Gk",
  authDomain: "ai-travel-4aa89.firebaseapp.com",
  projectId: "ai-travel-4aa89",
  storageBucket: "ai-travel-4aa89.appspot.com",
  messagingSenderId: "664417283983",
  appId: "1:664417283983:web:e746d37f65bddaa1aba5fa",
  measurementId: "G-65X8MKJHG2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);