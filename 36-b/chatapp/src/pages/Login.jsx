import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    color: '#000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '350px',
    height: '350px',
    margin: '0 auto',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <h1 className={classes.title}>ログインページ</h1>
      <TextField type="email" label="メールアドレス" variant="outlined" />
      <TextField type="password" label="パスワード" variant="outlined" />
      <Button variant="contained" color="secondary">
        ログイン
      </Button>
      <Link to="/signup">アカウントをお持ちでない方</Link>
    </form>
  );
};

export default Login;
