import ReactDOM from 'react-dom';

import App from './App';

// JSXとは
// - HTMLのような記法が使える
// - HTMLとは違うところがある
//   - class -> className
// - 複数の要素を返すことができない
// - {}を使ってJavaScriptの式を適用することができる

// UIをコンポーネント(パーツ)という単位で分けることができる

// render関数:
//  - 第一引数にHTMLみたいなやつ(JSX)
//  - 第二引数にDOM要素(publicにあるindex.htmlの中を探す)

ReactDOM.render(<App />, document.getElementById('root'));
