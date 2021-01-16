// 制御構文

// 繰り返し
// for, while
// 無限ループに注意

/* for文(ループ処理)
 基本構文
 for(初期化処理; 条件式; 更新処理) {
     ループで行いたい処理
 }
*/

// for (let i = 0; i < 5; i++) {
//   console.log(`ループ処理です。iは${i}です`);
// }

// const array = [1, 5, 2, 3, 7, 6];

// for (let i = 0; i < array.length; i++) {
//   console.log(`arrayのindex番号${i}の要素は${array[i]}です`);
// }

/* while(ループ処理)
 - 基本構文

 while(条件式) {
    ループで行いたい処理
    // ループから抜けるための処理が必要
 }

*/

// let i = 0;

// while (i < 5) {
//   console.log(`while文のループ ${i + 1}回目`);
//   i++;
// }

// 飲酒が可能か判断する処理

// if (user1Age >= 20) {
//   console.log('飲酒可能です');
// } else {
//   console.log('飲酒できません');
// }
// if (user2Age >= 20) {
//   console.log('飲酒可能です');
// } else {
//   console.log('飲酒できません');
// }
// if (user3Age >= 20) {
//   console.log('飲酒可能です');
// } else {
//   console.log('飲酒できません');
// }
// if (user4Age >= 20) {
//   console.log('飲酒可能です');
// } else {
//   console.log('飲酒できません');
// }

// 関数:一連の処理をまとめたもの
// - 引数
// - 返り値
/* 基本構文
    
- 定義方法
function 関数名(引数) {
    処理
}

- 実行方法
 関数名(引数の値)
*/

// function sayHello(name) {
//   console.log(`${name}さんこんにちは`);
// }
const user1Age = 20;
const user2Age = 10;
const user3Age = 18;
const user4Age = 22;

// 関数を定義
function isAge20(ages) {
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 20) {
      console.log('飲酒可能です');
    } else {
      console.log('飲酒できません');
    }
  }
}

// 関数を実行
// isAge20(user1Age);

// 関数の返り値
// 関数の実行結果を呼び出し元に返す

const taro = {
  birthYear: 2000,
  name: '太郎',
};

function calcAge(year) {
  return 2021 - year;
}

let taroAge = calcAge(taro.birthYear);

// スコープ(name space):名前空間
// {}があるとスコープが生成される
//  - スコープの外側から内側の値にアクセス(参照)することはできない
//  - スコープの内側から外側の値にアクセス(参照)することはできる
// スコープの参照する値
const a = 10;
{
  const a = 20;
  {
    const b = 5;
    {
      //   console.log(a);
    }
  }
}

function funcA(num) {
  function funcB() {
    console.log(num);
  }
  funcB();
}
// funcA(20);

// JSON - Javascript Object Notation
// - データ形式
// ルール
//  - キーはそれぞれダブルクォーテーションで囲う
//  - 一番最後の要素にはコンマ(,)をつけない
//  - 処理を書くことができない(関数が定義できない)

// JavaScript -> JSON : エンコード
const user = {
  name: 'たろう',
  age: 20,
};

const json = JSON.stringify(user);
// JSON -> JavaScript : デコード
const decodedObj = JSON.parse(json);

// 関数とメソッド
// メソッド -> オブジェクトの中にある関数
