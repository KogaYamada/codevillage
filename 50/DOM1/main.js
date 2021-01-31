// const title = document.getElementById('title');
// console.log(title.textContent);
// console.log(`<h1>タグの中身のテキストは、「${title.textContent}」です`);

/* getElementByIdメソッド
- 引数に取ったidの要素をHTMLから探して1つ取得する
*/

// const list = document.querySelector('.list');
// console.log(list);

// console.log(
//   `<ul>タグの2つ目の子要素のテキストは　${list.children[1].textContent}です`
// );
/* querySelectorメソッド
- 引数に取ったセレクタの要素をHTMLから探して最初に見つかった1つ取得する
*/

/* querySelectorAllメソッド
- 引数に取ったセレクタの要素をHTMLから探して全て取得する
*/

// const items = document.querySelectorAll('.list');
// console.log(items);

// ulタグのなかに新しい「もも」のリストを作成
const list = document.querySelector('.list');
const newItem = document.createElement('li');
newItem.textContent = 'もも';

list.appendChild(newItem);

const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', () => {
  const result = confirm('削除してよろしいですか？');
  if (result) {
    console.log('trueの時');
  } else {
    console.log('falseの時');
  }
});

// 要素に対してイベントを設定
// 「きっかけ」が起きると関数を実行する
// 要素.addEventListener('きっかけ', 関数);
