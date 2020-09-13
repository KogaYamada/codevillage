const colors = ['red', 'blue', 'yellow'];
//                0      1        2
const obj = {
  id: 123,
  name: 'taro yamada',
  age: 24,
};

obj.id = 345;
obj['name'] = 'koga';
obj.friend = 'taro';

const users = [
  { id: 1, name: 'taro', age: 24 },
  { id: 2, name: 'jiro', age: 25 },
  { id: 3, name: 'jhon', age: 45 },
  { id: 4, name: 'hanako', age: 15 },
];

users.forEach(function (user) {
  // console.log(`${user.name}さんの年齢は${user.age}歳です`);
});

// JSON

/* jsのオブジェクトをJSONに変換(エンコード)
const datas = [
  { id: 1, name: 'Taro', comments: ['hello', 'world'] },
  { id: 2, name: 'Jiro', comments: ['looks good to me'] },
  { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
];

const json = JSON.stringify(datas);
console.log(json);
*/

/* JSONをjsのオブジェクトに変換(デコード)

const json = `
[
  { "id": 1, "name": "Taro", "comments": ["hello", "world"] },
  { "id": 2, "name": "Jiro", "comments": ["looks good to me"] },
  { "id": 3, "name": "Saburo", "comments": ["hi", "yes", ":)"] }
]
`;
const data = JSON.parse(json);
console.log(json);
console.log(data);
*/

// 関数型プログラミング

const add2 = (x) => x + 2;
const mul2 = (x) => x * 2;
const add3 = (x) => x * 3;

// 高階関数(callback関数): 関数を引数に取る関数

const twice = (func, x) => {
  return func(func(x));
};

// jsの用意しているcallback関数の一例
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  console.log('クリックされました');
  // alart("クリックされました")
});

const str = 'Hello World';
console.log(str.length); // 11
console.log(str.toUpperCase()); // HELLO WORLD

console.log(str.toUpperCase().toLowerCase()); // メソッドチェーン
