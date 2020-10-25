import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthService';
import { auth, db } from '../firebase';

import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  message: {
    padding: '15px',
    margin: '15px',
  },
});

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const classes = useStyles();
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      content: text,
      username: user.displayName,
      createdAt: new Date(),
    });
  };

  // useEffectのコールバック関数実行タイミング
  //  - 第二引数の依存配列の中の変数が変わるたびにコールバック関数を実行する
  //  - 画面が読み込まれた(描写された)あとの最初の一回実行される
  useEffect(() => {
    db.collection('messages').onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
      setMessages(data);
    });

    // db.collection('messages')
    //   .get()
    //   .then((querySnapshot) => {
    //     // setMessages(querySnapshot.docs.map((doc) => doc.data()));
    //     const data = querySnapshot.docs.map((doc) => doc.data());
    //     console.log(data);
    //     setMessages(data);
    //   });
  }, []);

  return (
    <div>
      {messages.map((message) => {
        return (
          <Card className={classes.message}>
            <Typography>投稿者({message.username})</Typography>
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
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};

export default Room;

// SQL noSQL
// callback : 関数の引数に関数をしていする
/*
const some = (fn) => {
  fn();
};

some(() => {});

const onClick = (fn) => {
  const e = 'イベントの情報';
  // クリックされた時
  fn(e);
};

onClick((e)=>{e.target.value})
*/
