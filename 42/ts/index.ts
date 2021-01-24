// typescript -> javascript

// なんでTS?
// - 予期しない(意図しない)挙動を防ぐ

// const calcPrice = (a: number, b: number) => {
//   return a + b;
// };

// const resultA = calcPrice(100, 200);
// -> 300

// const resultB = calcPrice('100', '200');
// -> なし
// ---------------------------------------

// 型推論: TSが型をコードを読んで推論すること
// 型注釈: 開発者が変数などに明示的に型情報を注釈すること

// 型の種類

// any: 全ての型の可能性を持つ型。(なんでもあり)極力使わない。最終手段。
// let num: any = 100;

// boolean: true/false
// let bool: boolean;

// リテラル型: 1つの値を表す型。それ以外の型受け入れません。
// let bool:false = true

// number:数字
// let num:123 = 123

// string:文字列
// let str: 'hello' = 'hello';

// オブジェクト
// let obj: { name: string; age: number } = {
//   name: 'taro',
//   age: 12,
// };

// 型エイリアス

// type User = {
//   name: string;
//   age: number;
// };

// let obj: User = {
//   name: 'asd',
//   age: 12,
// };

// インデックスシグネチャ: オブジェクトのキーの型が不確定なとき
// const airline: { [id: string]: string } = {
//   A12: 'taro',
//   A13: 'ziro',
//   A14: 'hanako',
// };

// ユニオンタイプとインターセクションタイプ
// ユニオンタイプ: 合併型 (or)
// インターセクションタイプ: 交差型 (and)

// ユニオンタイプ ( | )
// type A = {
//   name: string;
//   age: number;
// };

// type B = {
//   name: string;
//   form: string;
// };

// type C = A | B;

// インターセクションタイプ ( & )
// type A = {
//   name: string;
// };

// type B = {
//   age: number;
// };

// type C = A & B;

// const obj:C = {
//   name:"asd",
//   age: 12
// }

// 配列
// let numberArray: (string | number)[] = [1, '2'];

// タプル
// let array: ['hello', string, number] = ['hello', '123', 123];

// 値の欠如を表すタイプ
// null: 値の欠如
// undefuned: 値がまだ割り当てられていない変数
// void: returnを持たない関数の戻り値の型
//     void == undefined
// never: 絶対に戻ることのない関数の戻り値

// const throwError = () => {
//   throw new Error('これはエラーです');
// };

// 関数の型

// type Add2 = (n: number) => number;

// const add2: Add2 = (n) => {
//   return n + 2;
// };

// type Taro = {
//   name: 'taro';
//   age: 12;
// };

// type Jiro = {
//   name: 'jiro';
//   age: 15;
// };

// const whichMan = (user: Taro | Jiro) => {
//   if(user.name === "taro") {
//     user.age
//   } else {
//     user
//   }
// }

// let data: { name: string; age: number } | undefined;
// // data.age
// if (data === undefined) {
//   console.log('error');
// } else {
//   data.age;
// }

// ジェネリクス
// 型の引数

/**
 * 引数には配列。
 * 配列の中の一番最初の要素を返す。
 * 配列がからの場合はnull返す
 */
const getFirstElement = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('error');
  }
  return array[0];
};

const numbers = ['a', 'b', 'c', 123];

const result = getFirstElement(numbers);

type MyMap = <T, U>(array: T[], callback: (element: T) => U) => U[];

/**
 * 引数はarray,callback
 * array: 配列(中身の要素はわからない)
 * callback: テスト関数、テスト関数がtrueを返した要素のみの配列が生成されます
 */
type MyFilter = <T>(array: T[], callback: (element: T) => boolean) => T[];

const todos = [
  {
    id: 'asdas',
  },
  {
    id: 'asdas',
  },
];

const deleteTodo = (id: string) => todos.filter((todo) => todo.id !== id);

// npx create-react-app ts-todo --template typescript
