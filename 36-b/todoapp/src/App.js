import React, { useState } from 'react';
import shortid from 'shortid';

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
    { content: '掃除', id: shortid.generate() },
    { content: '洗濯', id: shortid.generate() },
    { content: '運動', id: shortid.generate() },
  ]);
  console.log(todos);

  const addTodo = (text) => {
    // スプレッド構文
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Title name={username} />
      <List deleteTodo={deleteTodo} todos={todos} />
      <Form addTodo={addTodo} />
      <button onClick={changeName}>名前が変わるボタン</button>
    </>
  );
};

export default App;
