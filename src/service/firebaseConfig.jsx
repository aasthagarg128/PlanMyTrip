// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://fir ebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRbXLDN8r0Vr9f_X9nZENMctL4FuHe3JM",
  authDomain: "planmytrip-adfb0.firebaseapp.com",
  projectId: "planmytrip-adfb0",
  storageBucket: "planmytrip-adfb0.firebasestorage.app",
  messagingSenderId: "37899620017",
  appId: "1:37899620017:web:096bac4546c134fce71c90",
  measurementId: "G-G4PZ49WZZV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);