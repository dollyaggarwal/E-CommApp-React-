import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd-0vVC67guATGdD2hf3JpcxE7ge78T7E",
  authDomain: "ecommerceapp-2025.firebaseapp.com",
  projectId: "ecommerceapp-2025",
  storageBucket: "ecommerceapp-2025.appspot.com",
  messagingSenderId: "760618268205",
  appId: "1:760618268205:web:e608c8f6705f4ba6f4eaa4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app; 
