// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfkTpe1rdoh25Di_swDlfQ5NONOVzDDcc",
  authDomain: "auth-681e9.firebaseapp.com",
  projectId: "auth-681e9",
  storageBucket: "auth-681e9.appspot.com",
  messagingSenderId: "202137178364",
  appId: "1:202137178364:web:c703ff99239fa584470779",
  measurementId: "G-K7WW72EFVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth};