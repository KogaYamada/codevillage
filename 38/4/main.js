/* オブジェクト
　値をまとめて管理する
  { key: value }

  - オブジェクト.キー     :ドット記法
  - オブジェクト["キー"]  :ブラケット記法
*/

const obj = {
  name: '',
  skills: [],
  age: 12,
  fn: function () {
    console.log('hello');
  },
  objChild: {
    name: 'hh',
  },
};

// JSON
// 処理を書いていけない
// キーは""でくくる
// 文字列も ""
// 最後の要素に,を付けない

// JavaScriptのオブジェクトをJSONにする（エンコード）
const jsObj = { email: 'koga@koga.com', pass: 12345 };

const encoded = JSON.stringify(jsObj);

// JSONからJavaScriptのオブジェクトにする（デコード）

const json = `
{
  "email": "aaaa@aa.io",
  "pass": "12345678" 
}
`;
const decoded = JSON.parse(json);

// 関数型プログラミング vs オブジェクト指向プログラミング

// callback関数(高階関数)
// 関数を引数に取る関数

const logHello = () => {
  console.log('こんにちは');
};

const logHi = () => {
  console.log('はい');
};

// const cb = (fn) => {
//   fn();
// };

const add2 = (n) => n + 2;
const mul2 = (n) => n * 2;

// const add = (n) => add2(n) + add2(n);
// const mul = (n) => mul2(n) + mul2(n);

const cb = (fn, n) => {
  return fn(n) + fn(n);
};

// cb(関数, 数字)
cb((n) => n + n + 4, 5);

// [1, 2, 3, 4].forEach((element) => {
//   console.log(element * 2);
// });

const myForEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};
