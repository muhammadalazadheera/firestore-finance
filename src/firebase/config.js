import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo51CSeI9_zLSD4XpJVEsVAcGMQG6CdJs",
  authDomain: "rocket-finance.firebaseapp.com",
  projectId: "rocket-finance",
  storageBucket: "rocket-finance.appspot.com",
  messagingSenderId: "263774040602",
  appId: "1:263774040602:web:156468d80fe041c3ae57a3",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
