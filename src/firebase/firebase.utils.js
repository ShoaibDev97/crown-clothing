import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDGKvOjQJci1SQRtBTyOLQKsREY74VpWP8",
  authDomain: "crown-project-shoaib.firebaseapp.com",
  databaseURL: "https://crown-project-shoaib.firebaseio.com",
  projectId: "crown-project-shoaib",
  storageBucket: "crown-project-shoaib.appspot.com",
  messagingSenderId: "870122545238",
  appId: "1:870122545238:web:09324003c8fbd460b59bf7",
  measurementId: "G-QHW8VNYLJ6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
