import { useState, useEffect } from 'react';
import firebase, { db } from '../config/firebase';

// firestoreのtimestampの型
type timeStamp = firebase.firestore.Timestamp;

type Message = {
  content: string;
  user: string;
  id: string;
};

const useFetchMessage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({
            content: doc.data().content,
            user: doc.data().user,
            id: doc.id,
          }))
        );
      });
  }, []);

  return { messages };
};

export default useFetchMessage;
