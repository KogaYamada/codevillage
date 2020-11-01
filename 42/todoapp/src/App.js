import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Title from './Title';
import List from './List';
import Form from './Form';

// 関数コンポーネントが実行されるとreturnの中のJSXが画面に描写(レンダリング)される
const App = () => {
  console.log('Appが描写されました');
  /* stateを使う書き方 */
  const [name, setName] = useState('じろう'); // react hook
  // const [stateの値, stateを更新する関数] = useState(stateの初期値)
  const changeName = () => {
    setName('太郎');
  };
  const [todos, setTodos] = useState([
    {
      content: '掃除をする',
    },
    {
      content: '洗濯をする',
    },
    {
      content: '料理をする',
    },
    {
      content: '運動をする',
    },
    {
      content: '運動をする',
    },
  ]);

  /* stateを使わない書き方
  let name = 'こうが';
  const changeName = () => {
    // nameが書き換わった段階で関数が再実行(再描写)すれば良い => stateを使う
    name = '太郎';
    console.log(name);
  };
*/
  return (
    <React.Fragment>
      <Title user={name} />
      <List todos={todos} />
      <Form />
      <button onClick={changeName}>名前変更ボタン</button>
    </React.Fragment>
  );
};
export default App;
// props: 親コンポーネントから子コンポーネントに値を渡すもの <=> 子コンポーネントから親コンポーネントには値を渡せない

// state: 状態と呼ばれ、Reactで見た目を扱う変数を管理するためのもの

// 分割代入

// export: 作成した値を別ファイルで使えるようにする
// import: exportした値を使用する
