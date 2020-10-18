// アラート
// ユーザーに注意するアラートを出現させる
/*
alert(表示する文字);
ex)
alert("こんにちは")
*/

// コンフィルム
// yes/noのアラートを出現させる
/*
confirm(表示する文字)
// OKでtrueが返る
// キャンセルでfalseが返る
const result = confirm("元気ですか？")
console.log(result)

*/

// プロンプト
// ユーザーにテキスト入力欄を表示させる
/*
const result = prompt("年齢を入力してください")
console.log(result)
*/

// 追加ボタンを押したら「アイテム + 要素の数」が追加される
// 削除ボタンを押したら一番最後の要素から削除される

// 要素の取得
const addButton = document.getElementById("add")
const deleteButton = document.getElementById("remove")
const list = document.querySelector(".list")

// イベントの設定
addButton.addEventListener("click", () => {
	const itemLength = document.querySelectorAll("li").length;
	const item = document.createElement("li");

	item.textContent = `アイテム${itemLength + 1}`
	list.appendChild(item)

});

deleteButton.addEventListener("click", ()=>{
	const itemLength = document.querySelectorAll("li").length; // 配列の要素数
	// 注意: 削除する要素の親要素を指定
	if(itemLength !== 0) {
		list.removeChild(list.lastElementChild);
	}
})

// console.log([1,2,3,4,12,3]) //[1,2,3,4,12,3]
// console.log([1,2,3,4,12,3].length) // 6