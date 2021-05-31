// 型注釈
// - 変数など値に対して型の情報を開発者が指定する
// let x: number = 100;
// 型推論
// - TSがコードの文脈を読み取って変数に対して型を指定する
// let y = 'hello';

// TSの型
// 文字列: string
// let str = 'hello';

// 数字: number
// let num = 123;

// 真偽値: boolean
// let bool = false

// リテラル型: 値そのものの型
// const x = 123; // number
// const y = 'hello'; // string
// let x:true = true

// 値がないことを示す型
// null: null
// let n: null = null;

// undefined: undefined
// let u: undefined = undefined;

// any
// let x: any = true;

// 配列
// type[]
// Array<string>
// let array: (string | number)[] = ['123', '345', '123'];

// タプル
// let array: ['str', 123, true] = ['str', 123, true];

// 型エイリアス
// type Array1 = string[];
// const array:Array1 = ["123"]

// type User = {
//   name: string;
//   age?: number; // optional
// };

// const user: User = {
//   name: 'jajajaj',
//   age: 123,
// };

// 関数
// function add2(n: number): void {
//   //   return n + 2;
//   n + 2;
// }

// type Add2 = (n: number) => number;

// void:返り値がない
// never: 値が存在しない
// const err = () => {
//   throw new Error('error!!');
// };

// ユニオン

// let x: number | string = 123;

// インターセクション

// let x: { name: string } & { age?: number } = {
//   name: '123',
//   age: 123,
// };

// type User = {
//   name: string;
//   age?: number;
// };

// 型ガード
// const fn = (user: User): number => {
//   if (user.age !== undefined) {
//     return user.age;
//   }
//   return 0;
// };

// tagged union
// ２種類のオブジェクトの型から1つの型に限定する
// type A = {
//   type: 'A';
//   fieldA: string;
// };

// type B = {
//   type: 'B';
//   fieldB: number;
// };

// type U = A | B;

// const fn = (data: U): string => {
//   if (data.type === 'A') {
//     return data.fieldA;
//   }
//   return data.fieldB.toString();
// };

// ジェネリクス
// 型の引数

// 配列を受け取って配列の中の要素を1つreturnする

// const fn = <T>(array: T[]): T => {
//   return array[0];
// };

// const x = fn([123, 123]);
