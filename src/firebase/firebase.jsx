
import { initializeApp } from "firebase/app";
import {getFirestore,collection}from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyDr0XxYVLsOd60SW38N0Tvutpk3Glx4Cs8",
  authDomain: "filmyduniya-33c4c.firebaseapp.com",
  projectId: "filmyduniya-33c4c",
  storageBucket: "filmyduniya-33c4c.appspot.com",
  messagingSenderId: "719105768304",
  appId: "1:719105768304:web:66c09cd0a82e7374d8adb5"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");

export default app;