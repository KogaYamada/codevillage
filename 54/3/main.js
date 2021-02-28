// const array = [1, 2, 3];
// array.splice(0, 1);
// console.log(array); //=> [2, 3]
// array.push(5);
// console.log(array); //=> [2, 3, 5]
// array.splice(1, 2);
// console.log(array); //=> [2]
// array[0] = 100;
// console.log(array); //=> [100]

// 関数
// - 複数の処理を一つにまとめたもの
//   - 処理を使い回すことができる
// - 値を受け取って値を返すもの

/* 基本構文
- 定義方法
function 関数名(仮引数) { 
    処理
    return 値;
 }
- 実行方法
関数名(引数)

*/

// calcAge関数を定義
// ageを返す関数
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  return age;
}

// calcAge関数を実行
// console.log(calcAge(1990));
// console.log(calcAge(1980));
// console.log(calcAge(2000));
// console.log(calcAge(2012));

// 関数の返り値
// const result = calcAge(1990);
// console.log(result);

// テスト点数を採点する関数
// 値を返さない(undefiendを返す関数)
function scoring(score) {
  if (score >= 90) {
    return 'よくできました';
  } else if (score >= 70) {
    return 'まあまあ';
  } else {
    return '頑張ろう';
  }
}

const result1 = scoring(100);
const result2 = scoring(80);
const result3 = scoring(0);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// return
// - returnの後ろの値を関数の返り値とする
// - returnが行われたらその関数を終了する
// function add2(x) {
//   if (typeof x !== 'number') {
//     return '数字ではないです';
//     console.log('ここは実行されない');
//   }
//   return x + 2;
//   console.log('ここは実行されない');
// }

// console.log(add2('23'));
// console.log(add2(23));

// スコープ(名前空間:name space)
// - 変数名が有効な範囲
// - 一番上のスコープはグローバルスコープ
// - {}で新しいスコープが生成される
// - スコープの外側から内側の変数にはアクセスできない
// - スコープの内側から外側の変数にはアクセスできる
// - スコープがネスト(入れ子)している時は一番近いスコープの値を参照

const x = 1;
{
  // スコープ生成
  const x = 10;
  {
    const y = 20;
    {
      //   console.log(x);
    }
  }
}

// JSON
// データ形式
// - あくまでデータ形式なので計算処理はできない
// - keyは必ずダブルクォーテーションで囲む
// - 最後の要素にはコンマ(,)をつけない

// const user = {
//   name: 'koga',
//   age: 20,
// };

// jsのコードをJSONに変換(エンコード)
// JSON.stringify()メソッドを使用
// const json = JSON.stringify(user);
// console.log('user', user);
// console.log('userをjsonに変換', json);

// JSONをjsのコードに解析(デコード)
// JSON.parse()メソッドを使用
// const decodedUser = JSON.parse(json);

// console.log('解析したJSON', decodedUser);

// 関数型プログラミング

// 関数の定義方法
// 1. 関数宣言
/*
function 関数名(仮引数) {
    処理
}
*/
// 2. 関数式
/*
const 関数名 = function(仮引数) {
    処理
}
*/
// 3. アロー関数
/*
const 関数名 = (仮引数) => {
    処理
}
*/
// 関数宣言
// function add2(x) {
//   return x + 2;
// }
// 関数式
// const add3 = function (x) {
//   return x + 3;
// };
// アロー関数
// const add4 = (x) => {
//   return x + 4;
// };

// console.log(add2(2));
// console.log(add3(2));
// console.log(add4(2));

// 無名関数
// 名前のない関数
// function() {}
// () => {}

// 即時関数
// 宣言して即座に実行される関数
// (function (str) {
//   console.log(str);
// })('こんちは');

// - 関数型プログラミング
// 関数を駆使してプログラムを書くスタイル

// アロー関数
// 処理がreturnのみの時、{} とreturnを省略できる
// 仮引数が1つの時()省略できる
const add2 = (x) => x + 2;
const mul2 = (x) => x * 2;

const n = 3;

// console.log(add2(n)); // 5
// console.log(mul2(n)); // 6
// console.log(mul2(add2(n))); // 10

// 次回までに
// - 関数の復習
//  - 定義方法３種類それぞれ覚える
//  - 引数と返り値
//  - アロー関数の省略記法
// - スコープを理解する
// - 高階関数の予習

function cointoss() {
  const num = Math.random(); // numは0.0〜1.0のランダムな数値

  // ①ここを埋める
  if (num < 0.5) {
    console.log('表');
  } else {
    console.log('裏');
  }
}

// for (let i = 0; i < 10; i++) {
//   cointoss();
// }

// 100 -> 秀
// 60 -> 良
// 13 -> 不可
function scoring(score) {
  // ここを埋める
  if (score >= 90) {
    // 90 ~ で秀
    return '秀';
  } else if (score >= 60) {
    // 60 ~ 89で良
    return '良';
  } else {
    // 59以下で不可
    return '不可';
  }
}

// 動作確認
// console.log(scoring(100)); //=> 秀
// console.log(scoring(60)); //=> 良
// console.log(scoring(13)); //=> 不可

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65];

scores.forEach(function (score) {
  console.log(scoring(score));
});

// for (let i = 0; i < scores.length; i++) {
//   console.log(scoring(scores[i]));
// }

const items = [
  // ここを埋める
  { n: 100 },
  { a: { b: ['abc'] }, c: { 100: 'foobar' } },
];
// itemsは2つの要素の配列

// console.log(items[0].n); //=> 100
// console.log(items[1].a.b[0]); //=> abc
// console.log(items[1].c['100']); //=> foobar

const json = `
{
  "total": 2,
  "items": [
    {
      "name": "Item 123",
      "id": 123
    },
    {
      "name": "Item 456",
      "id": 456
    }
  ],
  "next": {
    "id": 789
  }
}
`;

const obj = JSON.parse(json);
console.log(obj.total); // => 2
console.log(obj.items[0].name); //=> Item 123
console.log(obj.items[0].id); //=> 123
console.log(obj.items[1].name); //=> Item 456
console.log(obj.items[1].id); //=> 456
console.log(obj.next.id); //=> 789
