import { Fragment, useState } from 'react';
import Title from './Title';
import Form from './Form';
import List from './List';

// 要復習
// - props
// - state
// - map

// Appコンポーネント
const App = () => {
  const [name, setName] = useState('たろう');
  // const [stateの値, stateを更新する関数] = useState(初期値);
  // stateを更新する関数の引数に入れた値にstateが変わる
  console.log('Appコンポーネントが描写されたタイミング', name);
  //   let name = 'たろう'; // stateではない
  const [todos, setTodos] = useState([
    { content: '掃除をする', id: '1' },
    { content: '洗濯をする', id: '2' },
    { content: '料理をする', id: '3' },
  ]);

  return (
    <Fragment>
      <Title username={name} />
      <Form />
      <List todos={todos} />
      <button
        onClick={() => {
          setName('じろう');
        }}
      >
        名前変更ボタン
      </button>
    </Fragment>
  );
};

export default App;
