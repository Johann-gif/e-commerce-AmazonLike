import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_HsDv5rKo1fSSL8ZUNJnxxMRntKi2BWc",
    authDomain: "e-commerce-7d460.firebaseapp.com",
    projectId: "e-commerce-7d460",
    storageBucket: "e-commerce-7d460.appspot.com",
    messagingSenderId: "1096367646675",
    appId: "1:1096367646675:web:a1821df7d57cb0e4c1b126"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};