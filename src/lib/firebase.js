import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKut4r-IVOr07HlSAzra1wfoXSDoWTOHg",
  authDomain: "projectlab-4ace5.firebaseapp.com",
  projectId: "projectlab-4ace5",
  storageBucket: "projectlab-4ace5.appspot.com",
  messagingSenderId: "238172145387",
  appId: "1:238172145387:web:2ac43dea0334ea4896e0ae",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
