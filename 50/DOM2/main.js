// 追加ボタンが押された時には要素が追加
// 1. 追加ボタンを取得
// 2. ulタグを取得
// 3. 追加ボタンにクリックイベントAを設定
// 3-1. イベントA：空のli要素を作成
// 3-2. イベントA：作成した要素に「アイテムX」のテキストを設定
// 3-2-1. イベントA：現在のリストの要素の数を取得
// 3-3. イベントA：作成した要素をulタグの中の最後の要素に追加

// 1.
const addBtn = document.getElementById('add');

const list = document.querySelector('.list');

// 2.
addBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const itemLength = document.querySelectorAll('li').length;
  newItem.textContent = `アイテム${itemLength + 1}`;
  list.appendChild(newItem);
});

// 削除ボタンが押された時は要素を削除
// 1. 削除ボタンを取得する
// 2. 削除ボタンに対してイベントを設定
// 3. .list要素の一番最後の要素を削除する

// 1
const removeButton = document.getElementById('remove');
// 2
removeButton.addEventListener('click', () => {
  // 3
  if (list.lastElementChild !== null) {
    list.removeChild(list.lastElementChild);
  } else {
    alert('要素がありません');
  }
});

// イベント
const aTag = document.getElementById('aTag');
const eventButton = document.getElementById('eventButton');
aTag.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
});
eventButton.addEventListener('click', (event) => {
  // event === 今回のイベントの内容(出来事)
  // preeventDefault
  // HTML要素の持つデフォルトの挙動をキャンセル
  // event.preventDefault();
});
