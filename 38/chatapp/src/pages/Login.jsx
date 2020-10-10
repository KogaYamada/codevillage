import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../firebase"

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("ログイン成功", response);
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        console.error("ログイン失敗", error);
        setLoading(false);
      });
  }

  return (
    <div className={classes.container}>
      <h1>ログインページ</h1>
      <form onSubmit={ handleSubmit } className={ classes.form }>
        <TextField
          label="メールアドレス"
          variant="outlined"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          label="パスワード"
          variant="outlined"
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button type="submit" disabled={ loading } variant="contained" color="secondary">
          ログイン
        </Button>
      </form>
      <Link to="/signup">アカウントをお持ちでない方</Link>
    </div>
  );
};

export default Login;
