import { useState } from 'react';
import { nanoid } from 'nanoid';
import Title from './Title';
import Form from './Form';
import List from './List';

// props
// 親コンポーネントから子コンポーネントに値を渡す方法
// <コンポーネント名 props名=値 />

// state
// アプリケーションの見た目の表示に関係する変数

const App = () => {
  const [todos, setTodos] = useState([
    { content: '掃除をする', id: nanoid() },
    { content: '洗濯をする', id: nanoid() },
    { content: '料理をする', id: nanoid() },
  ]);
  const addTodo = (text) => {
    // スプレッド構文
    setTodos([...todos, { content: text, id: nanoid() }]);
  };
  return (
    <>
      <Title />
      <Form addTodo={addTodo} />
      <List todos={todos} />
    </>
  );
};

export default App;
