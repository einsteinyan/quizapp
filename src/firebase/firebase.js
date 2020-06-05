import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALHW3zR_3rDPkE5qhHHzMJ8z02pHOpRaE",
  authDomain: "quiz-pradhan.firebaseapp.com",
  databaseURL: "https://quiz-pradhan.firebaseio.com",
  projectId: "quiz-pradhan",
  storageBucket: "quiz-pradhan.appspot.com",
  messagingSenderId: "509378767370"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;