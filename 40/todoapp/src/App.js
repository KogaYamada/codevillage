import React, { useState } from 'react';

// コンポーネントをインポート(作成したコンポーネントは相対パス)
import Title from './Title';
import Form from './Form';
import List from './List';

import shortid from 'shortid';

// props: 親コンポーネントから子コンポーネントへの値の受け渡し
// state: 見た目の変更を管理する値 => stateが変更されると見た目が変わる

const App = () => {
  // stateを使用する
  const [username, setUsername] = useState('koga');
  // const [stateの値, stateを変更する関数] = useState(初期値);
  const changeName = () => {
    setUsername('taro');
  };

  const [todos, setTodos] = useState([
    { content: '掃除をする', id: shortid.generate() },
    { content: '洗濯をする', id: shortid.generate() },
    { content: '運動をする', id: shortid.generate() },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // stateを使用しない例
  // let username = 'koga';
  // const changeName = () => {
  //   username = 'taro';
  //   console.log(username);
  // };
  return (
    <React.Fragment>
      <Title name={username} />
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} todos={todos} />
      <button onClick={changeName}>名前変更ボタン</button>
    </React.Fragment>
  );
};

export default App;
