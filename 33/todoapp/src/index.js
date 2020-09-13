import React from 'react'; // reactを使うよ
import ReactDOM from 'react-dom'; // reactをhtmlに表示したいよ

import App from './App'; // パス

// render関数は2つの引数をとる
// 1. 描写したいJSX(HTMLもどき)要素
// 2. 描写させたい場所

// コンポーネント思考(パーツ)

ReactDOM.render(<App />, document.getElementById('root'));
