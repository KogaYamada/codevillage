// 関数型プログラミング

// 関数のおさらい
// 引数を受け取って何らかの処理をして返り値を返す

// 引数 - 関数の呼び出し時に選択できる値
// 返り値 - 関数を呼び出し元に返す値
// return - 返り値を設定する, 関数を終了する

function add2(number) {
  return number + 2;
}

function twice(fn, x) {
  return fn(fn(x));
}

const result = twice(function (n) {
  return n + 2;
}, 3);

// add2関数の引数を10にして実行する
// const result = add2(10); // 12

// const result = add2('asf');

// function 関数名() {}
// const 関数式 = function () {};
// const アロー関数 = () => {};

// 関数には作用と副作用
// 関数の作用とは、引数を受け取って返り値を返すこと
// それ以外の処理のことを副作用という,ex) ファイルの読み書き,関数外の変数の変更
// let n = 0;
// const add2 = (n) => n + 2;
// 参照透過性
// 1. 同じ条件(引数)を与えれば同じ結果が絶対に得られる
// 2. 他のいかなる機能の結果にも影響を与えない

// const add2 = (x) => x + 2;
// const mul2 = (x) => x * 2;

// const n = 3;

// console.log(add2(n)); // 5
// console.log(mul2(n)); // 6
// console.log(mul2(add2(n))); // 10

// 高階関数:コールバック関数
// 関数を引数に取る関数

// const twice = (f, x) => f(f(x));

// const result = twice(add2, 10);

// console.log(result);

// forEach
// const array = [1, 2, 3, 4];

// const log = (x) => {
//   console.log(x);
// };

// array.forEach(log);

// mapメソッド
// const list = [1, 2, 3];
// const square = (x) => x * x; // 引数xを二乗する

// console.log(list.map(square)); //=> [1, 4, 9]

// const fn = (callback) => {
//   callback();
// };

// const hello = () => {
//   console.log('hello');
// };

// const hello2 = () => {
//   console.log('hellohello');
// };
// fn(hello);

// 関数式
// const 関数名 = function (引数) {
//   処理;
// };

// アロー関数: () => {}

// const 関数名 = (引数) => 処理;

// const 関数名 = (引数) => {
//     return 処理
// };

// クロージャ
// - 関数のスコープで変数を変更から守る
// const createAge = function (inialAge) {
//   let age = inialAge;
//   const getAge = function () {
//     return age;
//   };
//   const birthday = function () {
//     age++;
//   };
//   return {
//     getAge,
//     birthday,
//   };
// };
// const taroData = createAge(13);
// taroData.birthday();
// taroData.birthday();
// taroData.birthday();

// カリー化
// - 共通の処理をまとめる関数
// 関数をreturnする関数

// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// const add1 = sum(1);

// console.log(add1(2));
// console.log(add1(3));
// console.log(add1(4));
// console.log(add1(12));
// console.log(add1(13));
// console.log(add1(14));

// 今回勉強しことの大事ランキング(独断)
// 1. 高階関数(コールバック関数、処理を追うことができればOK!)
// 1. 関数の基礎(引数、返り値、定義方法)
// 2. 作用、副作用
// 3. クロージャ、カリー化(やったことを覚えるくらいでもOK)

// オブジェクト指向

const car = {
  meker: 'TOYOTA',
  size: '4m',
  run: function () {
    console.log('車が走ります');
  },
  stop: function () {
    console.log('車がとまります');
  },
};

car.run();

car.meker;

// JSON

// jsのコードをJSONに変換する場合(エンコード)
const users = [
  { name: 'taro', age: 13 },
  { name: 'jiro', age: 14 },
  { name: 'hanako', age: 15 },
];
console.log('元データ', users);
// JSON.stringifyメソッドを使う
const jsonUsers = JSON.stringify(users);
console.log('JSONに変換したデータ', jsonUsers);

// JSONからJavaScriptに変換する方法(デコード)
// JSON.parseメソッドを使う
const decodedUsers = JSON.parse(jsonUsers);
console.log('JSONからJSに変換したデータ', decodedUsers);
