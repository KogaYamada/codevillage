// JavaScriptのデータの型(タイプ)
/* JavaScriptは動的片付け言語

文字列(string) "123" "hello"
数字(number) 123 1000 -123
真偽値(boolean) true false
未定義(undefined) undefined
存在しない(null) null

NaN: Not a Number

計算
123 + 123 // 246
123 - 23 // 100
123 * 2 // 246
100 / 2 // 50
5 % 2 // 1
"123" + "123" // "123123" 文字列連結
*/

// これはコメントです
// ブラウザの検証ツールのconosleで確認する

/* 変数
数学のxみたいなやつ
- 値をしまう箱みたいなやつ

 -- 基本構文 --
 let 変数名 = 値;
 const 変数名 = 値;

 let と constの違い
 let: 再代入できます
 const: 再代入できない

 -- 慣習 --
 再代入する変数はletで定義
 それ以外はconstで定義
*/

// 変数nameに文字列ko-gaを代入
let name = 'ko-ga';
let age = 2020 - 1996;
name = 'tato'; // nameにtaroを再代入

/* -- イコールの扱い --
数学では「=」は右辺と左辺が等しい
プログラミングでは「=」は右辺を左辺に代入する
*/

let n = 123;
n = n + 123; // nにn+123を再代入
n += 123; // nにn+123を再代入
n = n - 123;
n -= 123;

n += 1; // nに1を追加して再代入
n++; // nに1を追加して再代入

n -= 1; // nに1を追加して再代入
n--; // nから1を引いて再代入

/* 配列(array)
 - 複数の値を一括で管理する
 - それぞれの要素をindex番号で管理している

 -- 基本構文 --
 [要素, 要素, 要素]
*/

const classMember = ['koga', 'taro', 'jiro'];
//    index番号         0       1       2
// console.log(`${classMember[0]}さんこんにちは`);

/* テンプレート文字列
簡単に文字列連結を表現できる
バッククォーテーションを使用(shift + @)
-- 基本構文 --
`文字列${JavaScriptの式}`
*/

/* 配列操作
- 配列の要素を追加したり削除したりすること

-- 例 --
- push: 値を追加
push(追加したい要素)

- splice: 値を削除
splice(削除したい要素のindex番号, 削除する個数)
*/

const colors = ['red', 'blue'];
// colorsに"yellow"を追加したい
colors.push('yellow');

// "blue"を削除
colors.splice(1, 1);

/* オブジェクト(Object)
値をそれぞれキーで管理している
 -- 基本構文 --
 { キー: 値, キー: 値, キー: 値 }

 -- 値の取り出し方 --
 - オブジェクト名.キー     : ドット記法
 - オブジェクト名["キー"]  : ブラケット記法
*/
const user = { name: 'koga', age: 24, class: 42 };

// JavaScriptの構文
/* -- if文(条件分岐) --
 - もし~~なら~~する。

 -- 基本構文 --
 if(条件式) {
  条件式がtrue(正しい)の時の処理
  } else {
  条件式がfalse(正しくない)の時の処理
  }

  -- else if文 --
  if(条件式A) {
    条件式Aが(true)正しい時の処理
  } else if(条件式B) {
    条件式Bが(true)正しい時の処理
  } else {
    どの条件式も(false)正しくない時の処理
  }
*/
const userAge = 22;

if (userAge >= 20) {
  console.log('お酒飲めます');
}