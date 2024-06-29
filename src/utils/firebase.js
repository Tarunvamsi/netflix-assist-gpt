// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk9_2X3sr8BfSZhZ6bokIzpMhZdCHmqeI",
  authDomain: "netflix-gpt-1fecd.firebaseapp.com",
  projectId: "netflix-gpt-1fecd",
  storageBucket: "netflix-gpt-1fecd.appspot.com",
  messagingSenderId: "800229747112",
  appId: "1:800229747112:web:a52249b7addb274f80959d",
  measurementId: "G-7BWK1TCK4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
