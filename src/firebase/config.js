import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq9IySVqQeDDXhCjlefYLuOwbsKkmEuis",
  authDomain: "money2-9c3da.firebaseapp.com",
  projectId: "money2-9c3da",
  storageBucket: "money2-9c3da.appspot.com",
  messagingSenderId: "90473234125",
  appId: "1:90473234125:web:153d4e3be53639e7e6f384",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
