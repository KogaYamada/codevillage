/* エンコード
オブジェクト => JSON
const users = [
  { id: 1, name: 'Taro', comments: ['hello', 'world'] },
  { id: 2, name: 'Jiro', comments: ['looks good to me'] },
  { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
];

// jsのオブジェクトをjsonに変換
const json = JSON.stringify(users);

console.log(json);
*/

/* デコード
JSON => オブジェクト
const json = `
[
  { "id": 1, "name": "Taro", "comments": ["hello", "world"] },
  { "id": 2, "name": "Jiro", "comments": ["looks good to me"] },
  { "id": 3, "name": "Saburo", "comments": ["hi", "yes", ":)"] }
]
`;
const users = JSON.parse(json);

console.log(users);
*/

// const add2 = (x) => x + 2;
// const mul2 = (x) => x * 2;

// const n = 3;

/*
const add2 = (x) => x + 2;
const mul2 = (x) => x * 2;

// 高階関数(collback関数) : 引数に関数を取る関数
function twice(f, x) {
  return f(f(x));
}
const result = twice(mul2, 10);
*/

/*
// map関数:配列を元に別の配列を作る関数
const array = [1, 2, 3, 4, 5];

const newArray = array.map((x) => x * 2);

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  console.log('ボタンが押されました');
});
*/

const str = 'This is a pen.';
//           0123456789
console.log(str);
const array = [];
