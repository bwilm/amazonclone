import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyA91UeN5ROMF0wckt0aVtUlkuFBBu0mYbs",
        authDomain: "clone-98305.firebaseapp.com",
        databaseURL: "https://clone-98305.firebaseio.com",
        projectId: "clone-98305",
        storageBucket: "clone-98305.appspot.com",
        messagingSenderId: "220591624940",
        appId: "1:220591624940:web:4b52c189999a67ee804bc9",
        measurementId: "G-5ZELJ59QZF"


});

const db= firebaseApp.firestore();
const auth= firebase.auth();

export {auth};