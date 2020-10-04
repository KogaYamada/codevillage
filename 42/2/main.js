/* for文(繰り返し)
-- 基本構文 --
for(初期化; 条件式; 更新処理) {
  繰り返す処理
}
※　無限ループには注意！
*/

// for (let i = 0; i < 5; i++) {
//   console.log(`${i + 1}回目の処理です`);
// }

/* while文(繰り返し)
 -- 基本構文 --
 while(条件式) {
   繰り返す処理
   (更新処理)
 }
 ※　処理の中でループから抜け出す式を書く必要がある
*/
// let i = 0;
// while (i < 5) {
//   console.log(`while文の${i + 1}回目の処理です`);
//   i++;
// }

/* lengthプロパティ
配列や文字列の要素数(文字数)知らせてくれるプロパティ

文字列.length : 文字数
配列.length : 配列の要素数
*/

/* 関数
 - 一連の処理のまとまり
 - インプット(引数)/アウトプット(返り値)がある
 - 定義と実行がある

 -- 基本構文 --
 1. 関数宣言
 function 関数名(引数) {
   処理
 }
 2. 関数式
 const 関数名 = function(引数) {
  処理
 }
*/

// 関数を定義
const sayHello = function () {
  console.log('こんにちは');
};

// sayHello(); // 関数を実行する

// 底辺 * 高さ / 2 = 三角形の面積
const getTriangleArea = function (width, height) {
  const result = (width * height) / 2;
  return result;
  // return以降の処理は実行されない
};

// getTriangleArea(123, 30); // 1
// getTriangleArea(12, 3); // 2
// 1 と 2と足したい！

const result1 = getTriangleArea(123, 30);
const result2 = getTriangleArea(12, 3);
// console.log(result1 + result2);

/* JSON: javascript object notation
 - データ形式
 - 通信するときなどに使う
 - 書き方はJavaScriptのオブジェクトをほぼ同じ
 - 拡張子は .json

 書き方
 - それぞれのキーにダブルクォーテーションが必要
 - あくまでデータ形式なので処理は書けない
 - 最後の要素にはコンマ(,)はつけてはいけない

  JSONをJavaScriptに変換(デコード)
  JSON.parse(jsonデータ);

  jacascriptをJSONに変換(エンコード)
  JSON.stringify(JavaScriptデータ);
*/

const user = {
  name: 'koga',
  age: 24,
  skills: ['js', 'node.js', 'react'],
};

const json = JSON.stringify(user);

const parsedUser = JSON.parse(json);

// 関数型プログラミング

/* 新しい関数の書き方
 - アロー関数
 本体:無名関数
 () => {}
 -- 書き方 --
 const 関数名 = (引数) => {
  処理
 }

 -- 省略記法 --
 - 処理が返り値のみの場合 {}とreturnが省略できる
 const fn = (n) => n + 2;
 - 引数が一つだけの場合()は省略できる
 const fn2 = n => n + 2

*/

const add2 = (n) => n + 2;
const mul2 = (n) => n * 2;
const n = 12;

const result = mul2(add2(n));

// 高階関数(コールバック関数:callback function)
// 関数を引数にとる関数

const twice = (fn, n) => fn(fn(n));

const myForEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};
// const array = [1, 2, 3, 4, 5];

// myForEach(array, (element) => {
//   console.log(element * 2);
// });

// map: 配列を元に別の配列を作成する

const array = [1, 2, 3, 4, 5];
const newArray = array.map((element) => {
  return element * 2;
});
// filter: 配列を元に条件に一致する要素のみの配列を作成する
const newArray2 = array.filter((element) => {
  return element < 4; // trueになった要素のみの配列を作成
});

const newArray3 = array
  .filter((element) => {
    return element < 4;
  })
  .map((element) => {
    return element * 2;
  });

console.log(newArray3);

const users = [{ name: 'koga' }, { name: 'taro' }, { name: 'ziro' }];
