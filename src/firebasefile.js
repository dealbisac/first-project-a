import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrGGCwZQtt_s3wcLg-hbb-CMUIEI_Dtl8",
  authDomain: "section-a-todo-app-c6984.firebaseapp.com",
  projectId: "section-a-todo-app-c6984",
  storageBucket: "section-a-todo-app-c6984.appspot.com",
  messagingSenderId: "874380993079",
  appId: "1:874380993079:web:166b5bf33f9c369945d5b2",
  measurementId: "G-RRTRRZ90P4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;