// // 配列
// const array = [1, 2, 3, 4, 5];
// // 要素を増やす方法
// // pushメソッド:破壊的
// array.push(6);

// // 要素を削除する方法
// // splice:破壊的
// array.splice(2, 1);

// 破壊的/非破壊的
// 破壊的: 元となる配列に変更(破壊)を加える
// 非破壊的: 元となる配列に変更(破壊)を加えない

/* 関数
処理をまとめたもの

書き方
1. 関数宣言
function 関数名(引数) {
  処理
}

2. 関数式
const 関数名 = function(引数) {
  処理
}

3. アロー関数(新しいやつ)
const 関数名 = (引数) => {
  処理
}
*/

/* スコープ
　関数又は{}のなかで定義した変数はその関数の中でしか使えない
*/

// undefined 未定義

function getTriangleArea(width, height) {
  // 変数areaを定義
  // width * height / 2を実行
  // 実行結果をareaに代入
  const area = (width * height) / 2;
  return area;
}

function sayHello(name) {
  console.log(`Hello! ${name}!`);
}

const area1 = getTriangleArea(12, 23);

const obj = {
  name: 'koga',
  age: 24,
  fn: function (x) {
    console.log(x);
  },
};

function log(x) {
  console.log(x);
}

const array = [1, 2, 3, 4, 5];

// array.forEach(function (element) {
//   console.log(element);
// });

const objA = {
  name: 'koga',
  age: 24,
};

//JSONのルール
/*
 - すべてのプロパティを二重引用符(")で囲む必要がある
 - 文字列に使えるのも二重引用符(")のみで、単一引用符(')やテンプレート文字列(`)は使えない
 - 配列やオブジェクトの要素の最後に,を書いてはいけない
 - JSONはプログラミング言語ではないため、処理は書けない（HTMLなどと一緒の部類）
 */

// JSONに変換
const json = JSON.stringify(objA);

// objectに変換
const objB = JSON.parse(json);

// callback関数
// 関数を引数に取る関数

const add2 = (n) => n + 2;
const mul2 = (n) => n * 2;
const minus2 = (n) => n - 2;

const cb = (fn, n) => {
  return fn(n) + fn(n);
};

const score = [122, 342, 425, 56, 56];

const scoreLog = (element) => {
  console.log(`点数は${element}点です`);
};

const myForEach = (array, fn) => {
  // array = [122, 342, 425, 56];
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

// callback
/* 関数を引数に取る関数
コールバック地獄

関数の引数とは。。。
 - 関数の呼び出し元で指定する値
    - 文字列
    - 数字
    - 配列
    - オブジェクト
    - その他。。。
    - 関数 === コールバック関数

コールバック関数における引数
 - 関数

コールバックの入れ子が3~ コードがみづらくなってる
リファクタリング(コードの修正)
*/

[
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
].forEach((el) => {});

// react
// vue
// angular
