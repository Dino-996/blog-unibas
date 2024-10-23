// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvNrgwgr_5mFcd4uujRqEZbIMoN-NbqY0",
  authDomain: "blogunibaspooii.firebaseapp.com",
  projectId: "blogunibaspooii",
  storageBucket: "blogunibaspooii.appspot.com",
  messagingSenderId: "487135522826",
  appId: "1:487135522826:web:dcf77d9d9639236fa4eff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);