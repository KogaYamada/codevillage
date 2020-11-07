import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthService';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  messaage: {
    padding: '15px',
    margin: '15px',
  },
});

const Room = () => {
  const history = useHistory();
  const classes = useStyles();
  const user = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  // firestoreにメッセージの内容を追加
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('文字を入力して下さい');
      return;
    }
    db.collection('messages')
      .add({
        content: text,
        username: user.displayName,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('追加成功');
        setText('');
      })
      .catch((error) => {
        console.error('追加失敗', error);
      });
  };

  // 最初の1回実行
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        // firestoreのmessagesコレクションの値が更新された時
        const messages = querySnapshot.docs.map((doc) => {
          return doc.data();
        });
        setMessages(messages);
      });
  }, []);

  const logout = () => {
    auth.signOut();
    history.push('/login');
  };
  return (
    <>
      <h1>Room</h1>
      {messages.map((message, index) => {
        return (
          <Card key={index} className={classes.messaage}>
            <Typography>メッセージ投稿者:{message.username}</Typography>
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
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Room;
