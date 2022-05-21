import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7AdqorFJkJDYWCUUoJoqzSfNF25qz_AQ",
  authDomain: "lapotp.firebaseapp.com",
  projectId: "lapotp",
  storageBucket: "lapotp.appspot.com",
  messagingSenderId: "118092226534",
  appId: "1:118092226534:web:5a0e4973bc045b0c2c8027",
  measurementId: "G-H85S42WTE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
