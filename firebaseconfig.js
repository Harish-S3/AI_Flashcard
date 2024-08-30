// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZpcwadSDc6TwHfEtRSzUVW9pjH_veodA",
  authDomain: "ai-flashcard-29ead.firebaseapp.com",
  projectId: "ai-flashcard-29ead",
  storageBucket: "ai-flashcard-29ead.appspot.com",
  messagingSenderId: "828103052904",
  appId: "1:828103052904:web:527ba0e481d21c3671f5dd",
  measurementId: "G-Q6VJX1JWYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}