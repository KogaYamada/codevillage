import React from 'react';

// コンポーネントをインポート(作成したコンポーネントは相対パス)
import Title from './Title';
import Form from './Form';
import List from './List';

const App = () => {
  // 次回propsから
  const name = 'koga';
  return (
    <React.Fragment>
      <Title />
      <Form />
      <List />
    </React.Fragment>
  );
};

export default App;
