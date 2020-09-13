// 関数型プログラミング vs オブジェクト思考プログラミング

/* callback関数
関数を引数に取る関数
*/

function log(msg) {
  console.log('log関数だよ');
}

function cb(fn) {
  fn();
}

// 引数 + 2する関数
const add2 = (n) => n + 2;
// 引数 * 2する関数
const mul2 = (n) => n * 2;
const minus2 = (n) => n - 2;

// callback関数
// キーワード: 抽象化、ロジックの切り分け その他
const twice = (fn, n) => {
  return fn(fn(n));
};
const result = twice((n) => n * 2, 5);

// forEach
const array = [1, 2, 3, 4, 5, 6];
// array.forEach((element) => {
//   console.log(element);
// });
/*
const myForEach = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

myForEach(
  (element) => {
    console.log(element);
  },
  [1, 2, 3, 4, 5, 6]
);
*/

const array = [1, 2, 3, 4, 5, 6];

const newArray = array.map((el) => {
  return el * 2;
});

console.log(newArray);

const user = {
  name: 'koga',
};
