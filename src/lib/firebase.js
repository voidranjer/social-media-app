import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDboRT_KSvtuYC3XTYeSDQRaKxzl2Pc6cM",
  authDomain: "social-media-app-15068.firebaseapp.com",
  projectId: "social-media-app-15068",
  storageBucket: "social-media-app-15068.appspot.com",
  messagingSenderId: "626735156359",
  appId: "1:626735156359:web:ab8dab97878abc18a33c22",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
