import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(JSX要素, document.getElementById("root"))

// JSXとは
// JavascriptにHTMLのような記述ができる技術
// 開発する時にUIがわかりやすい
// JSXのルール HTMLとの違い
//  - classはclassNameで記述する
//     - jsのclassと名前がかぶるから
//  - JSXの中にjsの式を書くときは{}の中で書く
//  - コンポーネントを使うときは大文字で始める
//  - 2つ以上の要素は返せない

// srcの中を消す
// 新しくsrcの中にindex.jsを作成
// 上のコードを書く

// ざっくりReactって
// UIをコンポーネント(部品)単位で作成できるライブラリ
// 仮想DOM
