// DOM: HTMLをjsで操作すること

/* 要素の取得
- getElementById : idを元に取得する 
- querySelector : cssのセレクターと同じように取得する
- querySelectorAll : cssのセレクターと同じように全て配列の形で取得する
*/

/* 要素の作成
- createElement(要素名)
*/
/* 要素の追加
- appendChild(要素) : 最後の子要素に追加
*/
/* 要素の削除
- removeChild(要素)
*/
/* イベントの設定
- addEventListener(きっかけ, 関数)
*/

// 要素の取得
const title = document.getElementById('title');
const list = document.querySelector('.list');
const deleteButton = document.getElementById('button');
const form = document.getElementById('form');

title.textContent = 'DOMです';

// liタグを作成
const item = document.createElement('li'); // HTML要素を指定
item.textContent = 'もも';

list.appendChild(item);

// ボタンが押された時のに何かが起きる
deleteButton.addEventListener('click', (event) => {
  const listItems = document.querySelectorAll('li');
  if (listItems.length > 0) {
    list.removeChild(list.lastElementChild);
  }
});

// HTMLの要素にはデフォルトの挙動があるものがある

form.addEventListener('submit', (event) => {
  event.preventDefault(); // デフォルトの挙動をキャンセルする
  console.log('送信したね');
});
