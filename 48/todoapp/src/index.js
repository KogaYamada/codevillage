import ReactDOM from 'react-dom';

import App from './App';
// import 外部ファイルから何かを読み込む
// export 外部ファイルへ何かを送る

// renderメソッド
// - 第一引数にJSX要素
// - 第二引数にHTML要素の取得

// JSXとHTMLの違い
// - class -> className
// - for -> htmlFor
// - jsの式を{}の中に書くことができる
//    - {}の中には、文字列、数字、真偽値、undefined、null、配列
//    - {}の中にはオブジェクトは書けない
// - JSXは一つの要素しか返せない

// 次回コンポーネント切り分け

ReactDOM.render(<App />, document.getElementById('root'));
