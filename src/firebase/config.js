// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj0-xC8ymsur3O-Pn8Q9BVA4TvrghwJmQ",
    authDomain: "onnn-bdc7c.firebaseapp.com",
    projectId: "onnn-bdc7c",
    storageBucket: "onnn-bdc7c.appspot.com",
    messagingSenderId: "667011152766",
    appId: "1:667011152766:web:547bebca9ceccd04f9912f",
    measurementId: "G-ZVY7TG0VB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
