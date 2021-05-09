const add2 = require('./script');

describe('add2関数のテスト', () => {
  // 数字の引数
  test('数字の1が引数として渡されると3が返る', () => {
    expect(add2(1)).toBe(3);
  });

  test('数字の10が引数として渡されると12が返る', () => {
    expect(add2(10)).toBe(12);
  });

  test('数字の-10が引数として渡されるとが-8返る', () => {
    expect(add2(10)).toBe(12);
  });

  // 数字以外の引数
  test('文字列helloが引数として渡されるとnullが返る', () => {
    expect(add2('hello')).toBeNull();
  });

  test('trueが引数として渡されるとnullが返る', () => {
    expect(add2(true)).toBeNull();
  });

  test('falseが引数として渡されるとnullが返る', () => {
    expect(add2(false)).toBeNull();
  });

  test('nullが引数として渡されるとnullが返る', () => {
    expect(add2(null)).toBeNull();
  });

  test('undefinedが引数として渡されるとnullが返る', () => {
    expect(add2(undefined)).toBeNull();
  });
});
// 数字を渡した時
//  1 -> 3
// 10 -> 12
// -10 -> -8
// 数字以外を渡した時
// "hello" -> null
// true -> null
// false -> null
// null -> null
// undefined -> null
