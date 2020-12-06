// JavaScriptのデータの種類

// --- 文字列(string): 文字の集まり ---
// "" '' `` で括られた文字は文字列としてJavaScriptが読み取る

// --- 数字(number): 数字の事、計算ができる ---

// 計算する演算子
/*
// 足し算 (+)
console.log(1 + 1);

// 引き算 (-)
console.log(10 - 5);

// 掛け算 (*)
console.log(2 * 10);

// 割り算 (/)
console.log(10 / 2);

// あまり算 (%)
console.log(10 % 3);
*/

// コメントアウト (1行)
/*
ここから

ここまでコメント
*/

// --- 真偽値(boolean): yes or no ---
// true(真) or false(偽)
/*
console.log(true);
console.log(false);
*/

// --- 未定義(undefined) ---

// --- 値が存在しない(null) ---

// まとめ
/*
JavaScriptのデータの基本的な型(種類)は
- 文字列
- 数字
- 真偽値
- 未定義
- 存在しない
- 長整数(覚えなくていい)
- シンボル(覚えなくていい)
*/

// 変数:データを収納する箱

// 変数を定義
let number;
// 変数に値を代入
number = 100;

// 再代入
number = number - 10;

// 変数の宣言方法
var aaa; // 古いので使用しない

let some; // 再代入可能な変数の宣言
const hello = 'hello'; // 再代入不可の変数の宣言
