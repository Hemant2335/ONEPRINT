// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBx5m_a_VToA564dZBn_mjymX-HCBT0uCo",
  authDomain: "yourprint-fe255.firebaseapp.com",
  projectId: "yourprint-fe255",
  storageBucket: "yourprint-fe255.appspot.com",
  messagingSenderId: "234659911880",
  appId: "1:234659911880:web:d88160962efbd4fd566dfd",
  measurementId: "G-MWZ4LG1T5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};