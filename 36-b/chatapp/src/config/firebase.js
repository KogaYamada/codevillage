import firebase from 'firebase/app';
import 'firebase/auth'; // 認証機能(ログイン・サインアップ)
import 'firebase/firestore'; // データベース

const firebaseConfig = {
  apiKey: 'AIzaSyCci3mnbGYbAMkYDCa6x8wneM8MzhyCQqM',
  authDomain: 'chatapp-36-b.firebaseapp.com',
  databaseURL: 'https://chatapp-36-b.firebaseio.com',
  projectId: 'chatapp-36-b',
  storageBucket: 'chatapp-36-b.appspot.com',
  messagingSenderId: '84930107229',
  appId: '1:84930107229:web:6c16db66950c7847fafab4',
  measurementId: 'G-5EX45YDL8E',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
// firebaseの認証機能
export const auth = firebase.auth();
// データベース(firestore)の機能
export const db = firebase.firestore();

