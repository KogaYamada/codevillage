import { Fragment, useState } from 'react';
import Title from './Title';
import Form from './Form';
import List from './List';

// 見た目に関わる変数を扱う時はstateを使用
// -> 変数は全てstateでも最悪OK

const App = () => {
  //stateのnameを定義
  const [name, setName] = useState('こうが');
  // const [stateの値, stateを更新する関数] = useState(stateの初期値)
  // let name = 'こうが';
  const [todos, setTodos] = useState([
    {
      content: '掃除をする',
      id: '1',
    },
    {
      content: '洗濯をする',
      id: '2',
    },
    {
      content: '運動をする',
      id: '3',
    },
  ]);
  return (
    <Fragment>
      <Title username={name} />
      <Form />
      <List todos={todos} />
      <button
        onClick={() => {
          // setName関数の引数に入れた値が新しいstateの値になる
          setName('たろう');
          // name = '太郎';
        }}
      >
        名前変更ボタン
      </button>
    </Fragment>
  );
};

export default App;

// 16:06まで休憩
