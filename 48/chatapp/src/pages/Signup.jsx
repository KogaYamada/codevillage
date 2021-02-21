import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '350px',
    height: '370px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
// サインアップ機能
// ユーザー名、メールアドレス、パスワードを入力してその値をfirebaseの認証機能に保存
// 登録ボタンが押されたら、各inputの入力内容を取得できる

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // このタイミングでfirebaseにアカウントを作成
    // 第一引数にemail,第二引数にpassword
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // createUserWithEmailAndPasswordメソッドが成功した時
        user
          .updateProfile({ displayName: username })
          .then(() => {
            // Room.jsxのページへ遷移する
            console.log('user作成成功しました', user);
            history.push('/');
          })
          .catch((error) => {
            console.log('username設定失敗', error);
          });
      })
      .catch((error) => {
        // createUserWithEmailAndPasswordメソッドが失敗した時
        console.log('user作成失敗', error);
      });

    console.log('handleSubmitの最後の処理');
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <h1>ユーザー登録ページ</h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        fullWidth
        label='メールアドレス'
        variant='outlined'
      />
      <TextField
        value={password}
        onChange={(e) => setPasswod(e.target.value)}
        type='password'
        fullWidth
        label='パスワード'
        variant='filled'
      />
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        fullWidth
        label='ユーザーネーム'
        variant='standard'
      />
      <Button type='submit' variant='contained' color='primary'>
        登録
      </Button>
      <Link to='/login'>アカウントを既にお持ちの方</Link>
    </form>
  );
};

export default Signup;
