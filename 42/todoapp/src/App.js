import React from 'react';

import Title from './Title';
import List from './List';
import Form from './Form';

const App = () => {
  const name = 'こうが';
  return (
    <React.Fragment>
      <Title />
      <List />
      <Form />
    </React.Fragment>
  );
};
export default App;

// export: 作成した値を別ファイルで使えるようにする
// import: exportした値を使用する
