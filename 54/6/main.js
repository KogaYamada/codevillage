// 使用する要素の取得
const list = document.querySelector('.list');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

// 追加ボタンのクリックイベントの設定
addButton.addEventListener('click', () => {
  const listItemLength = list.children.length;
  const newItem = document.createElement('li');
  newItem.textContent = `アイテム${listItemLength + 1}`;
  list.appendChild(newItem);
});
// 削除ボタンのクリックイベントの設定
removeButton.addEventListener('click', () => {
  const lastElement = list.lastElementChild;
  if (lastElement === null) {
    alert('アイテムがありません');
    return;
  }
  const result = confirm('アイテムを削除してよろしいですか？');
  if (result) {
    list.removeChild(list.lastElementChild);
  }
});
