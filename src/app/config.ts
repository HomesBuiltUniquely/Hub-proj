// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp,FirebaseApp } from "firebase/app";
import "firebase/auth";

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