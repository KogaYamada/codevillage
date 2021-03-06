import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '450px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

// signup機能を実装するために
// - 各入力欄をReactで管理して、formが送信された時に入力内容を参照する
// - form送信時にfirebaseの機能を使用してユーザー登録を行う

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      // then: 直前の非同期処理が成功した時に実行されるメソッド
      .then((userCredential) => {
        userCredential.user
          .updateProfile({ displayName: username })
          .then(() => {
            console.log('ユーザー作成成功', userCredential);
            history.push('/');
          });
      })
      // catch: 直前の非同期処理が失敗した時に実行されるメソッド
      .catch((error) => {
        console.log('ユーザー作成失敗', error);
      });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>ユーザー登録ページ</h1>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        type='text'
        label='ユーザー名'
        variant='standard'
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        type='email'
        label='メールアドレス'
        variant='filled'
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        type='password'
        label='パスワード'
        variant='outlined'
      />
      <Button type='submit' fullWidth color='primary' variant='contained'>
        登録
      </Button>
      <Link to='/login'>アカウントをお持ちの方</Link>
    </form>
  );
};

export default Signup;
