import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { auth } from '../config/firebase';

/* {} を使う時
オブジェクト　{key: value}
処理部分(if,for,関数)
分割代入 const {name} = {name: "koga"}
*/
/* () を使う時
関数の実行 関数名()
関数の引数 () => {}
複数行の処理を一つの処理として判断したい時 //気にしなくていい
*/

const useStyles = makeStyles({
  title: {
    color: 'red',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '400px',
    width: '350px',
    margin: '0 auto',
  },
});

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const [pass, set] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // createUserWithEmailAndPasswordが成功した時の処理

        // ユーザー名の登録
        result.user.updateProfile({ displayName: username }).then(() => {
          console.log('ユーザー作成成功', result);
        });
      })
      .catch((error) => {
        // createUserWithEmailAndPasswordが失敗した時の処理
        console.log('ユーザー作成失敗', error);
      });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1 className={classes.title}>ユーザー登録ページ</h1>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant='standard'
        label='ユーザーネーム'
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant='filled'
        label='メールアドレス'
      />
      <TextField
        type={pass}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant='outlined'
        label='パスワード'
      />
      <Link to='/login'>アカウントをすでにお持ちの方</Link>
      <Button type='submit' variant='contained' color='primary'>
        登録
      </Button>
      <Button onClick={() => set(pass === 'password' ? 'text' : 'password')}>
        目
      </Button>
    </form>
  );
};

export default Signup;
