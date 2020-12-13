const breakfast = 'トースト';
// 文字列結合
// console.log('今日の朝ごはんは' + breakfast + 'でした。');
// テンプレート文字列:バッククォーテーションで囲む(jsの歴史では比較的新しい文法)
// console.log(`今日の朝ごはんは${breakfast}でした。`);

// エスケープシーケンス(バックスラッシュ)
// mac -> option + ¥
// console.log("You're a JavaScript master!");
// 改行 バッククォーテーションを使う or \n を使う
// console.log('1行目\n2行目');

//  -- 配列　オブジェクト --

// 配列:Array
// -> 値をindex番号で複数管理
// -> index番号は0から始まる数字の連番
/* 基本構文
[要素, 要素, 要素]
* 要素 => 配列の中身の値
* 要素(element)

- 配列のアクセス方法
   配列[index番号]

- 配列の要素の書き換え
   配列[index番号] = 書き換えたい内容

- メソッド
    - 配列の要素の追加
        配列.push(追加したい要素) // 一番最後の要素として追加
    - 配列の要素の削除
        配列.splice(開始index番号, 削除する数)

*/
const days = ['日', '月', '火', '水', '木', '金', '土'];
// index番号    0     1    2     3     4    5     6
// ---------------------
const friends = ['太郎', '二郎', '三郎'];

// console.log(friends); //['太郎', '二郎', '三郎']

friends.push('花子');

// console.log(friends); //['太郎', '二郎', '三郎', '花子']

friends.splice(1, 2);

// console.log(friends); //['太郎', '花子']

/* オブジェクト
 -> 値をまとめて管理するときに使用
 -> key:valueの形で管理する

 基本構文
 { key: value, key: value, key: value }

 値のアクセス方法
    - ドット記法
        - オブジェクト.key
    - ブラケット記法
        - オブジェクト["key"]

 値の書き換え
    - オブジェクト.key = 書き換えたい値
    - オブジェクト["key"] = 書き換えたい値
*/

const user = { name: 'koga', age: 24, friends: ['たろう', '二郎'] };
// console.log(user.name);
// console.log(user['age']);
user.age = 25;
user.age = user.age + 1;

// console.log(user);

// 配列,オブジェクトの中身

// それぞれは中に配列、オブジェクトを入れることができる

const users = [
  {
    name: 'taro',
    age: 12,
  },
  {
    name: 'ziro',
    age: 14,
  },
  {
    name: 'hanako',
    age: 13,
  },
];

// JavaScriptの構文

/* if文 - 条件分岐 -
〇〇ならXXする
 - 基本構文
    if(条件式) {
        条件式がtrueになった時の処理
        -> 条件式が成り立つ時
    } else  {
        条件式がfalseになった時の処理
        -> 条件式が成り立たない時
    }

 - else if文
    if(条件式A) {
        条件式がtrueになった時の処理
        -> 条件式が成り立つ時
    } else if(条件式B) {
        条件式Aがfalseで条件式Bがtrueになった時の処理
    }
*/

const score = 8;

// if (score > 90) {
//   console.log('素晴らしい');
// } else if (score > 70) {
//   console.log('まあまあ');
// } else {
//   console.log('だめ');
// }

// 比較演算子: JavaScriptが計算してtrue/falseで結果を出力する

// A > B : AはBより大きければtrue
// A < B : AはBより小さければtrue
// A >= B : AはB以上ならtrue
// A <= B : AはB以下ならtrue
// A == B : AとBが等しければtrue
// A != B : AとBが等しくなければtrue
// A === B : AとBが厳密に等しければtrue
// A !== B : AとBが厳密に等しくなければtrue

// let age = 10;
// if (age) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// age = -1;
// if (age) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// age = 0;
// if (age) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// truthyな値とfalsyな値
// -> 評価されるとtrue/falseになる値のこと
// JavaScriptの値は全てtruthyな値とfalsyな値に分類される

// falsyな値
// 0, "", false, null, undefined, NaN

// turthyな値
// falsyな値以外の値

/* 三項演算子
 - 基本構文
   条件式 ? trueの時 : falseの時
*/
const age = 29;
console.log(age >= 20 ? '成人済み' : '未成年');
