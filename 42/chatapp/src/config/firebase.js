import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDxCDGMY5qeF7iqBBsstdUMg8Toieqr1L8',
  authDomain: 'chatapp42-acf57.firebaseapp.com',
  databaseURL: 'https://chatapp42-acf57.firebaseio.com',
  projectId: 'chatapp42-acf57',
  storageBucket: 'chatapp42-acf57.appspot.com',
  messagingSenderId: '515290897123',
  appId: '1:515290897123:web:909a5865137986d5fd43d6',
  measurementId: 'G-X2C3KHBH8J',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
