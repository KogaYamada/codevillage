{
  // 変数に型をつける場合
  let age: number = 23;
  let name: string = 'koga';
  let bool: boolean = true;
  let non: null = null;
  let undef: undefined = undefined;

  // string, number, booleanはリテラル型をつけることもできる
  let koga: 'koga' = 'koga';
  let count: 12 = 12;
  let t: true = true;

  // 配列の型
  let strArray: string[] = ['a', 'b', 'c', 'd'];
  let strArray2: Array<string> = ['a', 'b', 'c', 'd'];

  let numArray: number[] = [1, 2, 3, 4];
  let numArray2: Array<number> = [1, 2, 3, 4];

  // オブジェクトの型
  let user: { name: string; age: number } = {
    name: 'koga',
    age: 24,
  };

  // 型エイリアス
  type str = string;
  type num = number;
  type User = {
    name: string;
    age: number;
  };

  const newUser: User = {
    name: 'user',
    age: 25,
  };

  // ユニオン
  let value: number | string = 'afa';
  let hand: 'グー' | 'チョキ' | 'パー' = 'グー';

  //関数の型 引数と返り値に型をつける

  const add2 = (n: number): number => {
    return n + 2;
  };
  //   console.log(add2(1234)); // 1236
  type Add2 = (n: number) => number;
  const add2again: Add2 = (n) => n + 2;

  // void => 返り値がない
  type Log = (str: string) => void;
  const log: Log = (str) => {
    console.log(str);
  };
  // never => 値が返らない
  type Error = () => never;
  const error: Error = () => {
    throw new Error('エラーです');
  };

  // 型推論と型注釈
  // 型推論 => typescriptが文脈から当てはまる型を予想すること
  // 型注釈 => typescriptに当てはまる型を伝えること(typescriptが予想できないところに注釈を当てる)

  const username = 'koga';
  const cb = (fn: (str: string) => void, str: string): void => {
    fn(str);
  };
  cb((str) => console.log(str), 'こんちは');

  // any: なんでも(型がわからない時 or typescriptの限界)
  let aa: number[] = [1, 2, 3];

  type User2 = {
    name: string;
  };
  // ジェネリクス　型の引数バージョン
  type Some = <T>(array: T[]) => T;

  const some: Some = (array) => {
    return array[0];
  };

  some([
    { name: 'koga', age: 24 },
    { name: 'taro', age: 11 },
  ]);
  type Map = <T, U>(
    array: T[],
    callback: (element: T, index: number, array: T[]) => U
  ) => U[];
}
