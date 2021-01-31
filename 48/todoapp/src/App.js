import { useState } from 'react';

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
      id: '1',
      isDone: false,
    },
    {
      content: '洗濯をする',
      id: '2',
      isDone: false,
    },
    {
      content: '料理をする',
      id: '3',
      isDone: false,
    },
  ]);
  const changeName = () => {
    setName('たろう');
  };

  return (
    <>
      <Title username={name} />
      <Form />
      <List todos={todos} />
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
