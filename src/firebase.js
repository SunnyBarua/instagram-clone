import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyATtf0me5aJwvD9BDZYo34_-wp_Q0E1WXQ",
    authDomain: "instagram-clone-66db7.firebaseapp.com",
    databaseURL: "https://instagram-clone-66db7.firebaseio.com",
    projectId: "instagram-clone-66db7",
    storageBucket: "instagram-clone-66db7.appspot.com",
    messagingSenderId: "140824970881",
    appId: "1:140824970881:web:374538103b8c029f71af80",
    measurementId: "G-W0Q8TJWHFM"
  });

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const storage=firebaseApp.storage();

export {db,auth,storage};
