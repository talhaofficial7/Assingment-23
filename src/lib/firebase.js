import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCsQUxDhvRmoRMbz6Bqw21Ehc3gHBsYBNg",
  authDomain: "media-app-8b414.firebaseapp.com",
  projectId: "media-app-8b414",
  storageBucket: "media-app-8b414.appspot.com",
  messagingSenderId: "413687724586",
  appId: "1:413687724586:web:764f045c0e0c9d4fd76153",
  measurementId: "G-QG58JQDWMZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

