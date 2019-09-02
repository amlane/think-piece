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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference in the database where a user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error:", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error(error);
  }
};

export default firebaseConfig;
