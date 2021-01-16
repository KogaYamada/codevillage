// let とconstの違い

// let -> 再代入できる
// const -> 再代入できない

// let

// let number = 10;
// console.log(number);
// number = 100;
// console.log(number);

// const

// const number = 10;
// console.log(number);

// number = 100;

// console.log(number);

// 算術演算子

// const a = 10;
// const b = 2;

// console.log(a + b);

// console.log(a - b);

// console.log(a * b);

// console.log(a / b);
// // 余り算
// console.log(10 % 3);

// 比較演算子
// 比較して正しいかどうかを判断
// 正しければtrue
// 正しくなければfalse

const a = 10;
const b = 20;

// console.log(a > b); //aがbより大きければtrue

// a > b aがbより大きければtrue
// a < b aがbより小さければtrue
// a >= b aがb以上ならtrue
// a <= b aがb以下ならtrue
// a === b aとbが(厳密に)等しければtrue
// a !== b aとbが(厳密に)等しくなければtrue
// a == b aとbが等しければtrue
// a != b aとbが等しくなければtrue

// console.log(1 === 1); // true
// console.log(1 === '1'); // false
// console.log(1 == 1); // true
// console.log(1 == '1'); // true

// truthyな値 falsyな値
// truthy: 評価されるとtrueになる値
// falsyな値以外の全ての値

// falsy: 評価されるとfalseになる値
// 0 "" false null undefined NaN

// 文字列

// // 文字列連結
// console.log('hello' + ' ' + 'world');

// console.log('123' + 123);

// // テンプレート文字列
// const name = 'こうが';
// console.log(`1 + 1は${1 + 1}です`);

// オブジェクト
// 値をまとめて管理するもの
/* 基本構文
{ キー: 値, キー: 値 }
*/
const userData = {
  name: '太郎',
  age: 20,
};

// 値の取り出し方、更新方法(再代入)
// - ドット記法(できればこっちを優先して使用する)
userData.name = '二郎';
userData.age = 21;
// console.log(userData);

// - ブラケット記法
// console.log(userData['name']);
// console.log(userData['age']);

// オブジェクトのキーバリューの省略記法
// // キー: バリューが同じ場合省略できる

// const username = 'こうが';

// const user = {
//   username,
// };

// 配列
// 値をまとめて管理するもの
// index番号を使って値を管理する
/* 基本構文
[要素, 要素, 要素]

*/
// const colors = ['red', 'blue', 'yellow'];
//       　　         0       1        2
// console.log(colors);
// 値の取得方法,更新方法
// colors[1] = 'white';

// 要素の追加方法
// pushメソッド
// colors.push('blue');

// 要素を削除
// spliceメソッド
// colors.splice(0, 1);

// forEach
// colors.forEach((color) => {
//   console.log(color);
// });

// 分割代入

// 配列
// const red = colors[0];
// const blue = colors[1];
// const yellow = colors[2];
// const colors = ['red', 'blue', 'yellow'];

// const [red, blue, yellow] = colors;

// オブジェクト

// const user = {
//   name: '太郎',
//   age: 14,
// };

// const username = user.name
// const userage = user.age

// const { name, age } = user;

// 制御構文

// if文
// 条件分岐を扱う
// もしXXならYYする
/* 基本構文

if(条件式) {
    条件式がtrueのときの処理
} else {
    条件式がfalseの時の処理
}

else-if文
 - 上から下に条件を評価していくので
    最初にtrueになったブロックのみ実行
if(条件式A) {
    条件式Aがtrueの時の処理
} else if(条件式B) {
    条件式Bがtrueの時の処理
} else if(条件式C) {
    条件式Cがtrueの時の処理
} else {
    どの条件式もfalseの時の処理
}
*/

// const number = 30;

// if (number < 100) {
//   console.log('numberは100より小さい');
// } else {
//   console.log('numberは100以上である');
// }

// const x = 0;

// if (x) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// switch文
// 条件によって処理を分ける
/* 基本構文
switch(値) {
    case XX:
        値がXXの時の処理
        break;
    case YY:
        値がYYの時の処理
        break;
    default:
        値がXXにもYYにも当てはまらない時の処理
        break
}
*/

// const number = 1;

// switch (number) {
//   case 0:
//     console.log('0です');
//     break;
//   case 1:
//     console.log('1です');
//     break;
//   default:
//     console.log('それ以外です');
//     break;
// }
