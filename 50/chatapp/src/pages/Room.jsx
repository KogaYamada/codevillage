import { useContext, useEffect } from 'react';
import { Card, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth, db } from '../firebase/config';
import { AuthContext } from '../context/AuthContext';

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

const Room = () => {
  const classes = useStyles();
  const state = useContext(AuthContext);
  // firebase authからログアウトする関数
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウトしました'))
      .catch((err) => console.log('ログアウトに失敗しました', err));
  };

  useEffect(() => {
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>チャットページ</h1>
      <div className={classes.cardConteiner}>
        <Card className={classes.card}>
          <Typography>テストユーザー</Typography>
          <Typography>こんにちは</Typography>
        </Card>
        <Card className={classes.card}>
          <Typography>テストユーザー</Typography>
          <Typography>こんにちは</Typography>
        </Card>
      </div>
      <form>
        <TextField variant='outlined' />
        <Button variant='contained'>チャットを送信</Button>
      </form>
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
