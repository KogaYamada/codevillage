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
  const user = useContext(AuthContext);
  const classes = useStyles();
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const logout = () => {
    auth.signOut();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('messages')
      .add({
        content: text,
        createdAt: new Date(),
        username: user.displayName,
      })
      .then(() => {
        console.log('登録成功');
      })
      .catch(() => {
        console.log('登録失敗');
      });
  };
  // 並び
  // asc  昇順 default
  // desc 降順

  useEffect(() => {
    // リアルタイムでdbの値を取得する場合
    // dbの更新を監視して更新があれば再取得する
    const unsubscribe = db
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });

    // コンポーネントが画面からunmountされた(消えた)時に実行される関数
    // componentWillUnmount()に相当
    return () => {
      // onSnapshot関数の監視を止める関数
      unsubscribe();
    };
    // 1回だけ取得する場合
    // db.collection('messages')
    //   .get()
    //   .then((querySnapshot) => {
    //     setMessages(
    //       querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //     );
    //   });
  }, []);

  const messagesRef = db.collection('messages'); // collection reference
  const messageRef = db.collection('messages').doc('kAG3cRDKEwPMtKaXaFNJ');

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='チャットを入力'
        />
        <Button type='submit' variant='contained'>
          送信
        </Button>
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
