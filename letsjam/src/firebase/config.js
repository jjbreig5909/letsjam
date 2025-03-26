// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiwFCAIklFHkS82AOyeuNIoMkQPIqVPq8",
  authDomain: "letsjam-3a7a2.firebaseapp.com",
  projectId: "letsjam-3a7a2",
  storageBucket: "letsjam-3a7a2.firebasestorage.app",
  messagingSenderId: "346290001387",
  appId: "1:346290001387:web:3af2977b6f4c9557aff5ae",
  measurementId: "G-5JWY0TWS8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 