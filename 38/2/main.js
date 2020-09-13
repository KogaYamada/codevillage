// --- データの型(基本) ---

// 文字列(String)
// "こんにちは", "hello"

// 数字(Number)
// 1, 0

// 真偽値(Boolean):正しい(true)/間違っている(false)
// ture, false

// 未定義(undefined)
// undefied

// 値が存在しない
// null

// --- 変数: let const ---
// const: 再代入不可
// let: 再代入可
// var: 古い,再代入可 -　使用しない

// let x = 11; // numに10を代入します
// let y = x; // 11が入る

// You're javascript masterを表示させる
// console.log("You're javascript master");
// console.log("You're javascript master");
// console.log(`You're javascript master`);

// --- 文字列連結 ---
// const user = 'koga';
// console.log('ようこそ' + user + 'さん');

// --- テンプレート文字列 ---
// console.log(`こんにちは${user}さん`);

// --- 配列 ---
const days = ['日', '月', '火', '水', '木', '金', '土'];
// index番号    0     1    2     3     4    5     6
// console.log(days[0]); // "日"を参照

const nengou = ['明治', '大正', '昭和', '平成'];
nengou.push('令和'); // 要素を一番後ろに追加する

// ["明治", "大正", "昭和", "平成", "令和"]

nengou.splice(3, 1); // index番号3から1つ消す

//["明治", "大正", "昭和", "令和"]
nengou[3] = '平成';

/* if文(条件分岐)
---基本構文---
if(条件式) {
  条件式がtrue(正しい)の時の処理
} else {
  条件式がfalse(正しく無い)の時の処理
}

---条件の書き方---
a === b: aとbが同じときtrue
a !== b: aとbが違うときtrue
a < b: aがbより小さい（未満）ときtrue
a <= b: aがb以下のときtrue
a > b: aがbより大きいときtrue
a >= b: aがb以上のときtrue

&& 全てがtrueの時にtrue
|| どれかがtrueの時にtrue
*/
const num = Math.random(); // 0 ~ 1までのランダムな数を生成

// if (num < 0.5) {
//   console.log('小さめ');
// } else {
//   console.log('大きめ');
// }

/* else if(条件分岐)
---基本構文---
if(条件式) {
  ifの条件式がtrue時の処理
} else if(条件式) {
  else ifの条件式がtrueの時の処理
} else {
  どれにも該当しない時
} 
*/

// const score = Math.random() * 100; // 0.0〜100.0の間の数値をランダムに作る

// // console.log(`点数: ${score}`);

// if (score >= 90) {
//   console.log('秀');
// } else if (score >= 75) {
//   console.log('優');
// } else if (score >= 60) {
//   console.log('良');
// } else if (score >= 30) {
//   console.log('可');
// } else {
//   console.log('不可');
// }

/*　for文(繰り返し)
---基本構文---
for(初期化; 条件式; 更新処理) {
  処理
} 

---代入の省略記法---
i = i + 1
i += 1
i ++ iが１づつ追加される時のみ使用可能
*/

for (let i = 0; i < 5; i++) {
  console.log(`for文${i + 1}回目の処理: i=${i}`);
}

// while文(繰り返し)
/* 基本構文
while(条件式) {
  処理
  更新処理を書くこと！！！
}
*/

let x = 0;
while (x < 5) {
  console.log(`while文${x + 1}回目の処理: x = ${x}`);
  x++; // 更新処理
}
