import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALHW3zR_3rDPkE5qhHHzMJ8z02pHOpRaE",
    authDomain: "quiz-pradhan.firebaseapp.com",
    databaseURL: "https://quiz-pradhan.firebaseio.com",
    projectId: "quiz-pradhan",
    storageBucket: "quiz-pradhan.appspot.com",
    messagingSenderId: "509378767370",
    appId: "1:509378767370:web:532d0db93ca6b348d94df3",
    measurementId: "G-YQGHD4GN87"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database;

export default firebase;

