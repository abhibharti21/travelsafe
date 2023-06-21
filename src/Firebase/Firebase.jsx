import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrPc_eXT3A3Xd4PL78igdQy8upKo2G3RQ",
  authDomain: "travel-75b41.firebaseapp.com",
  projectId: "travel-75b41",
  storageBucket: "travel-75b41.appspot.com",
  messagingSenderId: "498435795667",
  appId: "1:498435795667:web:0681567d1dcdc8854b0226",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
