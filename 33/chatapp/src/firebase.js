import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCb5QqhV3-Bj2_O5adKBB3V4VGM0RFb-cI',
  authDomain: 'chatapp-33.firebaseapp.com',
  databaseURL: 'https://chatapp-33.firebaseio.com',
  projectId: 'chatapp-33',
  storageBucket: 'chatapp-33.appspot.com',
  messagingSenderId: '1045298182380',
  appId: '1:1045298182380:web:127e028e24955db2c20dc9',
  measurementId: 'G-XKJJVH5F9P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
