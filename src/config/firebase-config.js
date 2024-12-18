// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4P_gcwwRKadv0T-Zl9UID7KqN0hXb2KY",
  authDomain: "ayaudiorent.firebaseapp.com",
  projectId: "ayaudiorent",
  storageBucket: "ayaudiorent.firebasestorage.app",
  messagingSenderId: "828930072531",
  appId: "1:828930072531:web:dd99e598cfc1465a745926",
  measurementId: "G-P750841CZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);