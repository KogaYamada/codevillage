import { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
import Title from './Title';
import Form from './Form';
import List from './List';

// 見た目に関わる変数を扱う時はstateを使用
// -> 変数は全てstateでも最悪OK

// TODOの削除
// 完了したことがわかるようにする

const App = () => {
  //stateのnameを定義
  const [name, setName] = useState('こうが');
  // const [stateの値, stateを更新する関数] = useState(stateの初期値)
  // let name = 'こうが';
  const [todos, setTodos] = useState([
    {
      content: '掃除をする',
      id: nanoid(),
    },
    {
      content: '洗濯をする',
      id: nanoid(),
    },
    {
      content: '運動をする',
      id: nanoid(),
    },
  ]);
  console.log(todos);
  const addTodo = (text) => {
    setTodos([...todos, { content: text, id: nanoid() }]);
  };

  return (
    <Fragment>
      <Title username={name} />
      <Form addTodo={addTodo} />
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
