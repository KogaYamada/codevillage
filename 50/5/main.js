const str = 'This is a pen.';

// メソッドチェーン
console.log(str.toUpperCase().toLowerCase());

// const array = [
//   () => {
//     console.log('hello');
//   },
//   () => {
//     console.log('hello2');
//   },
// ];

// array[1]();

const user = {
  name: 'taro',
};

Object.keys(user); // ["name"]
