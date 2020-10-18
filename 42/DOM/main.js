// HTMLからidがtitleの要素を取得して、そのテキストを「DOMだよ」に変更した。
const title = document.getElementById('title');
title.textContent = 'DOMだよ';

/* 要素の取得
1. getElementById(要素のid) : HTML要素のidを元に要素を取得する
2. querySelector(要素のセレクター) : HTML要素をcssのセレクターと同じ方法で最初に一致した1つを取得する
3. querySelectorAll(要素のセレクター) : querySelectorと同じ方法で全ての要素を取得する(配列として取得)

 -- point --
 - 取得した要素は変数に入れて使い回す。

 console.log(document.getElementById('title'));
 console.log(document.querySelector('.list'));
 console.log(document.querySelectorAll('li'));

*/

/* 要素の情報の更新
 - 更新はオブジェクトのプロパティを書き換えるのと同じ要領で行う
 ex) textContent, innerHTML

 要素.プロパティ = "変更したい値"
*/

/* 要素の作成
 - createElement(作成するHTML要素)

*/
const item = document.createElement('li');
item.textContent = 'ブドウ';
/* 要素をHTMLに追加
 - appendChild(要素) : 指定した要素を最後の子要素として追加

*/
const list = document.querySelector('.list');
list.appendChild(item);

/* 要素の削除
 - removeChild(削除する要素) : 子要素を削除
*/
// list.removeChild(list.firstElementChild);

/* イベントの設定
 - 要素.addEventListner("きっかけ", 処理)
*/
const deleteButton = document.getElementById('button');
deleteButton.addEventListener('click', () => {
	// 削除ボタン押した時の処理
	const items = document.querySelectorAll("li")
	if(items.length !== 0) {
		// liタグの要素の数が0の時は実行されない
		list.removeChild(list.firstElementChild);
	}
});

// 削除ボタンを押した時のエラーを解消
// なんのエラーか
// 削除する要素がないのでエラーが出る

// 16分くらいまで↑のエラー解消
// - if文を使うよ
// - 条件式はli要素の数が0の時などを使うよ

// イベントって？
// きっかけ、タイミング
// ex) クリックしたとき, マウスが要素の上を通過したとき(hover)

// javascriptの命名について
// キャメルケース
//  const getelementById
//  const getElementById

 // スネークケース python
 // get_element_by_id
