// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJnnsqNRQrJ6pE4I_--9yQio4OygfrBM",
  authDomain: "infinity-media-b1f68.firebaseapp.com",
  projectId: "infinity-media-b1f68",
  storageBucket: "infinity-media-b1f68.appspot.com",
  messagingSenderId: "261773529639",
  appId: "1:261773529639:web:4a925595e2ebd0b0c9b402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
