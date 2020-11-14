import React from 'react';
import Post from './Post';

const App = () => {
  const title1 = 'ポスト１';
  const props = {
    title: 'ポスト２',
    body: 'こんばんは',
  };
  return (
    <>
      <Post title={title1} body='こんにちは' />
      <Post {...props} />
    </>
  );
};

export default App;

// props
// <コンポーネント名 props名=値 />
