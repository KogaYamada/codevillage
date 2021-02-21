import firebase from 'firebase/app';
// firebaseで使うサービスを別途import
import 'firebase/auth';

// このファイルはfirebaseの基本設定など書く
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCsNpk8b8knk3zacffDo22dNjZHSbdQ92A',
  authDomain: 'chatapp48.firebaseapp.com',
  projectId: 'chatapp48',
  storageBucket: 'chatapp48.appspot.com',
  messagingSenderId: '1043200356009',
  appId: '1:1043200356009:web:bbc96aa6d6308e3e2683b8',
  measurementId: 'G-8NPVFNHRW2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();

export default firebase;
