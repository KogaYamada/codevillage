import { useContext, useEffect, useState } from 'react';
import { Card, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase, { auth, db } from '../firebase/config';
import { AuthContext } from '../context/AuthContext';
import Form from '../components/Form';
const useStyles = makeStyles({
  cardConteiner: {
    backgroundColor: '#EEE',
  },
  card: {
    width: '300px',
    padding: '15px',
    margin: '10px',
  },
});

// 次回: 削除機能(自分の投稿を削除できる)
//      ならびかえ

const Room = () => {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  // firebase authからログアウトする関数
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウトしました'))
      .catch((err) => console.log('ログアウトに失敗しました', err));
  };

  // firestoreのmessagesにデータを保存する
  const addChat = (text) => {
    db.collection('messages')
      .add({
        username: user.data.displayName,
        content: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('チャット送信成功');
      })
      .catch((err) => {
        console.log('チャット送信失敗', err);
      });
  };

  // firestoreのmessagesを取得
  useEffect(() => {
    // get: 実行されたタイミングのデータを取得
    // onSnapshot: firestoreのデータの変更を監視して、変更があればデータを取得する
    const messagesRef = db.collection('messages');
    const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    // コンポーネントがアンマウントされる直前に実行
    return () => {
      unsubscribe();
    };
    // messagesRef.get().then((querySnapshot) => {
    //   const data = querySnapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));
    //   setMessages(data);
    // });
  }, []);
  console.log(messages);

  return (
    <>
      <h1>チャットページ</h1>
      <div className={classes.cardConteiner}>
        {messages.map((message) => (
          <Card key={message.id} className={classes.card}>
            <Typography>{message.username}</Typography>
            <Typography>{message.content}</Typography>
          </Card>
        ))}
      </div>
      <Form onSubmit={addChat} />
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Room;

// const db = {
//   users: {
//     SvQA9ugMkcMRk8kE3zKX: {
//       name: 'こうが',
//       age: 12,
//       createdAt: 'xx月xx日',
//     },
//     mH2XgQirSX1v5JMeHIdz: {
//       name: 'たろう',
//       age: 13,
//       createdAt: 'xx月xx日',
//     },
//   },
// };

// 5ふんま休憩
