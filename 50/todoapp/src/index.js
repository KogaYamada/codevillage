import ReactDOM from 'react-dom';

// render関数:
//  - 第一引数にHTMLみたいなやつ(JSX)
//  - 第二引数にDOM要素

// JSXとは
// - HTMLのような記法が使える
// - HTMLとは違うところがある
//   - class -> className
// - 複数の要素を返すことができない
// - {}を使ってJavaScriptの式を適用することができる

// UIをコンポーネント(パーツ)という単位で分けることができる

// 次回はコンポーネントのファイル分けから

// Titleコンポーネント
const Title = () => {
  return (
    <div>
      <h1>TODO App</h1>
      <h2>ようこそ、太郎さん</h2>
    </div>
  );
};
// Formコンポーネント
const Form = () => {
  return (
    <form>
      <input placeholder='やることを入力' />
      <button>送信</button>
    </form>
  );
};
// Listコンポーネント
const List = () => {
  return (
    <ul>
      <li>掃除をする</li>
      <li>洗濯をする</li>
    </ul>
  );
};
// Appコンポーネント
const App = () => {
  return (
    <div>
      <Title />
      <Form />
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
