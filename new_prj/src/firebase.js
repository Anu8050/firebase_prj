import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyASjvRhnoJcZg2wIsezfQOQCvQ1Dg16yXI",
  authDomain: "myfirebase-faa87.firebaseapp.com",
  projectId: "myfirebase-faa87",
  storageBucket: "myfirebase-faa87.appspot.com",
  messagingSenderId: "964680769199",
  appId: "1:964680769199:web:65591f4b4ee3f339917e5a",
  measurementId: "G-R8TG137N9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);