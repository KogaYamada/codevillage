import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    color: 'red',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '400px',
    width: '350px',
    margin: '0 auto',
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <h1 className={classes.title}>ログインページ</h1>
      <TextField variant='filled' label='メールアドレス' />
      <TextField variant='outlined' label='パスワード' />
      <Link to='/signup'>アカウントを持ちでない方</Link>
      <Button variant='contained' color='secondary'>
        ログイン
      </Button>
    </form>
  );
};

export default Login;
