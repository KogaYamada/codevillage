import React from 'react';
import ReactDOM from 'react-dom';

// render関数 第一引数:JSX(HTML)要素, 第二引数に表示するHTML要素
// JSXとは htmlみたいなやつ
// JSの変数を参照できる
// class => className
const name = '太郎';

const Title = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <h2>ようこそ{name}さん</h2>
    </div>
  );
};
const List = () => {
  return (
    <React.Fragment>
      <p>やることリスト</p>
      <ul>
        <li>掃除</li>
        <li>料理</li>
      </ul>
    </React.Fragment>
  );
};
const Form = () => {
  return (
    <form>
      <input />
      <button>送信</button>
    </form>
  );
};
ReactDOM.render(
  <>
    <Title />
    <List />
    <Form />
  </>,
  document.getElementById('root')
);
