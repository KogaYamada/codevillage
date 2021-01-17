// globalThisにwindowが設定されている

// const intro = document.getElementById('intro');
// textContent: 中身のテキストを表示
// innerHTML: 中身のHTMLを表示

// const list = document.querySelector('.list');
// DOM
// - HTML要素を取得して
//   - プロパティを書き換える
//   - イベントを設定する

// 要件
// 1: 追加ボタンが押されたらアイテムXのリストを追加する
// 2: 削除ボタンが押されたらリストの一番後の要素を一つ削除

// 要件1のステップ
// 1. 必要なHTML要素を取得する
// 2. ボタンが押された時のイベントを設定
// 2-1. 新しいli要素を作成
// 2-2. その要素のテキストを設定
// 2-3. 作成した要素をul要素の中に追加

// 要件2のステップ
// 1. 必要なHTML要素を取得する
// 2. ボタンが押された時のイベントを設定
// 2-1. リスト要素の一番後ろの要素を削除

//要件1
// 1
const addButton = document.getElementById('add');
const list = document.querySelector('.list');

// 2
addButton.addEventListener('click', () => {
  // 2-1
  const newItem = document.createElement('li');
  // 2-2
  const itemLength = document.querySelectorAll('.list li').length;
  newItem.textContent = `アイテム${itemLength + 1}`;
  // 2-3
  list.appendChild(newItem);
});

// 要件2
// 1
const removeButton = document.getElementById('remove');
// console.log(remove); // 謎(removeButtonが正解)
// 2
removeButton.addEventListener('click', () => {
  list.removeChild(list.lastElementChild);
});

// アイテムが0この時に削除ボタンを押すとエラーが出る
// このエラーを解消
