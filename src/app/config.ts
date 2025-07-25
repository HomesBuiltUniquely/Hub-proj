// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import  "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.ApiKey,
  authDomain: "otptutorial-f9583.firebaseapp.com",
  projectId: "otptutorial-f9583",
  storageBucket: "otptutorial-f9583.appspot.com",
  messagingSenderId: process.env.MessagingSenderId,
  appId: process.env.AppId,
  measurementId: "G-LXSNEZL49W"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();


export {app};