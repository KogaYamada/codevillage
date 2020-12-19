import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase';

import useFetchMessage from '../hooks/useFetchMessage';
import useSaveMessage from '../hooks/useSaveMessage';
import useInput from '../hooks/useInput';

const Room = () => {
  const text = useInput('');
  const { messages } = useFetchMessage();
  const { saveMessage } = useSaveMessage();
  const signout = () => auth.signOut();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveMessage(text.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input {...text} />
        <button type='submit'>送信</button>
      </form>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              {message.content} - 投稿者:{message.user}
            </li>
          );
        })}
      </ul>
      Room<button onClick={signout}>ログアウト</button>
    </>
  );
};

export default Room;
