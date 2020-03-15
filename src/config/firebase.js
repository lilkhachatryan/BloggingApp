import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; 
import "firebase/storage";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA50eJOu7Tf0H2OUdJH25rFmVbi1C1zWBs",
    authDomain: "blogging-app-435bb.firebaseapp.com",
    databaseURL: "https://blogging-app-435bb.firebaseio.com",
    projectId: "blogging-app-435bb",
    storageBucket: "blogging-app-435bb.appspot.com",
    // messagingSenderId: "sender-id",
    // appId: "app-id",
    // measurementId: "G-measurement-id",
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
export default firebase;

export const firebaseDb = myFirebase.firestore();
export const storage = firebase.storage();
export const auth = myFirebase.auth();
