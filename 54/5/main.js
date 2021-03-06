const n = 4;

// n * 100 - 5

// nに100をかける関数
const mul100 = (n) => n * 100;
// nから5を引く関数
const minus5 = (n) => n - 5;

const result1 = minus5(mul100(n));
// console.log(result1);

// (n + 3) * 8 + 3

// nに3を足す関数
const add3 = (n) => n + 3;
// nに8をかける関数
const mul8 = (n) => n * 8;

const result2 = add3(mul8(add3(n)));
// console.log(result2);

const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
];

// 解法1
// 愚直に計算
/*
const sums = items.map((item) => {
  // ここを埋める
  const sum =
    item[0] + item[1] + item[2] + item[3] + item[4] + item[5] + item[6];
  return sum;
});
*/
// 解法2
// reduceメソッドを使用
/*
const sums = items.map((item) =>
  item.reduce((prev, current) => prev + current, 0)
);
*/
// 解法3
const sums = items.map((item) => {
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }
  return sum;
});
// console.log(sums); //=> [424, 313, 291, 379]

const title = document.getElementById('title');
title.textContent = 'DOMです';

const list = document.querySelector('.list');
list.children[1].textContent = 'ぶどう';

const newItem = document.createElement('li');
newItem.textContent = 'もも';
list.appendChild(newItem);

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const result = confirm('削除してよろしいですか？');
  console.log(result);
  if (result) {
    // 削除する処理
    list.removeChild(list.lastElementChild);
  }
});

/* 要素の取得(HTMLの中の要素をJSのDOMで取得する)
1. getElementByIdメソッド
- HTMLタグのid属性をもとに要素を1つ取得する
- メソッドの引数に取得する要素のidを指定

2. querySelectorメソッド
- CSSのセレクタと同じ方法で要素を1つ取得する
- メソッドの引数に取得する要素のCSSセレクタを指定

3. querySelectorAllメソッド
- CSSのセレクタと同じ方法で一致する要素を全て取得する
- メソッドの引数に取得する要素のCSSセレクタを指定
*/

const listItems = document.querySelectorAll('li');

/* 要素の作成
1. createElementメソッド
- 引数に指定したタグの空のHTML要素を作成
*/

/* 要素の追加
1. appendChildメソッド
- 要素Aの一番最後の子要素として指定した要素Bを追加する
要素A.appendChild(要素B)
*/

/* イベントリスナの設定
1. addEventListenerメソッド
- イベント: きっかけ
- きっかけがあると処理を行う
要素.addEventListener(イベント名, 関数)
*/
