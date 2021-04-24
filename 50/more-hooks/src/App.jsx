import { useReducer } from 'react';
import ShowNumebr from './ShowNumber';
// 関数型コンポーネントでstateを扱う方法
// - useState
// - useReducer
//  - reducer, dispatcher
const initialState = {
  count: 10,
};
// 引数にstate, actionを取る。返り値が新しいstate
// state -> 現在のstate
// action -> dispatchの引数
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>カウンターアプリ</h1>
      <ShowNumebr number={100} />
      <h2>現在のカウント:{state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        + 1
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        - 1
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        + 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        - 10
      </button>
    </>
  );
};

export default App;
