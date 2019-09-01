import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBM2f_WCx_CVzetvhDZ3Mih55axzXQPUk",
  authDomain: "my-first-firebase-project-yo.firebaseapp.com",
  databaseURL: "https://my-first-firebase-project-yo.firebaseio.com",
  projectId: "my-first-firebase-project-yo",
  storageBucket: "",
  messagingSenderId: "1005127690326",
  appId: "1:1005127690326:web:90019cdc9a01b4b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export default firebaseConfig;
