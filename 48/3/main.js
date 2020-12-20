// 式: 変数に代入できる -> 1行で完結
// 文: 変数に代入できない -> 複数行で完結

// 繰り返し文

/* for文
 - 無限ループに注意!
   -> 無限ループした場合はブラウザを終了させる

 - 基本構文 -
for(初期化; 条件式; 更新処理) {
    条件式がtrueの間繰り返される処理
}

*/

// ループ文は配列と相性がいい
// const numbers = [10, 20, 14, 6, 60, 10];

// length 配列の要素の中身の数を取得する
// console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * 100);
// }

/* while文
 - 基本構文
while(条件式) {
   条件式がtrueの時の処理
}
 
*/

// let i = 0;

// while (i < 5) {
//   console.log(`while文の${i + 1}回目の処理です`);
//   // 処理の中でループから抜け出す処理を書く必要がある
//   i++;
// }

/* 関数:複数の処理をまとめたもの
    -> 引数: 関数の実行時に渡す値
    -> 返り値: 関数の結果を関数外に伝える
        -> returnされると関数の処理がそこで終了する

- 基本構文 -
 定義
function 関数名() {
    処理
}

 実行
 関数名()
*/

// 関数を宣言した(定義した)
// function log() {
//   console.log('hello');
//   console.log('world');
// }

// 関数を実行
// log();

// 三角形の面積
// 底辺と高さは実行する時に決めたい
function getTriangleArea(width, height) {
  const result = (width * height) / 2;
  // returnの後ろに書いた式が関数の返り値に設定される
  return result;
}
// const result1 = getTriangleArea(5, 13); // 三角形1
// const result2 = getTriangleArea(13, 13); // 三角形2

// const result1 = getTriangleArea(12, 14); // 三角形1
// const result2 = getTriangleArea(120, 140); // 三角形2
// const sum = result1 + result2;

// スコープ:名前空間(変数が使用できる空間)
//  内側から外側の変数にはアクセスできる
//  外側から内側の変数にはアクセスできない
// スコープってどうやって作成されてる？
//  {}がスコープになる

// グローバルスコープ
const outside = '外側のスコープ';

// function hello() {
//   // hello関数のスコープ
//   const inside = '内側のスコープ';
//   //   console.log(inside);
// }
// console.log(inside);

const x = 11;

if (12 > 1) {
  const x = 10;
  if (1 === 1) {
    if (2 === 2) {
      //   console.log(x);
    }
  }
}

{
  const hello = 10;
}

/* 関数の定義方法

// 古い書き方
 -1- 関数宣言
function 関数名(引数) {
    処理
}

 -2- 関数式
const 関数名 = function(引数) {
    処理
}

// 新しい書き方
 -3- アロー関数
const 関数名 = (引数) => {
    処理
}
 -> 返り値のみの処理の場合、returnと{}を省略できる
 -> 引数が1つの場合、()省略できる
*/

// 2を足す関数
const add2 = function (n) {
  return n + 2;
};

// return を省略した形
const add3 = (n) => n + 3;

const result = add3(10);

// 無名関数: anonymus function
// 名前がない関数

// 即時関数: IIFE
// (function () {
//   console.log('即時関数です');
// })();

// (() => {
//   console.log('アロー関数の即時関数です');
// })();

const add10 = (n) => {
  console.log('return前のconsole.logです');
  return n + 10;
  console.log('return後のconsole.logです');
};

const validate = (n) => {
  if (n === 0) {
    console.log('error');
  }

  console.log('nは0以外です');
};
validate(0);

// -- 覚えておこう --
// 関数には引数がある
//  -> 実行時に値を決めることができる

// 関数には返り値がある
//  -> 関数外でも関数の処理結果が扱える

// スコープ
//  -> {}の内側外側によってアクセスできる変数とできない変数がある

// -- できれば覚えておく --
// 関数の定義方法は３種類ある
//  アロー関数, 関数宣言, 関数式

// 無名関数
//  名前のない関数

// 即時関数
//  無名関数を定義して即起動することができる
