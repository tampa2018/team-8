// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA2TY67Q0NPnBaNEHv3-2_phC3I4n84uBk",
  authDomain: "team-8-26f27.firebaseapp.com",
  databaseURL: "https://team-8-26f27.firebaseio.com",
  projectId: "team-8-26f27",
  storageBucket: "team-8-26f27.appspot.com",
  messagingSenderId: "959126174970"
};
firebase.initializeApp(config);
export default firebase;
