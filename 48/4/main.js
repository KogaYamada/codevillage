// オブジェクト
// { key: value, key: value }

// オブジェクトと配列の組み合わせ

// const user = {
//   name: 'koga',
//   age: 24,
//   firends: [
//     {
//       name: 'taro',
//       age: 23,
//     },
//     {
//       name: 'jiro',
//       age: 25,
//     },
//     {
//       name: 'hanako',
//       age: 25,
//     },
//   ],
// };

// for (let i = 0; i < user.firends.length; i++) {
//   console.log(user.firends[i]);
// }

// メソッド と 関数

// 関数名();
// オブジェクト.メソッド();

const user = {
  name: 'taro',
  sayHello() {
    console.log('短くした');
  },
};

// 配列に用意されているメソッド
// forEach

// const numbers = [1, 2, 3, 4, 5];

// forEach, map, filter
// numbers.forEach((number) => {
//   console.log(number);
// });

// JSON:データ形式

// ルール

// JavaScriptのオブジェクトか配列の書き方
// keyは全てダブルクォーテーション
// valueが文字列の場合ダブルクォーテーション
// 最後の要素はコンマ(,)をつけない
// あくまでデータ形式なので処理はかけない

const obj = {
  propA: 'hello',
  propB: 123,
};

// JavaScriptからJSONに変換(エンコード)

const json = JSON.stringify(obj);

const decodedObj = JSON.parse(json);

// 関数型プログラミング

const add2 = (x) => x + 2; // 引数xに2を足す関数
const mul2 = (x) => x * 2; // 引数xに2を掛ける関数

// 高階関数(コールバック関数)
// 関数を引数に取る関数

const twice = (fn, n) => {
  return fn(fn(n));
};

// 1.add2をfnとして引数として受け取る
// 1.10をnとして引数として受け取る

// 2. 引数に受け取ったadd2の引数を10として実行
//    -> add2(10) 結果 12
// 3. 結果の12をadd2の引数にして実行
//    -> add2(12) 結果 14

// console.log(twice(add2, 10));

const numbers = [1, 2, 3, 4, 5];

const log = (x) => {
  console.log(x);
};
// forEachメソッドに返り値がない
// numbers.forEach((number) => {
//   console.log(number * 2);
// });

// mapメソッドは返り値がある
//  -> 元の配列から何かしらの処理をした結果の配列を生成して返す
const result = numbers.map((number) => {
  return number * 2;
});

const fn = (callback) => {
  callback();
};

const logArg = (n) => {
  console.log(`引数nは${n}です`);
};

const exec10 = (callback) => {
  callback(10);
};

// クロージャ
// 変数を守る

const closure = (initialAge) => {
  let age = initialAge;
  const birthday = () => {
    age++;
  };

  const getAge = () => age;

  return {
    birthday: birthday,
    getAge: getAge,
  };
};

const taro = closure(10);

taro.birthday();

// let age = 24;

// const birthday = () => {
//   age++;
// };

// // ~~~ 1000行 ~~~

// age = 102;

// // ~~~ 1000行 ~~~

// birthday();
// birthday();
// birthday();
// console.log(age);

// カリー化
// 関数の再利用性を高めるテクニックの1つ

// const add = (x, y) => {
//   return x + y;
// };

// console.log(add(1, 3));
// console.log(add(1, 10));
// console.log(add(1, 14));
// console.log(add(1, 140));

const add = (x) => {
  return (y) => {
    return x + y;
  };
};

const add1 = add(1);

console.log(add1(3));
console.log(add1(10));
console.log(add1(14));
console.log(add1(140));
