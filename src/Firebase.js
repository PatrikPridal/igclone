import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQVPLwtLK1X_UIvFCEQT7_lMGdZeX7VQw",
  authDomain: "igschedule-b82d7.firebaseapp.com",
  databaseURL: "https://igschedule-b82d7.firebaseio.com",
  projectId: "igschedule-b82d7",
  storageBucket: "igschedule-b82d7.appspot.com",
  messagingSenderId: "977307697194",
  appId: "1:977307697194:web:09a688efdeb7abb5f2c353",
  measurementId: "G-KSYVTGFKZR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();



export { db, auth, storage };
