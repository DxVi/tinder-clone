import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOZyyO0BehTfwa_TNNsn6KKpOurOSlIew",
  authDomain: "tinder-clone-143ca.firebaseapp.com",
  databaseURL: "https://tinder-clone-143ca.firebaseio.com",
  projectId: "tinder-clone-143ca",
  storageBucket: "tinder-clone-143ca.appspot.com",
  messagingSenderId: "247844274057",
  appId: "1:247844274057:web:ff419b3076a14801a82b58",
  measurementId: "G-EFLP8S4VC0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
