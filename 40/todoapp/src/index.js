import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// render関数
// 第一引数: JSX要素(HTMLみたいなやつ)
// 第二引数: 第一引数を描写する場所

// JSX: HTMLみたいなやつ
// React.createElement({h1,{}, Hello, World!!!!!})

// JSXとHTMLの書き方の違い
// 1. jsの式を使用できる.
// 2. 予約語とかぶる名前はちょっと変わってる.
//     class => clasName
//     for => htmlFor
// 3. 任意のタグを生成できる.(コンポーネント)
// 4. 表示する要素は1つだけ
