import React, { useState } from 'react';
import shortid from 'shortid'; // ライブラリの型定義ファイルが必要

// 自分で作ったファイルは相対パスでインポート
import Title from './Title';
import List from './List';
import Form from './Form';

// props: 親コンポーネントから子コンポーネントに値を渡す
// state: Reactの画面を更新するのに必要な変数 === stateを変更すれば画面が再描写される

export type Todo = {
  content: string;
  id: string;
  isDone: boolean;
};

const App = () => {
  const [username, setUsername] = useState('太郎');
  // const [stateの値, stateを更新する関数] = useState(初期値);
  const changeName = () => {
    setUsername('じろう');
  };
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    // スプレッド構文
    setTodos([
      ...todos,
      { content: text, id: shortid.generate(), isDone: false },
    ]);
  };

  const handleIsDoneChange = (id: string) => {
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

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Title name={username} />
      <List
        deleteTodo={deleteTodo}
        todos={todos}
        handleIsDoneChange={handleIsDoneChange}
      />
      <Form addTodo={addTodo} />
      <button onClick={changeName}>名前が変わるボタン</button>
    </>
  );
};

export default App;
