import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { AuthContext } from '../components/AuthService';
import { Button, TextField, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import firebase from "../firebase"

const useStyles = makeStyles({
  message: {
    padding: '15px',
    margin: '15px',
  },
});

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const { user } = useContext(AuthContext);
  const classes = useStyles();

  const signOut = () => {
    auth.signOut();
  };

  // メッセージを追加
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('文字を入力してください');
      return;
    }
    db.collection('messages')
      .add({
        content: text,
        user: user.displayName,
        createdAt: new Date(),
      })
      .then(() => setText(''));
    /*
	firebase.firestore().collection("messages").add({})
	*/
  };

  //最初の一回
  useEffect(() => {
    // onSnapshot
    // firestoreのmessagesコレクションのデータに更新があった時に実行される
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMessages(messages);
        function sound(type, sec) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          osc.type = type;
          osc.connect(ctx.destination);
          osc.start();
          osc.stop(sec);
        }

        sound('square', 0.3);
      });
    // db.collection('messages')
    //   .get()
    //   .then((querySnapshot) => {
    //     setMessages(
    //       querySnapshot.docs.map((doc) => {
    //         return { ...doc.data(), id: doc.id };
    //       })
    //     );
    //   });
  }, []);

  return (
    <>
      <h1>チャットルーム</h1>
      {messages.map((message) => {
        return (
          <Card key={message.id} className={classes.message}>
            <Typography>投稿者: {message.user}</Typography>
            <Typography>{message.content}</Typography>
          </Card>
        );
      })}
      <form onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          size='small'
          placeholder='メッセージを入力'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' variant='contained' color='secondary'>
          送信
        </Button>
      </form>
      <button onClick={signOut}>ログアウト</button>
    </>
  );
};

export default Room;
// messagesコレクションを作成して、それを取得=> 一覧表示
