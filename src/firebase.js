import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAi9WdvoMdsFofXnqzLnp8QbytdPx96RQA",
  authDomain: "chatapp-dc447.firebaseapp.com",
  projectId: "chatapp-dc447",
  storageBucket: "chatapp-dc447.appspot.com",
  messagingSenderId: "937268209019",
  appId: "1:937268209019:web:64cb07ffc87f3b8295c9de",
  measurementId: "G-GCT4TMNVS0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
