import React from 'react';

import TextField from '@material-ui/core/TextField'; // default import
import Button from '@material-ui/core/Button'; // default import
import { makeStyles } from '@material-ui/core/styles'; // named import

const useStyles = makeStyles(() => ({
  title: {
    color: 'red',
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Login page</h1>
      <form>
        <TextField variant="outlined" label="E-mail" type="email" />
        <TextField variant="outlined" label="Password" type="password" />
        <TextField variant="outlined" label="User Name" type="text" />
        <Button variant="contained" color="primary">
          サインアップ
        </Button>
      </form>
    </>
  );
};

export default Signup;
