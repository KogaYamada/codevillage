import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const useStyles = makeStyles({
  container: {
    width: '400px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('登録成功');
      })
      .catch((e) => {
        console.log('登録失敗', e);
      });
  };

  return (
    <div className={classes.container}>
      <h1>ユーザー登録ページ</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="ユーザー名"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          label="メールアドレス"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="パスワード"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
      </form>
      <Link to="/login">既にアカウントをお持ちの方</Link>
    </div>
  );
};

export default Signup;
