// 関数
// - 引数,返り値

// function add2(n) {
//   return n + 2;
// }

// const result = add2(5);

/* 関数の定義方法

1. 関数宣言
function 関数名(引数) {処理}

2. 関数式
const 関数名 = function(引数) {処理}

3. アロー関数:新しい関数の書き方
const 関数名 = (引数) => {処理}
    省略記法
    - 引数が一つの時,定義時に()を省略できる
    const add2 = n => {return n + 2}
    - 処理がreturnのみの時,returnと{}を省略できる
    const add2 = n => n + 2
*/

// 無名関数:名前のない関数
// 関数の本体
// function(){}
// () => {}

// 即時関数:IIFE
// 関数は
// 定義,実行の２ステップがある

// (function (n) {
//   console.log(n);
// })('引数です');

// ((n) => {
//   console.log(n);
// })('引数です:アロー');

// 関数の作用、副作用
// 作用とは、引数を受け取って値を返すこと
// それ以外で行われる処理のことを副作用
// 関数の外に影響を与える処理
//  - ファイルの読み書き
//  - 関数外の変数を変数を変更
//  - consoleへの出力

// let number = 0;

// const add2 = (n) => {
//   return n + 2;
// };

// const add = (n) => {
//   number += number + n;
//   return number + n;
// };

// 参照透過性
// 1. 同じ条件を与えれば必ず同じ結果が得られる
//    - 引数が毎回同じなら毎回同じ結果になる
// 2. 他のいかなる機能の結果にも影響を与えない

// 関数型プログラミング
// プログラミングスタイルの一つ

// 関数型プログラミング
// オブジェクト指向プログラミング
// 手続き型プログラミング

const add2 = (x) => x + 2;
const mul2 = (x) => x * 2;

const n = 3;

// console.log(add2(n)); // 5
// console.log(mul2(n)); // 6

// console.log(mul2(add2(n))); // 10

// 高階関数:コールバック関数

// const twice = (fn, x) => {
//   return fn(fn(x));
// };

// const result = twice(add2, 10);

const list = [1, 2, 3, 4, 5];
const square = (x) => x * x;

// console.log(list.map(square));
// console.log(list.map((x) => x * x));
// map: 引数にとった関数の返り値の配列を生成する関数

// クロージャ
// スコープを利用して変数の予期せぬ変更から守る
// let age = 12;
// const birthDay = () => {
//   age += 1;
// };
// birthDay();
// // ~~~~~~~~~~~~
// // 100行
// // ~~~~~~~~~~~
// birthDay();
// birthDay();
// birthDay();
// // ~~~~~~~~~~~~
// // 100行
// // ~~~~~~~~~~~
// birthDay();
// age = 10;
// console.log(`現在${age}歳です`);
const closure = (initAge) => {
  let age = initAge;
  return {
    getAge: () => age,
    birthDay: () => {
      age += 1;
    },
  };
};

const taro = closure(12);
taro.birthDay();
taro.birthDay();
age = 10;
// console.log(`現在${taro.getAge()}歳です`);

// -> 関数を返り値にすることができる
// カリー化
// 共通する処理を抽象化して再利用生の高い関数を作成する

// カリー化しない
const _plus = (a, b) => a + b;

// console.log(_plus(1, 10));
// console.log(_plus(1, 23));
// console.log(_plus(2, 12));
// console.log(_plus(2, 13));

// console.log('-----------');
// カリー化した関数
const plus = (a) => {
  return (b) => a + b;
};

const plus1 = plus(1);
const plus2 = plus(2);

// console.log(plus1(10));
// console.log(plus1(23));
// console.log(plus2(12));
// console.log(plus2(13));

// 優先順位

// 1. コールバック関数(高階関数)
// 2. 関数の定義方法3つ,無名関数
// 3. 作用、副作用
// 4. クロージャ、カリー化
// 5. 即時関数

// 車
// --情報--
// メーカー
// 車種
// サイズ
// 色
// --機能--
// 走る
// 止まる
// 加速、減速
// クラクション

const car = {
  maker: 'TOYOTA',
  width: 1800,
  color: 'red',
  speed: 0,
  run: () => {
    car.speed += 10;
    console.log('車が走ります');
  },
  stop: () => {
    car.speed = 0;
    console.log('車が止まります');
  },
  acceleration: (n) => {
    car.speed += n;
  },
  klaxon: () => {
    console.log('ぶー');
  },
};

// console.log(car.speed);
// car.run();
// console.log(car.speed);
// car.stop();
// console.log(car.speed);

console.log('こんちは'.length);

const users = [
  {
    name: 'taro',
    age: 13,
    id: '1',
  },
  {
    name: 'jiro',
    age: 13,
    id: '2',
  },
  {
    name: 'hanako',
    age: 13,
    id: '3',
  },
];

const loginUserId = '2';
