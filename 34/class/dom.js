/*
-- DOM --
テキストを書き換えたい時
 1. 要素を取得する
 2.その要素のプロパティを更新する
要素を追加する時
 1. 要素を作成して変数に格納
 2. 要素の情報を追加
 3. htmlの要素に追加(反映)する
*/

const title = document.getElementById('title');
title.textContent = '買った物リスト';

const list = document.querySelector('.list');
const listItem = document.createElement('li');
listItem.textContent = 'もも';
list.appendChild(listItem);

/* イベントリスナー
あるきっかけが起きた時に何かが起こるようにする
ex) ボタンがクリックされた時に、アラートで注意される

 -- 基本構文 --
 HTML要素.addEventLitener(きっかけ, 処理)
*/

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  alert('ボタンおしたね');
});

/* 要素の取得方法
 - getElementById: HTML要素のid属性を元に要素を取得します
 - querySelector:  HTML要素をcssセレクターと同じ形で取得できます
 - querySlectorAll HTML要素をcssセレクターと同じ形で全て取得できます

*/
