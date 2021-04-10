import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '325px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleSubimt = (e) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
  };
  return (
    <form onSubmit={handleSubimt} className={classes.root}>
      <h1>ログインページ</h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        label='メールアドレス'
      />
      <TextField
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        label='パスワード'
      />
      <Button type='submit' color='primary' variant='contained'>
        ログイン
      </Button>
      <Link to='/signup'>アカウントをお持ちでない方</Link>
    </form>
  );
};

export default Login;
