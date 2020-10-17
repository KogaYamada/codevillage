import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD82twgHw5zUEQsyVwZ7ZgoGKStRaVsrzU',
  authDomain: 'chatapp-569ad.firebaseapp.com',
  databaseURL: 'https://chatapp-569ad.firebaseio.com',
  projectId: 'chatapp-569ad',
  storageBucket: 'chatapp-569ad.appspot.com',
  messagingSenderId: '1089146961954',
  appId: '1:1089146961954:web:a317844911ecadb612ca7b',
  measurementId: 'G-GCV3J9PYHL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();

