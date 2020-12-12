import React from 'react';
import useInput from '../hooks/useInput';
import { auth } from '../config/firebase';

import { TextField, Button } from '@material-ui/core';

const Signup = () => {
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(({ user }) => {
        // 作成成功した時
        if (user === null) throw new Error('user is null');
        user.updateProfile({ displayName: username.value }).then(() => {
          console.log('user 作成成功');
        });
      })
      .catch((error) => {
        // 作成失敗した時 or thenの中でerrorが発生した時
        console.log('ERROR!!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder='ユーザー名' {...username} />
      <TextField placeholder='メールアドレス' {...email} />
      <TextField placeholder='パスワード' {...password} />
      <Button type='submit' variant='contained'>
        登録
      </Button>
    </form>
  );
};

export default Signup;
