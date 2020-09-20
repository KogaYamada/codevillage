import React, { useState } from 'react';
import shortid from 'shortid';
import Title from './Title';
import List from './List';
import Form from './Form';

const App = () => {
  const [username, setUsername] = useState('koga');
  const [todos, setTodos] = useState([
    { content: '掃除する', id: shortid.generate() },
    { content: '洗濯する', id: shortid.generate() },
    { content: '料理する', id: shortid.generate() },
  ]);
  const addTodo = (text) => {
    // todoリストを増やす関数
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const changeName = () => {
    setUsername('Taro'); // 引数にとった値に完全に置き換わる
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <React.Fragment>
      <Title name={username} />
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} todos={todos} />
      <button onClick={changeName}>名前変わるボタン</button>
    </React.Fragment>
  );
};

export default App;
