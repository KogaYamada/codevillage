import React, { FC, useState } from 'react';

import Form from './Form';
import List from './List';

const App: FC = () => {
  const [todos, setTodos] = useState([
    { content: '掃除をする' },
    { content: '洗濯をする' },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { content: text }]);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <List todos={todos} />
    </>
  );
};

export default App;

// 型をつける方法
// 型注釈
// 型推論

// let str: 'グー' | 'チョキ' | 'パー' = 'チョキ'; // リテラル型
