import ReactDOM from 'react-dom';
import App from './App';
// renderメソッド
// 第一引数: JSXの要素
// HTMLのid=rootの要素の指定

// JSXのルール
// class -> className
// 要素は原則一つのみ
// {} の中でjavascriptの式を書くことができる
// コンポーネントを作成してUIを部品として作成することができる

ReactDOM.render(<App />, document.getElementById('root'));
