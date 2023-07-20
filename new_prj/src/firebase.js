// import { initializeApp } from "firebase/app";
// import * as initializeApp  from 'firebase/app'

// import initializeApp from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmW9iRKVlvmPwABSzkGRlMAkENWFrg7-8",
  authDomain: "trail-project-333909.firebaseapp.com",
  projectId: "trail-project-333909",
  storageBucket: "trail-project-333909.appspot.com",
  messagingSenderId: "795809681363",
  appId: "1:795809681363:web:045ef68943e7bcf107a926",
  measurementId: "G-LCJLDST1C2"
};

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const firestore = getFirestore(app);
// const db = getFirestore(app);

// var confif ={app, db}
// export default confif;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;







