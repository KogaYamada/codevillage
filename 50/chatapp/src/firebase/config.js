import firebase from 'firebase/app';
// firebaseの認証機能を使います
import 'firebase/auth';
// fireaseのfirestoreを使います
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAQfGYv_X6bVh5x8glc8yIf27ZdTcC361A',
  authDomain: 'chatapp50-11f45.firebaseapp.com',
  projectId: 'chatapp50-11f45',
  storageBucket: 'chatapp50-11f45.appspot.com',
  messagingSenderId: '620838767117',
  appId: '1:620838767117:web:2f30a9e0e391af9f382344',
  measurementId: 'G-RQZTGK4WZD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
