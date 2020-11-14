import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import App from './ex/App';

// render関数 第一引数:JSX(HTML)要素, 第二引数に表示するHTML要素
// JSXとは htmlみたいなやつ
// JSの変数を参照できる
// class => className

ReactDOM.render(<App />, document.getElementById('root'));
