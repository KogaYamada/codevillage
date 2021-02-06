// コンソールログ
// -> 検証ツールのConsoleに出力する
// console.log(100 + 123);
// console.log('100asfouhqeo');

// JavaScriptのデータの種類(型)
// JavaScriptの基本型(プリミティブ型)

// 数字: number
//  - 計算ができる
//  - 範囲 -2^53 +1 ~ 2^53 -1
// console.log(123);

// 文字列: string
//  - 文字を表現
//  - '' "" ``で囲ったものは文字列として扱われる
// console.log('こんちは');

// 真偽値: boolean
//  - 正しい(true)か正しくない(false)かの2つの値のみからなる値
// console.log(true);
// console.log(false);

// 存在しない値: null
// console.log(null);

// 値が未定義である: undefined
// console.log(undefined);

// シンボル: symbol

// 値をまとめて扱うための型
// -> オブジェクト

// 型を確かめる方法
// typeof 演算子
// console.log(typeof 'undefined');

// コメントの使い方

// １行コメントにする時は // を使う

/*ここから
コメント
コメント
ここまで*/

// 変数宣言
// 値を格納する箱

// 変数宣言の種類
// const : 再代入不可の変数を定義
// let : 再代入できる変数を定義
// var : 古い書き方なのでつかわない(デメリットが多い)
const username = 'こうが';
let age = 12;
age = 13;
console.log(username);
console.log(age);
