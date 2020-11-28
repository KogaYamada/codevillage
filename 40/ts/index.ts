// プリミティブ型
// 文字列: string
// 数字: number
// 真偽値: boolean
// undefined
// null

// 型推論: typescriptが型を予想すること(優先)
// 型注釈: 開発者が型を明示的に指定すること

// リテラル型

// 配列の型
// let array:number[]

// タプル型
// let array: [string, string, number];

// any: なんでも型

// ユニオン: or
// let some: string | null;

// インターセクション: and
// type UserAge = {
//   age: number;
// };
// type UserName = {
//   name: string;
// };

// type User = UserAge & UserName

// const user:User = {
//     name:"asd",
//     age:14
// }

// オブジェクト
// let user: { name?: string; age: number };

/* 型エイリアス: 型の別名

type hands = 'グー' | 'チョキ' | 'パー';

type User = {
  age: number;
  name: string;
};
*/

// 読み取り専用: readonly

// type User = {
//     readonly name:string,
//     age: number
// }

// const user: User ={
//     name: "koga",
//     age:12
// }

// 関数
// type Add2 = (n: number) => number;

// const add2: Add2 = (n) => n + 2;

// const mul2 = (n: number): number => n * 2;

// ジェネリクス: 型の引数

const getLastElement = <T>(array: T[]): T => {
  return array[array.length - 1];
};

const some = getLastElement(['1', '2', '3']);
