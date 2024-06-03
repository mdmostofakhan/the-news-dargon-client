// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPPqGfBAZnBs1adwhxKijhmYT5B1ojs2k",
  authDomain: "news-the-website.firebaseapp.com",
  projectId: "news-the-website",
  storageBucket: "news-the-website.appspot.com",
  messagingSenderId: "384202160069",
  appId: "1:384202160069:web:ecaa2f128eaae2b79d3dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;