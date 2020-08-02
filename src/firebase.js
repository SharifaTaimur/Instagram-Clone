import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJeuk4ecZPT-LxJUDd_DZDBCXEoqL9r_8",
  authDomain: "instagram-clone-ea5c0.firebaseapp.com",
  databaseURL: "https://instagram-clone-ea5c0.firebaseio.com",
  projectId: "instagram-clone-ea5c0",
  storageBucket: "instagram-clone-ea5c0.appspot.com",
  messagingSenderId: "180884893160",
  appId: "1:180884893160:web:98ef37d8daadcd45dd485d",
  measurementId: "G-EGZCZKTGLF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
