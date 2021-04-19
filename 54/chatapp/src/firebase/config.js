import firebase from 'firebase/app';
// 使用する機能をインポート
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDz3mixTueBsGiM217MgfF8HTIPZAgSVP0',
  authDomain: 'chatapp54-e737b.firebaseapp.com',
  projectId: 'chatapp54-e737b',
  storageBucket: 'chatapp54-e737b.appspot.com',
  messagingSenderId: '401428584868',
  appId: '1:401428584868:web:53abf2526911362c860931',
  measurementId: 'G-3T4XHLZ278',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
