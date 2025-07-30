// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB87AUeODoy558xYjxOBFVK9NGC7oc_65s",
  authDomain: "otptutorial-f9583.firebaseapp.com",
  projectId: "otptutorial-f9583",
  storageBucket: "otptutorial-f9583.appspot.com",
  messagingSenderId: "429583317667",
  appId: "1:429583317667:web:e81aca994072f5fdd0dd16",
  measurementId: "G-LXSNEZL49W"
};

// Initialize Firebase
let app: any;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };