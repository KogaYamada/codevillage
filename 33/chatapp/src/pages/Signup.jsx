import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'; // default import
import Button from '@material-ui/core/Button'; // default import
import { makeStyles } from '@material-ui/core/styles'; // named import
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';

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

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // 成功するとthenの中の関数が実行される
        user
          .updateProfile({
            // ユーザーの名前を登録
            displayName: username,
          })
          .then(() => {
            // "/"に遷移
            history.push('/');
          });
      })
      .catch((error) => {
        //失敗するとcatchの中の関数が実行される
        console.log('作成失敗', error);
      });
  };

  return (
    <div className={classes.root}>
      <h1>Sign Up page</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="User Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          サインアップ
        </Button>
        <Link to="/login">既にアカウントをお持ちの方</Link>
      </form>
    </div>
  );
};

export default Signup;
