// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp,FirebaseApp } from "firebase/app";
import "firebase/auth";

// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

// Check for missing environment variables in development
if (process.env.NODE_ENV === 'development') {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    console.warn('Missing Firebase environment variables:', missingVars);
    console.warn('Please check your .env.local file');
  }
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hubotp-a2dac.firebaseapp.com",
  projectId: "hubotp-a2dac",
  storageBucket: "hubotp-a2dac.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-4GLDFLL8FH"
};

// Initialize Firebase
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };