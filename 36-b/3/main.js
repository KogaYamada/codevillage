// const days = ['日', '月', '火', '水', '木', '金', '土']  ?
//      index番号   0    1     2    3     4    5     6     7
// 配列の中の要素の数
// console.log(days.length) //=> 7

// // 配列の中の個別のindex番号
// console.log(days[0]) //=> 日
// console.log(days[1]) //=> 月
// console.log(days[2]) //=> 火
// console.log(days[3]) //=> 水
// console.log(days[4]) //=> 木
// console.log(days[5]) //=> 金
// console.log(days[6]) //=> 土
// console.log(days[7]) //=> undefined

// jsの基本データタイプ
// 文字列
// 数字
// 真偽値
// undefined
// null

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const str = ["apple", "ogange"]
// const array = [
//   [7,8,9], // 0
//   [4,5,6], // 1
//   [1,2,3]  // 2
// ]

// array[1][2] // 9



// ここから
const nengou = ['明治', '大正', '昭和', '平成'];
nengou.push("令和");// ['明治', '大正', '昭和', '平成', '令和']
nengou.splice(3, 1);// ['明治', '大正', '昭和', '令和']
nengou[2] = "hello";// ['明治', '大正', 'hello', '令和']

// 課題２
// const array = [1, 2, 3]

// array.splice(0,1)

// console.log(array) //=> [2, 3]

// array.push(5)

// console.log(array) //=> [2, 3, 5]

// array.splice(1, 2)

// console.log(array) //=> [2]

// array[0] = 100

// console.log(array) //=> [100]

/*
if(条件式) {
  条件式が正しい時の処理
} else {
  条件式が正しく無い時の処理
}
*/

const num = Math.random() // 0~1で欄ラムな数字を生成

// if(num > 0.5) {
//   // 変数numが0.5より大きい時
//   console.log("大きめ")
// } else {
//   // 変数numが0.5より小さい時
//   console.log("小さめ")
// }

// 条件式たち
// a === b: aとbが同じときtrue
// a !== b: aとbが違うときtrue
// a < b: aがbより小さい（未満）ときtrue
// a <= b: aがb以下のときtrue
// a > b: aがbより大きいときtrue
// a >= b: aがb以上のときtrue

// 条件式の中に入る値
// 真偽値(Boolean): true false
// true: 正しい
// false: 間違ってる

// truesyな値: 評価されるとtrueになる値
// falsyな値以外の値

// falsyな値: 評価されるとfalseになる値
// 0, "", null, undefined, false, NaN


// | はshift + ¥と押す
// if(1 < 4 || 3 === 1) {
//   console.log("trueです")
// } else{
//   console.log("falseです")
// }

// const score = 50

// if(score > 60) {
//   console.log("合格")
// } else if(score <= 59 && score >= 40) {
//   console.log("保留")
// }　else if(score < 40 && soore >= 20) {
//   console.log("まあまあ")
// }

/*
for(初期化; 条件式; 更新処理) {
  繰り返したい処理
}
*/

// i++  i = i + 1と同じ
// i--  i = i - 1と同じ
// for (let i = 0; i < 5; i++) {
//   console.log(`${i + 1}回目の処理`)
// }


/*
while(条件式) {
  条件式がtrueの時の処理
}
*/
// let x = 0
// while(x < 10) {
//   console.log("whileのループ")
//   x = x + 2
// }

/* forEach文
配列.forEach((変数) => {
  各要素ごとに実行したい処理
})
*/
// const animals = ['サーバル', 'フェネック', 'アライグマ'];
// animals.forEach((animal)=>{
//   console.log(animal)
// })

/*
function 関数名(引数) {
  処理
}
*/

function sayHello(name) {
  console.log('おはよう')
  console.log(name)
}

sayHello("太郎")
sayHello("はなこ")
