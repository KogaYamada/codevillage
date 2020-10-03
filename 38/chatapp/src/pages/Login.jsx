import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>ログインページ</h1>
      <form className={classes.form}>
        <TextField label="メールアドレス" variant="outlined" />
        <TextField label="パスワード" variant="outlined" type="password" />
        <Button variant="contained" color="secondary">
          ログイン
        </Button>
      </form>
      <Link to="/signup">アカウントをお持ちでない方</Link>
    </div>
  );
};

export default Login;
