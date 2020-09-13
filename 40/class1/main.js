// データの型

/* 文字列(string)
ダブルクォーテーション、
シングルクォーテーション、
バッククォーテーション
で囲った値
*/
"コンニちは";
'Hello, World';
`こんにちは`;
'I\'m js developer' //エスケープ
/* 数字(number)
JavaScriptが計算するための値
"1"は数字じゃないよ！
2^53まではnumberとして扱える
*/
1
0.5
-12

/* 真偽値(boolean)
真(true)か偽(false)かを表す値
true/falseの２種類のみ
*/
true
false

/* 未定義(undefined)
定義がまだされていない
*/
undefined

/* null
値が存在しない
*/
null

// 変数:値を格納する箱みたいなもの
// let const
/* 基本構文
 -- 宣言 --
let 変数名 = 値     再代入OK
const 変数名 = 値   再代入NG
*/
// = は右辺と左辺が等しいという意味ではない
// = は右辺を左辺に代入する
let name = "koga" // 宣言、初期化


// 配列(array): 値を一括管理するもの
/* 基本構文
[要素, 要素, 要素, 要素, 要素]
値の参照方法
配列[インデックス番号]

*/
// それぞれにインデックス番号(index)が割り振られている
let username = ["koga", "taro", "ziro", ["こんにちは", "こんばんは"]]
// index番号       0       1       2               3

// オブジェクト(object): 値を一括管理するもの
/* 基本構文
{ キー: 値, キー: 値, キー: 値 }
値の参照方法
オブジェクト.キー      ドット記法
オブジェクト["キー"]   ブラケット記法
*/
// それぞれの値(value)にキー(key)を設定して管理する
let obj = { name: "高雅", age: 24, from: "JAPAN" };

/* 条件分岐(if文)
もしxxxならxxxする
-- 基本構文 --
if(条件式) {
  条件式が正しい時(true)の処理
} else {
  条件式が正しくない時(false)の時の処理
}
else if文
if(条件式A) {
  条件式Aが正しい時の処理
} else if(条件式B) {
  条件式Bが正しい時の処理
} else {
  どの条件式も正しくない時の処理
}

-- 比較演算子 --
  a > b   aはbよりも大きい
  a < b   aはbよりも小さい
  a >= b  aはb以上
  a <= b  aはb以下
  a === b aとbは等しい   "1" === 1  false
  a == b  aとbは等しい   "1" == 1   true
  a !== b aとbは等しくない
  a != b  aとbは等しくない


  const taroAge = 15;
  const ziroAge = 14;
  if(taroAge > ziroAge) {
    console.log("太郎が年上");
  } else {
    console.log("太郎が年下");
  }

  truesyな値とfalsyな値
  - 判定されるとtrue/falseになる値
  - 全ての値はtruesy/falsyな値である

  truesyな値
    falsyな値以外の全ての値
  falsyな値
    0, "", false, undefined, null, NaN(not a number)

*/


/* for文(ループ)
 -- 基本構文 --
 for(初期化; 条件式; 更新処理) {
   処理
 }
 条件式がtureの間処理が繰り返される

 i = i + 1
 i += 1
 i++

 i = i - 1
 i -= 1
 i--
 
 for(let i = 0; i < 5; i++) {
   console.log(`${i + 1}回目の処理`)
  }
*/


/* while文(ループ)
 -- 基本構文 --
 while(条件式) {
   処理
   条件式がfalseになる処理を書かないと無限ループする！！！
 }
*/
let x = 0;

while(x < 5) {
  console.log(`while文の${x + 1}回目の処理`)
  x ++
}