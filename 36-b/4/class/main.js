// ---------- //
// オブジェクト //
// ---------- //

// 値を一括で管理するためのもの

// 各要素をインデックス番号で管理している
const array = [1, 2, 3, 4, 5];
// 配列[インデックス番号];
// array[3]; // 4

// 各要素を「キー」で管理している
const obj = {
  name: "koga",
  age: 24,
  from: "ja",
  log: function(){},
  numbers: [2,4,6,8,0],
  info: {
    message: "こんにちは"
  }
};



/* 基本構文(オブジェクト)
{ キー: 値, キー: 値 }

  値を取り出す方法
オブジェクト.キー

オブジェクト["キー"]
*/

obj.from // ドット記法
obj["name"] // ブラケット記法

// 値の書き換え
obj["from"] = "日本"
obj.message = "こんにちは"


// JSON
// データの形式
// JSONのルール
// 1. キーはダブルクォーテーション("")で囲わなくてはいけない
// 2. 最後の要素の後ろにコンマ(,)をつけてはいけない
// 3. 処理を書いてはいけない(データ形式)

const users = [
  {name: "taro", age: 13, id: 1},
  {name: "ziro", age: 10, id: 2},
  {name: "hanako", age: 12, id: 3},
];

// エンコード
const encoded = JSON.stringify(users);

// デコード
const decoded = JSON.parse(encoded);
console.log(decoded);
