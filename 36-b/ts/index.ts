{
  // tsの基礎的な型

  // -- プリミティブ型 --
  // 数字(number)    123   -1   0
  // 文字列(string)   "1000" "hello"
  // 真偽値(boolean)     true  false
  // undefined   undefined
  // null     null

  // -- リテラル型 --
  // let age: 20;
  // //   let name: 'taro';
  // let t: true;

  // // ユニオン  |

  // let name: 'taro' | 'jiro';

  // // tsには基礎的な仕様として「型推論」と「型注釈」
  // const num = 123;

  // let Arr: string[];

  // // タプル型
  // let arr: [string, string, number];

  // arr = ['ああ', 'asd', 123];

  // 型エイリアス(別名)

  // 型の絞り込み
  type Gu = {
    hand: 'ぐー';
    a: string;
  };

  type tyoki = {
    hand: 'チョキ';
    b: number;
  };

  type paa = {
    hand: 'パー';
    c: boolean;
  };

  const zyanken = (hand: Gu | tyoki | paa) => {
    if (hand.hand === 'ぐー') {
      hand;
    } else if (hand.hand === 'チョキ') {
      hand.b;
    } else if (hand.hand === 'パー') {
      hand.c;
    }
  };

  // nullチェック
  const getValue = (value: string | null): string => {
    if (value === null) {
      return 'nullです';
    }
    return value;
  };

  // readonly
  type Student = {
    readonly name: string;
    age: number;
  };

  const taro: Student = {
    name: 'taro',
    age: 15,
  };

  // ジェネリクス
  // 型の引数

  type GetFirstElement = <T>(array: T[]) => T;

  const getFirstElement: GetFirstElement = (array) => {
    return array[0];
  };

  const a = getFirstElement(['asd', 'asd', 'asd']);
  const b = getFirstElement([2, 2, 3]);
}

const menu = [
  { title: 'ラーメン' },
  { title: 'オムライス' },
  { title: 'パスタ' },
];

const takeLunch = <T>(array: T[]): T => {
  return array[1];
};

takeLunch(menu);
