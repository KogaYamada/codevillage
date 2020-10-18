import firebase from "firebase/app"
import "firebase/auth" // firebaseのauthentication(認証機能)を使用する
import "firebase/firestore" // firebaseのfirestore(データベース)の機能を使用する

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAOyf7YM8W3BM2SMNlwK7r4ihSjYKMyVp8",
    authDomain: "chapapp40.firebaseapp.com",
    databaseURL: "https://chapapp40.firebaseio.com",
    projectId: "chapapp40",
    storageBucket: "chapapp40.appspot.com",
    messagingSenderId: "182219753319",
    appId: "1:182219753319:web:329aedbbdac22cea9c91c2",
    measurementId: "G-GM7G8VGJLP"
  };
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	
	export default firebase
	export const auth = firebase.auth(); // ショートカット
 	export const db = firebase.firestore(); // ショートカット
