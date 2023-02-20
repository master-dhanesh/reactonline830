// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk59KZ4r_TOYaaAS2eteK5iUVn1jd6sng",
    authDomain: "onnn-32a9d.firebaseapp.com",
    projectId: "onnn-32a9d",
    storageBucket: "onnn-32a9d.appspot.com",
    messagingSenderId: "247677448819",
    appId: "1:247677448819:web:6710e3f46fb9400d3cf006",
    measurementId: "G-7SBMZR87RX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
