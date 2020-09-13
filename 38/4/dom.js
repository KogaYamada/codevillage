// HTMLをJSで操作する => DOM操作

/* 要素の取得方法
getElementById : htmlのidを元に要素を取得する
querySelector : cssのセレクターと同じ形でhtmlの要素を1つ取得する
querySelectorAll : cssのセレクターと同じ形でhtmlの要素を全て取得する
*/
const title = document.querySelector('#title');
const ulTag = document.querySelector('.list');
const removeButton = document.getElementById('button');

/* 要素の作成
createElement : html要素を作成する
*/
const listItem = document.createElement('li');

/* テキストのプロパティ
textContent : 要素のテキスト
innerHTML : 要素のテキスト
*/
listItem.textContent = 'もも';

/* 要素の追加
appendChild : 子要素の一番後ろに追加
*/
ulTag.appendChild(listItem);

/*要素の削除
removeChild : 指定した子要素を削除
*/

// イベントリスナー
// あるきっかけが起きると、何かが起きる
/*
html要素.addEventListner(きっかけ, 関数)
*/

removeButton.addEventListener('click', () => {
  ulTag.removeChild(ulTag.lastElementChild);
});
