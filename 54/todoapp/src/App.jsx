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
    { content: '掃除をする', id: nanoid(), isDone: false },
    { content: '洗濯をする', id: nanoid(), isDone: true },
    { content: '料理をする', id: nanoid(), isDone: false },
  ]);
  const addTodo = (text) => {
    // スプレッド構文
    setTodos([...todos, { content: text, id: nanoid() }]);
  };
  const deleteTodo = (id) => {
    // テスト関数:配列の要素(todo)のidと引数に取ったidと一致しないものがテストをパス
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Title />
      <Form addTodo={addTodo} />
      <List toggleIsDone={toggleIsDone} todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
