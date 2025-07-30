// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp,FirebaseApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTjEdu_92IopHAO-feHlPuP9cbqrwEjY0",
  authDomain: "hubotp-a2dac.firebaseapp.com",
  projectId: "hubotp-a2dac",
  storageBucket: "hubotp-a2dac.appspot.com",
  messagingSenderId: "581708164901",
  appId: "1:581708164901:web:c369bc9f5ccd0835eb74cc",
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