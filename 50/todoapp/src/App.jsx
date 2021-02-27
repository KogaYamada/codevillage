import { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
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
    { content: '掃除をする', id: nanoid(), isDone: false },
    { content: '洗濯をする', id: nanoid(), isDone: true },
    { content: '料理をする', id: nanoid(), isDone: false },
  ]);

  // Todoを増やす関数
  const addTodo = (content) => {
    setTodos([...todos, { content, id: nanoid(), isDone: false }]);
    // setTodos(todos.concat({ content, id: `${todos.length + 1}` }));
  };

  // todoを削除する関数
  const deleteTodo = (id) => {
    // filterメソッド
    // 引数に渡したコールバック関数がtrueを返した要素の配列を生成
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // isDoneを反転させる関数
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // クリックされた要素の処理
          return { ...todo, isDone: !todo.isDone };
        } else {
          // クリックされていない要素の処理
          return todo;
        }
      })
    );
  };

  return (
    <Fragment>
      <Title username={name} />
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
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
