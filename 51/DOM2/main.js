// ボタンを押した時(event)の復習
// 要素の取得
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.querySelector('.list');

// 追加ボタンが押された時
addButton.addEventListener('click', function (event) {
  const itemLength = document.querySelectorAll('li').length;
  // エラー回避方法2
  if (itemLength === 0) {
    removeButton.disabled = false;
  }
  // 現在のliタグの数を取得
  // 空のHTMLタグを作成
  const newItem = document.createElement('li');
  // タグの中身を書く
  newItem.textContent = `アイテム${itemLength + 1}`;
  // 作成したタグを実際のHTMLに反映
  list.appendChild(newItem);
});

// 削除ボタンが押された時
removeButton.addEventListener('click', function (event) {
  // エラー回避方法1
  if (list.lastElementChild === null) {
    return;
  }
  // エラーをなくす
  // if文とか使うといいかも
  // removeChildの引数にはNodeが欲しい
  list.removeChild(list.lastElementChild);
  // エラー回避方法2
  if (document.querySelectorAll('li').length === 0) {
    removeButton.disabled = true;
  }
});

// eventについて
// - targetプロパティ: イベントが起きた要素
// - preventDefaultメソッド: HTMLのデフォルトに設定している挙動のキャンセル
const button = document.getElementById('button');
const aTag = document.getElementById('aTag');
button.addEventListener('click', function (event) {
  console.log(event.target);
});

aTag.addEventListener('click', function (event) {
  event.preventDefault();
});
