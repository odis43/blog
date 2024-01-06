// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAfwEfkK6GrLKXfzwF8xzE8aeTMUHoOSPw",
  authDomain: "blog-94ff0.firebaseapp.com",
  databaseURL: "https://blog-94ff0-default-rtdb.firebaseio.com",
  projectId: "blog-94ff0",
  storageBucket: "blog-94ff0.appspot.com",
  messagingSenderId: "522252672807",
  appId: "1:522252672807:web:41d9cb0577ca9ebcb8d302",
  measurementId: "G-8HGFX8MMWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
