import React, { FC } from 'react';
import useInput from '../hooks/useInput';
import { auth } from '../config/firebase';

import { TextField, Button } from '@material-ui/core';

const Login: FC = () => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        console.log('ログイン成功');
      })
      .catch((error) => {
        console.log('ログイン失敗', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder='メールアドレス' {...email} />
      <TextField placeholder='パスワード' {...password} />
      <Button type='submit' variant='contained'>
        ログイン
      </Button>
    </form>
  );
};

export default Login;
