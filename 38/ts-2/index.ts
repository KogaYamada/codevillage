// ジェネリクス 型の引数

type AA = <T>(msg: T) => T;

const msg: AA = (str) => {
  return str;
};

// 何かの配列を受け取って2つの要素にした配列を返す時

type ArrayTwo = <T>(array: T[]) => T[];

[
  { title: 'asd', name: 'asd' },
  { title: 'asd', name: 'asd' },
];
