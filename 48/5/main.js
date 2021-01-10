// 関数型プログラミング
// - 関数を駆使してプログラムを書いていく
const add2 = (n) => n + 2;

const twice = (f, n) => f(f(n));

// const result = twice(add2, 5);

// オブジェクト指向プログラミング
// - 「もの」->「オブジェクト」としてプログラムを書いていく

const Car = {
  made: 'toyota',
  size: 1800,
  run: () => {
    console.log('車が走ります');
  },
  stop: () => {
    console.log('車がとまります');
  },
  klaxon: () => {
    console.log('クラクションがなります');
  },
};

// Car.run();
// Car.stop();

// 手続き型プログラミング
// - プログラムを手順書のように書いていく

// const numbers = [1, 2, 3, 4];

// const Array = {
//   length: '配列の要素の数',
//   push: (n) => {
//     console.log('配列にnを追加します');
//   },
// };

// numbers.push(5);

// console.log(numbers.length);

const str = 'This is a pen.';

const upperStr = str.toUpperCase();

const lowerStr = upperStr.toLowerCase();

// console.log(str.toUpperCase().toLowerCase());

// 関数: ()をつけて実行されるものは関数
// メソッド: オブジェクトの中にある関数

// ラッパーオブジェクト
console.log(Number(12).toString());

// map
// filter
// reduce
