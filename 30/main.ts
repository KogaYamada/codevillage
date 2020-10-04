{
  // formで入力した値 => "123"
  const inputNunber = '123';

  const addi = 100;

  type price = number;
  const totalPrice: price = inputNunber + addi;
  // "123100"

  type array = [string, string, number, boolean];
  const a: array = ['qwe', 'ad', 2, true];
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: 'koga',
    age: 24,
  };

  type Fn = (n: number | string) => number;

  const fn: Fn = (n) => {
    if (typeof n === 'number') {
      return n;
    }
  };
  fn('asd');

  // string(文字列)　"asd" 'ewfd' `esf3`
  // number(数字) 1234 -1234 0
  // boolean(真偽値) true false
  // undefined 未定義
  // null　値が存在しない

  // void 関数の返り値がない
  // never まだ覚えなくていい(型が入るわけがない)
  // any なんでも(anyを使用した時点で負け)

  // 配列
  // string[] number[]
  type Fn2 = (n) => void;
  type A = {
    type: 'A';
    name: 'a';
  };
  type B = {
    type: 'B';
    name: 'b';
  };
  type C = {
    type: 'C';
    name: 'c';
  };
  const fn2: Fn2 = (n: A | B | C): void => {
    switch (n.type) {
      case 'A':
        console.log(n);
      case 'B':
        console.log(n);
      case 'C':
        console.log(n);
    }
  };

  // ジェネリックス
  type GFN = <T>(n: T[]) => T;
  const gfn: GFN = (n) => {
    return n[1];
  };

  [1, 2, 3, 4].map((element) => {
    return element * 2;
  }); // [2,4,6,8]

  // map関数
  type Map = <T, U>(array: T[], fn: (element: T) => U) => U[];
}
