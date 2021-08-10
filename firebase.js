import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAkIV3S1AtSbNppoZXUayVLNMn3tL5t2EM",
    authDomain: "clone-fbb81.firebaseapp.com",
    projectId: "clone-fbb81",
    storageBucket: "clone-fbb81.appspot.com",
    messagingSenderId: "976826152595",
    appId: "1:976826152595:web:118aaf9d23f3335e36ff66",
    measurementId: "G-G21BYTCNYG",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
