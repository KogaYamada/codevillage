import React, { useState } from 'react';
import shortid from 'shortid';

import Title from './Title';
import List from './List';
import Form from './Form';

// props: 親コンポーネントから子コンポーネントに値を渡す
// state: Reactの画面の変更させるための変数 === 画面の変更に伴う変数はstateで使わなくてはいけない

const App = () => {
  // stateを使用するコード
  const [username, setUsername] = useState('koga');
  //const [stateの値, stateを変更する関数] = useState(初期値);
  const changeName = () => {
    setUsername('taro');
  };
  const [todos, setTodos] = useState([
    { content: '掃除', id: shortid.generate(), isDone: false },
    { content: '洗濯', id: shortid.generate(), isDone: false },
  ]);
  console.log(todos);
  const addTodo = (text) => {
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // isDoneを変更する関数
  const handleIsDoneChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  /* stateを使わないコード
  let name = 'koga';
  const changeName = () => {
    name = 'taro';
    console.log(name);
  };
  */
  return (
    <React.Fragment>
      <Title name={username} />
      <List
        deleteTodo={deleteTodo}
        todos={todos}
        handleIsDoneChange={handleIsDoneChange}
      />
      <Form addTodo={addTodo} />
      <button onClick={changeName}>名前が変わるボタン</button>
    </React.Fragment>
  );
};

export default App;
