import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Item from './Item';

const List = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // firestoreからデータを取得する処理
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMessages(data);
      });
  }, []);
  return (
    <>
      {messages.map((message) => {
        return <Item key={message.id} message={message} />;
      })}
    </>
  );
};

export default List;
