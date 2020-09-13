// 外のファイルのなにかを使えるようにする
import React, { useState } from 'react';

import Form from './Form';
import Title from './Title';
import List from './List';

const App = () => {
  // props: 親コンポーネントから子コンポーネントに値を渡す
  const username = 'koga';
  const [todos, setTodos] = useState([
    { content: '洗濯する' },
    { content: '掃除する' },
    { content: '料理する' },
    { content: 'うんどうする' },
  ]);
  return (
    <>
      <Title name={username} />
      <Form />
      <List todos={todos} />
    </>
  );
};

export default App; //　外のファイルで使えるようにする

// state: 変数とほぼ同じ(見た目に関わる変数をstateで管理する)
// 見た目を返るときはstateを変更する
// const [name, setName] = useState('koga');
// const [stateの値, stateの値を変更する関数] = useState(初期値)
