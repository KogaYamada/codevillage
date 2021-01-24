import ReactDOM from 'react-dom';
import username from './name';

import Title from './Title';
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

const Form = () => {
  return (
    <form>
      <input />
      <button>送信</button>
    </form>
  );
};
const List = () => {
  return (
    <ul>
      <li>掃除をする</li>
      <li>洗濯をする</li>
    </ul>
  );
};

const App = () => {
  return (
    <>
      <Title />
      <Form />
      <List />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
