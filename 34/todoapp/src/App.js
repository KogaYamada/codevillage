import React, { useState } from 'react';
import Title from './Title';
import List from './List';
import Form from './Form';

const App = () => {
  const [username, setUsername] = useState('koga');
  const [todos, setTodos] = useState([
    { content: '掃除する' },
    { content: '洗濯する' },
    { content: '料理する' },
  ]);

  const changeName = () => {
    setUsername('Taro'); // 引数にとった値に完全に置き換わる
  };

  return (
    <React.Fragment>
      <Title name={username} />
      <Form />
      <List todos={todos} />
      <button onClick={changeName}>名前変わるボタン</button>
    </React.Fragment>
  );
};

export default App;
