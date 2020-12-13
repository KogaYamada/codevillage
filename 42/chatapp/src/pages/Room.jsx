import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth, db } from '../config/firebase';

import { Card, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F3F3F3',
  },
  card: {
    margin: '15px',
    padding: '15px',
  },
});

const Room = () => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  console.log(text);
  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    db.collection('messages')
      .get()
      .then((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
  }, []);

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <form>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='チャットを入力'
        />
        <Button variant='contained'>送信</Button>
      </form>

      {messages.map((message) => {
        return (
          <Card className={classes.card} key={message.id}>
            <span>{message.username}</span>:{message.content}
          </Card>
        );
      })}
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Room;
