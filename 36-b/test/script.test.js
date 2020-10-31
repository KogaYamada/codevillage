// ３つの引数に取った数の合計値を求める関数
const sum = (a, b, c) => a + b + c;

const num = 10;

const add2 = (n) => n + num;

/* 副作用
 - 日付 (new Date())
 - 外部API(何処かからデータを取得する場合(youtube, twitterなど))
 - Math.Random (毎回ランダムな数字が出る)

 => 引数にする(関数の中で副作用のある処理を呼ばない)
*/
/*
テストのしやすい関数 => 良い関数
 - 入力に対して毎回同じ出力がある(副作用がない関数)
    - 同じ引数を入れると返り値は毎回同じになる
    - 関数の出力が変更される要因が引数以外にない

テストのしにくい関数 => 悪い関数
 - 入力に対して毎回同じ出力がある(副作用がある関数)
    - 同じ引数を入れると返り値は毎回同じになラナイ
    - 関数の出力が変更される要因が引数以外にある
 */
describe('sum関数のテスト', () => {
  test('1 + 2 + 3が　6になる', () => {
    expect(sum(1, 2, 3)).toEqual(6);
  });
  test('1 + 2 + 1が　4になる', () => {
    expect(sum(1, 2, 1)).toEqual(4);
  });
});

// describe('add2関数のテスト', () => {
//   test('引数に3を取って５がかえる', () => {
//     expect(add2(3)).toEqual(5);
//   });
// });

// ここから fizzbuzz
// 3の倍数ならfizzが返る。
// ５の倍数ならbuzzが返る。
// 3と５の倍数ならfizzbuzzがかえる
// それ以外では数字が返る
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

describe('fizzbuzz', () => {
  test('num = 15でfizzbuzzが返る', () => {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('num = 6でfizzが返る', () => {
    expect(fizzBuzz(6)).toEqual('fizz');
  });
  test('num = 10でbuzzが返る', () => {
    expect(fizzBuzz(10)).toEqual('buzz');
  });
  test('num = 8で8が返る', () => {
    expect(fizzBuzz(8)).toEqual(8);
  });
});
