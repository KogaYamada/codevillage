import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '450px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.log('ログイン失敗', error);
      });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>ログインページ</h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        type='email'
        label='メールアドレス'
        variant='filled'
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        type='password'
        label='パスワード'
        variant='outlined'
      />
      <Button type='submit' fullWidth color='secondary' variant='contained'>
        ログイン
      </Button>
      <Link to='/signup'>アカウントをお持ち出ない方</Link>
    </form>
  );
};

export default Login;
