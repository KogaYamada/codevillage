import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from '../firebase/config';
import Form from '../components/Form';
import ChatItem from '../components/ChatItem';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#E2e2e2',
    minHeight: '100vh',
  },
});

// ログインしていないとこのアプリを使えない -> ログインしていないとRoomページにアクセスできない
// - グローバルステートを用いてユーザーのログイン状態を参照する
// - Roomにログインしていない状態でアクセスするとLoginページにリダイレクトされる

const Room = () => {
  const classes = useStyles();
  const value = useContext(AuthContext);
  console.log(value);
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウト成功'))
      .catch((err) => console.log('ログアウト失敗', err));
  };

  // 次週解説
  useEffect(() => {
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        console.log(data);
      })
      .catch((err) => {
        console.log('データ取得失敗', err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <Form />
      <div>
        <ChatItem username='高雅１' body='こんんちは' />
        <ChatItem username='こうが２' body='hello' />
      </div>
      <Button onClick={logout}>ログアウト</Button>
    </div>
  );
};

export default Room;
