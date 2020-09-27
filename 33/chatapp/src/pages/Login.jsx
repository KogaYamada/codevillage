import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
      <form>
        <TextField variant="outlined" label="E-mail" type="email" />
        <TextField variant="outlined" label="Password" type="password" />
        <Button variant="contained" color="primary">
          ログイン
        </Button>
      </form>
    </>
  );
};

export default Login;
