/* 追加ボタンが押されたらリストのアイテムが増える

1. ul要素を取得して変数に格納する(どこに追加するか)
2. 追加ボタンを取得して変数に格納する
3. 追加ボタンにクリックイベントを設定する
    --クリックイベント
    1. liタグの作成して変数に格納
    2. リストの数を管理するための要素を取得して変数に格納
    3. liタグのテキストを追加
    4. 作成した要素をulタグの子要素として追加する

    削除ボタンが押されたらリストのアイテムの一番最初の要素が削除される
1. 削除ボタンを取得して変数に格納
2. 削除ボタンにイベントを設定
    --クリックイベント
    1. ulタグの最初の子要素を削除
*/

// 要素の取得
const addBtn = document.getElementById('add');
const list = document.querySelector('.list');
const removeBtn = document.getElementById('remove');

// イベントの設定
addBtn.addEventListener('click', () => {
  const listItem = document.querySelectorAll('li');
  const newItem = document.createElement('li');
  newItem.textContent = `アイテム${listItem.length + 1}`;
  list.appendChild(newItem);
});

removeBtn.addEventListener('click', () => {
  list.removeChild(list.firstElementChild);
});
