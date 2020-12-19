import { useContext } from 'react';
import firebase, { db } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';

const useSaveMessage = () => {
  const userState = useContext(AuthContext);

  const saveMessage = (text: string) => {
    if (userState.isLogin) {
      db.collection('messages').add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: userState.name,
        content: text,
      });
    } else {
      alert('ログインしてください');
    }
  };

  return { saveMessage };
};

export default useSaveMessage;
