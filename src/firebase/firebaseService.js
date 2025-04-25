// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Helper function to get environment variables
const getEnvVariable = (envVar, fallback) => {
  return import.meta.env[envVar] || fallback;
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnvVariable("VITE_API_KEY"),
  authDomain: getEnvVariable("VITE_AUTH_DOMAIN"),
  projectId: getEnvVariable("VITE_PROJECT_ID"),
  storageBucket: getEnvVariable("VITE_STORAGE_BUCKET"),
  messagingSenderId: getEnvVariable("VITE_MESSAGING_SENDER_ID"),
  appId: getEnvVariable("VITE_APP_ID"),
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
export { auth, db };