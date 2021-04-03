import { useContext, useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase/config';

// グローバルステートを用いてユーザーのログイン状態を全てのページから参照できるようにする
// Roomページでユーザーがログインしていない状態の時はログインページにリダイレクトさせるようにする

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
  },
  cardContainer: {
    margin: '20px',
  },
  card: {
    padding: '15px',
    width: '400px',
    margin: '20px auto',
  },
});

const Room = () => {
  const classes = useStyles();
  const value = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウト成功'))
      .catch(() => console.log('ログアウト失敗'));
  };

  useEffect(() => {
    db.collection('messages')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(data);
        setMessages(data);
      })
      .catch((err) => {
        console.log('ユーザー取得失敗', err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <form>
        <TextField placeholder='チャットを入力...' />
        <Button variant='contained' color='primary'>
          送信
        </Button>
      </form>
      <div className={classes.cardContainer}>
        {messages.map((message) => {
          return (
            <Card key={message.id} className={classes.card}>
              <CardHeader
                title={message.username}
                action={<Button variant='contained'>削除</Button>}
              />
              <CardContent>
                <Typography>{message.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Button onClick={logout}>ログアウト</Button>
    </div>
  );
};

export default Room;
