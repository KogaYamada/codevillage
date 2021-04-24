import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';
import Form from '../components/Form';
import ChatItem from '../components/ChatItem';
import { useChat } from '../hooks/useChat';

const useStyles = makeStyles({
  cardConteiner: {
    backgroundColor: '#EEE',
  },
});

const Room = () => {
  const classes = useStyles();
  const { messages, deleteChat, addChat } = useChat();
  // firebase authからログアウトする関数
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log('ログアウトしました'))
      .catch((err) => console.log('ログアウトに失敗しました', err));
  };

  return (
    <>
      <h1>チャットページ</h1>
      <div className={classes.cardConteiner}>
        {messages.map((message) => (
          <ChatItem
            key={message.id}
            username={message.username}
            content={message.content}
            onClick={() => {
              deleteChat(message.id);
            }}
            isAuthor={message.isAuthor}
          />
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
