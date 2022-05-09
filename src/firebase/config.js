import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5lrpox8i00q9vkqJcTlK3HF5mkLFcOSw",
  authDomain: "reading-list-app-e2a4f.firebaseapp.com",
  projectId: "reading-list-app-e2a4f",
  storageBucket: "reading-list-app-e2a4f.appspot.com",
  messagingSenderId: "578532656435",
  appId: "1:578532656435:web:b5f116ea412a01e4e96a46",
};

// init firebase:
initializeApp(firebaseConfig);

// init firestore:
const db = getFirestore();

// init firebase auth:
const auth = getAuth();

export { db, auth };
