import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { useForm } from 'react-hook-form';

import useFetchMessage from '../hooks/useFetchMessage';
import useSaveMessage from '../hooks/useSaveMessage';

const Room = () => {
  const { register, handleSubmit, reset } = useForm();
  const { messages } = useFetchMessage();
  const { saveMessage } = useSaveMessage();
  const signout = () => auth.signOut();
  console.log('描写');
  const onSubmit = (values: { text: string }) => {
    console.log(values);
    saveMessage('asfd');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='text1' ref={register} />
        <input name='text2' ref={register} />
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
