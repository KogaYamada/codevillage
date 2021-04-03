import firebase from 'firebase/app';
// firebaseのauth(認証機能を使います)
import 'firebase/auth';
// firebaseのfirestore(データベースを使います)
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDY5jxFq7fDT34n3C3LYq1I-1-LSzEUry8',
  authDomain: 'chatapp51.firebaseapp.com',
  projectId: 'chatapp51',
  storageBucket: 'chatapp51.appspot.com',
  messagingSenderId: '601776098558',
  appId: '1:601776098558:web:69390cbdd0c352f3f5e9af',
  measurementId: 'G-NJG8G96RHM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
