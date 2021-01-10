const title = document.getElementById('title');
const list = document.querySelector('.list');

/* HTML要素の取得方法

 1. getElementByIdメソッド
    - 引数に入れた文字列一致するidの要素をHTMLから取得する
 2. querySelectorメソッド
    - 引数に入れた文字列と一致するcssセレクターの要素をHTMLから取得する
    - 複数ある場合、最初に見つかった要素を取得
 3. querySelectorAllメソッド
    - querySelectorと同じ条件で見つかった要素を全て取得する
*/

const newItem = document.createElement('li');
newItem.textContent = 'もも';
list.appendChild(newItem);

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const result = confirm('削除してよろしいですか？');
  console.log(result);
});

// 次回eventについて説明
