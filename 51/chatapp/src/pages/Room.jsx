import { useContext, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase, { auth } from '../firebase/config';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase/config';
import ChatForm from '../compoentns/ChatForm';
import DeleteDialog from '../compoentns/DeleteDialog';

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
  const authState = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [deleteChatId, setDeleteChatId] = useState('');
  const messagesRef = db.collection('messages');

  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウト成功'))
      .catch(() => console.log('ログアウト失敗'));
  };
  const addChat = (text) => {
    if (authState.loading || authState.user == null) {
      return;
    }
    messagesRef.add({
      content: text,
      username: authState.user.displayName,
      authorId: authState.user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    // リファレンスに対してリスナーを設定する
    // リファレンスのデータに変更があった時に実行される
    messagesRef.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setMessages(data);
    });
    // messagesRef
    //   .get()
    //   .then((querySnapshot) => {
    //     const data = querySnapshot.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }));
    //     console.log(data);
    //     setMessages(data);
    //   })
    //   .catch((err) => {
    //     console.log('ユーザー取得失敗', err);
    //   });
  }, []);

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <ChatForm addChat={addChat} />
      <div className={classes.cardContainer}>
        {messages.map((message) => {
          return (
            <Card key={message.id} className={classes.card}>
              <CardHeader
                title={message.username}
                action={
                  <Button
                    onClick={() => setDeleteChatId(message.id)}
                    variant='contained'
                  >
                    削除
                  </Button>
                }
              />
              <CardContent>
                <Typography>{message.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Button onClick={logout}>ログアウト</Button>
      <DeleteDialog id={deleteChatId} onCancel={() => setDeleteChatId('')} />
    </div>
  );
};

export default Room;
