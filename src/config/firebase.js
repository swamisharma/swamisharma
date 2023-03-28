// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSu861A_TW7JcEJ7IOy17v09qRf-oPuW8",
  authDomain: "fir-console-lesson.firebaseapp.com",
  projectId: "fir-console-lesson",
  storageBucket: "fir-console-lesson.appspot.com",
  messagingSenderId: "51173716589",
  appId: "1:51173716589:web:858009fe0b0a437b1e0564",
  measurementId: "G-R52RY7FHTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();