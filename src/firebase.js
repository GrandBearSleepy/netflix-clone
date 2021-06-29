import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBp7R-E0QQKstMfxZFP59M-M9Isq1K5k7Y",
  authDomain: "netflix-clone-3941a.firebaseapp.com",
  projectId: "netflix-clone-3941a",
  storageBucket: "netflix-clone-3941a.appspot.com",
  messagingSenderId: "517118424010",
  appId: "1:517118424010:web:64c1990ca26763b895d533"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {auth};
export default db;