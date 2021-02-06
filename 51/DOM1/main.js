// 要素を取得する
// const title = document.getElementById('title');
// title.textContent = 'DOMです';
// console.log(title);
// DOMのメソッド

// 要素の取得
/* 
1. getElementByIdメソッド
- 引数に取った文字列のidと一致する要素を取得して返す
const title = document.getElementById("title")
-> id="title"の要素を取得

2. querySelectorメソッド
- 引数に取った文字列のCSSセレクタと一致する最初の要素を取得して返す
const title = document.querySelector("h1")
const list = document.querySelector('.list');

3. querySelectorAllメソッド
- querySelectorの指定方法で一致する要素全てを取得
const items = document.querySelectorAll('li');
console.log(items);

要素の作成
1. createElementメソッド
- 引数に取った文字列のHTMLタグの要素を生成する

要素の追加
1. appendChildメソッド
- 引数に取った要素を最後の子要素として追加

イベントの追加
1. addEventListenerメソッド
- 第一引数にイベントを、第二引数にイベントが起こった時に実行されるコールバック関数

削除処理
1. removeChildメソッド
- 第一引数に指定した子要素を削除
*/

const list = document.querySelector('.list');
// console.log(list.children[1].textContent);

const newItem = document.createElement('li');
newItem.textContent = 'もも';
list.appendChild(newItem);

const button = document.getElementById('button');
button.addEventListener('click', function () {
  const result = confirm('削除してよろしいですか？');
  // resultがtrueならユーザーは削除したい
  // resultがfalseならユーザーは削除をしたくない
  if (result === true) {
    // 削除する時の処理
    list.removeChild(list.lastElementChild);
  }
});

const firstButton = document.getElementById('firstRemove');
firstButton.addEventListener('click', function () {
  const result = confirm('削除してよろしいですか？');
  // resultがtrueならユーザーは削除したい
  // resultがfalseならユーザーは削除をしたくない
  if (result === true) {
    // 削除する時の処理
    list.removeChild(list.firstElementChild);
  }
});

// 要素.addEventListener(きっかけ, 動作);

// const items = [
//   // ここを埋める
//   { n: 100 },
//   { a: { b: ['abc'] }, c: { 100: 'foobar' } },
// ];
// // itemsの中に2つ要素がある -> 中身はオブジェクト

// console.log(items[0].n); //=> 100
// console.log(items[1].a.b[0]); //=> abc
// console.log(items[1].c['100']); //=> foobar

// 二次元配列
const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
];

const sums = items.map((item) => {
  // reduceを参照
  return item.reduce((result, current) => result + current);
});
// console.log(sums); //=> [424, 313, 291, 379]

const numbers = [1, 2, 3, 4];
// 配列の中身をループさせるメソッド
// forEach
// 配列の全ての要素に対して処理を行う
const result1 = numbers.forEach((number) => {
  //   console.log(number * 2);
  return number * 2;
});
// console.log(result1);
// map
// 返り値がある -> 処理をした結果の配列を生成する

const result2 = numbers.map((number) => {
  //   console.log(number * 2);
  return 'hello';
});
// console.log(result2);

// n * 100 - 5
const n = 10;
const mul100 = (n) => n * 100;
const minus5 = (n) => n - 5;
// Number.prototype.minus5 = (n) => n - 5;
console.log(minus5(mul100(10)));

// (n + 3) * 8 + 3
const add3 = (n) => n + 3;
const mul8 = (n) => n * 8;

console.log(add3(mul8(add3(n))));
