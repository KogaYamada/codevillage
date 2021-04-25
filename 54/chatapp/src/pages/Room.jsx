import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase, { auth, db } from '../firebase/config';
import Form from '../components/Form';
import ChatItem from '../components/ChatItem';
import DeleteDialog from '../components/DeleteDialog';

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
  const authState = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [deleteChatId, setDeleteChatId] = useState('');
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウト成功'))
      .catch((err) => console.log('ログアウト失敗', err));
  };

  const closeDialog = () => setDeleteChatId('');

  const deleteChat = (id) => {
    db.collection('messages')
      .doc(id)
      .delete()
      .then(() => {
        console.log('削除完了');
      })
      .catch((err) => {
        console.log('削除失敗');
      });
  };

  const addChat = (text) => {
    db.collection('messages')
      .add({
        authorId: authState.user.uid,
        username: authState.user.displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        content: text,
      })
      .then(() => {
        console.log('追加成功');
      })
      .catch((err) => {
        console.log('追加失敗:', err);
      });
  };

  useEffect(() => {
    const messagesRef = db.collection('messages');
    // リスナーを設定している(きっかけを待っている)
    // messagesRefのデータの変更があった時にデータ取得
    // 初回実行時にもデータ取得
    messagesRef.onSnapshot((querySnapshot) => {
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
    //     const data = querySnapshot.docs.map((doc) => {
    //       return {
    //         ...doc.data(),
    //         id: doc.id,
    //       };
    //     });
    //     setMessages(data);
    //   })
    //   .catch((err) => {
    //     console.log('データ取得失敗', err);
    //   });
  }, []);

  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <Form addChat={addChat} />
      <div>
        {messages.map((message) => {
          return (
            <ChatItem
              key={message.id}
              username={message.username}
              body={message.content}
              isAuthor={message.authorId === authState.user.uid}
              onClick={() => setDeleteChatId(message.id)}
            />
          );
        })}
      </div>
      <Button onClick={logout}>ログアウト</Button>
      <DeleteDialog
        open={deleteChatId !== ''}
        onOk={closeDialog}
        onCancel={closeDialog}
      />
    </div>
  );
};

export default Room;
