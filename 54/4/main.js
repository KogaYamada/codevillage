// 入力に対して2を足す関数
// const add2 = (x) => x + 2;
const mul2 = (x) => x * 2;

// 高階関数:コールバック関数
// 引数として関数を受け取る関数
// f -> 関数 add2
// x -> 数字 10
const twice = (f, x) => {
  // add2(add2(10))
  // -> add2(12) -> 14
  return f(f(x));
};

// const result1 = twice(add2, 10);
const result2 = twice(mul2, 10);

const result3 = twice(function (x) {
  return x * x;
}, 10);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// 配列のmap
// 配列から新しい配列を生成するメソッド
const list = [1, 2, 3];
const square = (x) => x * x; // 引数xを二乗する

// console.log(list.map(square)); //=> [1, 4, 9]

// クロージャ
// -> スコープを利用して変数の意図しない変更を防ぐ

const closure = (initalAge) => {
  let age = initalAge;
  return {
    birthDay: () => age++,
    getAge: () => age,
  };
};

const userAge = closure(13);

userAge.birthDay();
userAge.birthDay();
userAge.birthDay();

// console.log(userAge.getAge());

// カリー化
// -> 処理複雑な部分で共通する処理を抜き出してシンプルにする

// const sum = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum(1, 3));
// console.log(sum(1, 4));
// console.log(sum(2, 3));
// console.log(sum(2, 5));
// console.log(sum(2, 6));

const curry = (a) => (b) => a + b;

const add1 = curry(1);
const add2 = curry(2);

// console.log(add1(2));
// console.log(add1(3));
// console.log(add1(4));
// console.log(add2(3));
// console.log(add2(5));
// console.log(add2(6));

// オブジェクト指向プログラミング
// const car = {
//   maker: 'TOYOTA',
//   size: 4000,
//   run: () => {
//     console.log('車が走ります');
//   },
//   stop: () => {
//     console.log('車がとまります');
//   },
// };

// const iphone = {
//   color: 'black',
//   call: (number) => {
//     console.log(`${number}に発信`);
//   },
//   camera: () => {
//     console.log('写真を撮る');
//   },
// };

const str = 'This is a pen.'; // もの＝文字列を作る

// "This is a pen."という「もの」に、toUpperCaseという「操作」をする。
// 結果もまた「もの」
const upperStr = str.toUpperCase();

// console.log(upperStr); //=> THIS IS A PEN.
// console.log(upperStr.length); // => upperStrの文字数

const lowerStr = upperStr.toLowerCase();

// console.log(lowerStr);

// 関数とメソッド
// 関数 -> 関数名()で実行できるもの
// メソッド -> オブジェクトの中の関数をメソッド
// obj.method()

// メソッドチェーン
// console.log(str.toUpperCase().toLowerCase());

// const searchWord = 'fo';

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.includes(searchWord));

// 配列(Array)の操作
// map
// 配列をもとに新しい配列を生成する
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mapResult = array.map((x) => x * x);
console.log(mapResult);

// filter
// コールバック関数がtrueを返した要素のみの配列を生成
const filterResult = array.filter((x) => x % 2 === 0);
console.log(filterResult);
