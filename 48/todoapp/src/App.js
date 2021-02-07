import { useState } from 'react';
import { nanoid } from 'nanoid'; // nanoidをインポート

import Title from './Title';
import Form from './Form';
import List from './List';

// props:親コンポーネントから子コンポーネントへの値を渡す
// props名={値} === {props名: 値}

// state: アプリ状態を表す変数 => ほぼ変数

const App = () => {
  console.log('画面が描写されました');
  // stateを使う書き方
  //   const [stateの値, stateを変更するための関数] = useState(stateの初期値);
  const [name, setName] = useState('こうが'); // ["こうが", 関数]
  const [todos, setTodos] = useState([
    {
      content: '掃除をする',
      id: nanoid(),
      isDone: false,
    },
    {
      content: '洗濯をする',
      id: nanoid(),
      isDone: false,
    },
    {
      content: '料理をする',
      id: nanoid(),
      isDone: false,
    },
  ]);

  // Todoを追加する関数
  const addTodo = (text) => {
    setTodos([...todos, { content: text, id: nanoid(), isDone: false }]);
  };
  // Todoを削除する関数
  // 次週解説から
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeName = () => {
    setName('たろう');
  };

  return (
    <>
      <Title username={name} />
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
      <button onClick={changeName}>名前変更ボタン</button>
    </>
  );
};

export default App;

//   stateを使わない書き方;
//   let name = '二郎';

//   const changeName = () => {
//     name = '太郎';
//     console.log(name);
//   };
