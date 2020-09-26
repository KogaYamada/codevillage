import React, { useState } from 'react';

// 自分で作ったファイルは相対パスでインポート
import Title from './Title';
import List from './List';
import Form from './Form';

// props: 親コンポーネントから子コンポーネントに値を渡す
// state: Reactの画面を更新するのに必要な変数 === stateを変更すれば画面が再描写される

const App = () => {
  const [username, setUsername] = useState('太郎');
  // const [stateの値, stateを更新する関数] = useState(初期値);
  const changeName = () => {
    setUsername('じろう');
  };
  const [todos, setTodos] = useState([
    { content: '掃除' },
    { content: '洗濯' },
    { content: '運動' },
  ]);

  const addTodo = (text) => {
    // スプレッド構文
    setTodos([...todos, { content: text }]);
  };

  return (
    <>
      <Title name={username} />
      <List todos={todos} />
      <Form addTodo={addTodo} />
      <button onClick={changeName}>名前が変わるボタン</button>
    </>
  );
};

export default App;
