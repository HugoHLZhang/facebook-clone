import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM4RT845pJJJp191bZCP77zQbugTKIdmg",
  authDomain: "facebook-clone-4e47e.firebaseapp.com",
  projectId: "facebook-clone-4e47e",
  storageBucket: "facebook-clone-4e47e.appspot.com",
  messagingSenderId: "498699877896",
  appId: "1:498699877896:web:b07a17c26dbd3b1cdd1bbd",
  measurementId: "G-8KZQR0MP0Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;