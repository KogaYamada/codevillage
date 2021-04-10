import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '350px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

// サインアップ機能を実装するには
// - 入力された内容を参照できる
// - firebaseにユーザー登録の問い合わせをする

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    // firebaseに、このemailとpasswordでユーザーを作成してください
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user
          .updateProfile({ displayName: username })
          .then(() => {
            console.log('ユーザー作成成功', userCredential);
          });
      })
      .catch((err) => {
        console.log('ユーザー作成失敗', err);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <h1>ユーザー登録ページ</h1>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        label='ユーザーネーム'
      />
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
      <Button type='submit' variant='contained'>
        登録
      </Button>
      <Link to='/login'>アカウントをすでにお持ちの方</Link>
    </form>
  );
};

export default Signup;
