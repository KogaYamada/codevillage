// 比較演算子
// < > <= >=
// 右辺と左辺を比較して正しければtrue、正しくなければfalse
/*

a < b  :aはbよりも小さければtrue
a > b  :aはbよりも大きければtrue
a <= b :aはb以上でtrue
a >= b :aはb以下でtrue
a == b :aとbが等しければtrue
a != b :aとbが等しくなければtrue
a === b :aとbが(厳密に)等しければtrue
a !== b :aとbが(厳密に)等しくなければtrue
*/

// テンプレート文字列
// - 文字列の中にJavaScriptの式を埋め込むことができる

// const username = 'こうが';

// console.log(`こんにちは、${username}さん`);
// console.log(`1 + 1 = ${1 + 1}`);

// オブジェクト
// 値をまとめて管理するもの
/* 基本構文
　{ キー:値, キー:値 }

値の取り出し方
 - ドット記法
 - ブラケット記法

値の更新
 オブジェクト.キー = 新しい値
 オブジェクト["キー"] = 新しい値

値の追加
 オブジェクト.存在しないキー = 新しい値
 オブジェクト["存在しないキー"] = 新しい値
*/
// const user = {
//   name: 'たろう',
//   age: 19,
//   'user-skill': 'javascript',
// };

// user.age = 20;
// user.birthYear = 2001;
// console.log(user);

// ドット記法
// console.log(user.name);
// console.log(user.age);

// ブラケット記法
// console.log(user['name']);
// console.log(user['age']);

// const users = {
//   hOIJfoalnf: { name: '太郎', age: 10 },
//   aogno23ew: { name: '二郎', age: 20 },
// };

// const userId = 'hOIJfoalnf';
// console.log(users[userId]);

// オブジェクトのプロパティの省略記法
// const name = 'たろう';
// const age = 20;

// const user = {
//   name,
//   age,
//   birthYear: 2001,
// };

// console.log(user);

// 配列: 値をまとめて管理するもの
// 値をindex番号を使って管理
/* 基本構文
 [値, 値, 値]

 値の取り出し方
 - 配列[index番号]
 値の更新方法
 - 配列[index番号] = 新しい値
 配列の値の追加
 - pushメソッド
   - 配列.push(追加したい値)
 配列の値の削除
 - spliceメソッド
   - 配列.splice(開始index番号, 削除する数)
*/

const colors = ['red', 'blue', 'yellow'];
// index番号       0      1        2

colors.push('green');
// red blue yellow green

colors.splice(1, 2);
// console.log(colors);

// 配列の中の要素(値)の数を取得
// length

const classA = [
  {
    name: '太郎',
    age: 13,
    score: 'B',
    friends: ['二郎'],
  },
  {
    name: '二郎',
    age: 14,
    score: 'C',
    friends: ['太郎', '花子'],
  },
  {
    name: '花子',
    age: 13,
    score: 'A',
    friends: ['二郎'],
  },
];

// console.log(classA[0].friends[0]);

// forEach
// classA.forEach((student, index) => {
//   console.log(`${index + 1}人目の生徒は${student.name}です`);
// });

// 制御構文
// JavaScriptで使える文
// if文, for文

// 文と式の違い
// 式 -> 最終的に値になる
// 文 -> 最終的に値にならない

// if文
// 条件分岐
/* 基本構文
 if(条件式) {
    条件式がtrueの時に実行される処理
 } else {
     条件式がfalseの時の処理
 }
*/

const age = 18;

if (age >= 20) {
  console.log('大人です');
} else {
  console.log('子供です');
}

/*
 else - if文: 複数の条件式がある場合
 if(条件式A) {
     条件式Aがtrueの時に実行される処理
 } else if(条件式B){
     条件式Bがtrueの時に実行される処理
 } else {
     どの条件式もfalseの時の処理
 }
*/

const score = 100;

if (score >= 90) {
  console.log('すごい！');
} else if (score >= 60) {
  console.log('まあまあ');
} else {
  console.log('頑張ろう');
}

if (123) {
  console.log(true);
} else {
  console.log(false);
}
