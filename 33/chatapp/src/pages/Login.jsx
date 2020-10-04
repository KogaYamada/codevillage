import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField'; // default import
import Button from '@material-ui/core/Button'; // default import
import { makeStyles } from '@material-ui/core/styles'; // named import

const useStyles = makeStyles(() => ({
  root: {
    width: '350px',
    margin: '0 auto',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'space-between',
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Login page</h1>
      <form className={classes.form}>
        <TextField variant="outlined" label="E-mail" type="email" />
        <TextField variant="outlined" label="Password" type="password" />
        <Button variant="contained" color="secondary">
          サインアップ
        </Button>
        <Link to="/signup">アカウントをお持ちでない方</Link>
      </form>
    </div>
  );
};

export default Login;
