// 変数とは
// 値を格納する箱

// 変数の定義方法
// const: 再代入ができない変数を定義
// let: 再代入ができる変数を定義
// var: 古いので基本的には使わない

// 変数の再代入について
// const number = 10;
// number = 20; // 再代入
// console.log(number);

// 変数名のルール
// - 数字で始まる変数名は使えない
// ex. const 100yen = 100;
// - &と-は使用できない
// ex. const user-name = "taro";
// ex. const I&you = "aaa"
// 予約語は使用できない
// ex. const let = "let"

// 算術演算子
// JavaScriptで計算するための演算子
// 足し算,引き算,掛け算,割り算,余り算
// console.log(123 + 123);
// console.log(100 - 50);
// console.log(10 * 45);
// console.log(100 / 25);
// console.log(10 % 3);

// const number1 = 123;
// const number2 = 100;
// const result = number1 + number2;
// console.log(result);

// 比較演算子(論理演算子)
// JavaScriptで何かを計算して結果が正しいかどうかを
// 判定する演算子
// true(正しい)/false(正しくない)

// a < b :aはbよりも小さければtrue
// a > b :aはbよりも大きければtrue
// a <= b :aがb以下だとtrue
// a >= b :aがb以上だとtrue
// a === b :aとbが厳密に等しければtrue
// a !== b :aとbが厳密に等しくなければtrue
// 以下はあまり使わないように
// a == b :aとbが等しければtrue
// a != b :aとbが等しくなければtrue

// console.log(10 == '10'); //  true
// console.log(10 === '10'); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

//エスケープシーケンス
// 通常の文字列とは異なる文字などを表現する時に使う

// 長い文字列を書く時
// console.log('aaaaaaaaa\
// aaaaaaaaaaaaaaaaaa\
// aaaaaaaaaaaaaaaaaaaaaa');

// 文字列連結
// 文字列同士を + を使って連結する
// const username = '太郎';
// console.log('こんにちは、' + username + 'さん');

// // テンプレートリテラル
// console.log(`こんにちは、${username}さん`);

// オブジェクト
// 値をまとめて管理するためのもの
// キー(key)とバリュー(value)の組み合わせで値を管理
// 基本構文
// { key: value, key: value }
// オブジェクトの値の参照方法
// - ドット記法
//      - object.key
// - ブラケット記法
//      - object["key"]
// 同一key:valueの省略記法
// keyとvalueが同じなら省略して書くことができる
const lastName = 'やまだ';

const user = { firstName: 'たろう', age: 20, lastName };
user.age = 21;
// console.log(user);

// 配列:array
// 値をまとめて管理するためのもの
// index番号を用いて値を管理
// 基本構文
// [要素, 要素, 要素]
//   0     1    2
// 値の参照方法
// array[index番号]

// const colors = ['red', 'blue', 'yellow'];
// // index番号       0      1        2
// console.log(colors[0]); // "red"
// // 配列に使えるメソッド(操作)とプロパティ(情報)
// // lengthプロパティ: 配列の要素の数を取得
// console.log(colors.length);
// // メソッド
// // - pushメソッド: 値を配列の一番最後に追加する
// colors.push('green');
// console.log(colors);
// // - spliceメソッド: 配列から値を削除する
// colors.splice(2, 1);
// console.log(colors);
// // - forEachメソッド: 配列の要素の数だけ繰り返し処理を行うことができる
// colors.forEach(function (color) {
//   console.log(`これはforEachメソッドの繰り返し処理です。colorは${color}です`);
// });

// 制御構文

// if文
// 条件分岐を行う
/*基本構文
if(条件式) { 条件式がtrueの時に実行される処理 }

- else:条件がfalseの時に実行される処理

- else if: 条件をさらに追加できる
*/
// const score = 100;

// if (score >= 90) {
//   console.log('よくできました');
// } else if (score >= 70) {
//   console.log('まあまあ');
// } else {
//   console.log('頑張ろう');
// }

// const age = 19;
// if (age >= 20) {
//   console.log('飲酒可能です');
// } else {
//   console.log('飲酒できません');
// }

// thuthyな値とfalsyな値
// 判定されるとtrueもしくはfalseになる値

// 評価されるとtrueになる値(truthyな値)
// -> falsyな値以外の値

// 評価されるとfalseになる値(falsyな値)
// -> 0, 空の文字列, false, null, undefined, NaN, documnet.all

// if ('aejkfnbwlh39fip32jtop2') {
//   console.log('trueです');
// } else {
//   console.log('falseです');
// }

// swtch文
// 条件分岐
// 条件部分の式が指定したケースである場合の処理を指定することができる
/*基本構文
swtch(式) {
    case 値A:
        // 式の結果、値Aと一致する場合に実行される処理
        break;
    case 値B:
        // 式の結果、値Bと一致する場合に実行される処理
        break;
    default:
        // どのcaseにも該当しない場合に実行される処理
        break;
    }
*/
// const hand = 'ちょき';

// switch (hand) {
//   case 'ぐー':
//     console.log('ぐー');
//     break;
//   case 'ちょき':
//     console.log('ちょき');
//     break;
//   case 'ぱー':
//     console.log('ぱー');
//     break;
//   default:
//     console.log('？？？？');
//     break;
// }

// for文
// 繰り返し処理(ループ処理)
// 条件が成り立つ間処理を繰り返す
/* 基本構文
for(初期化処理; 条件式; 更新処理) { 条件式がtrueの時に実行される処理 }

1. 初期化処理部分で変数を宣言
2. 条件式の評価結果がtrueなら次のステップへ、falseなら終了
3. {}の中の処理部分を実行
4. 更新処理を行う
5. ステップ2へ戻る

*/
for (let i = 0; i < 5; i = i + 1) {
  console.log(`for文のループ: i=${i}`);
}

// while文
// 繰り返し
/*基本構文
while(条件式) {
    条件式がtrueの時に実行される処理
}

1. 条件式の評価結果がtrueなら次のステップへ、falseなら終了
2. {}の中の処理が実行される
3. ステップ1へ戻る

*/

let i = 0;

while (i < 5) {
  console.log(`while文のループ: i=${i}`);
  i++;
}

// 次回は関数から
