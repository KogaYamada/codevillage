const add2 = require('./script');

describe('add2のテスト', () => {
  test('引数1で3がreturnされる', () => {
    expect(add2(1)).toBe(3);
  });
  test('引数-10で-8がreturnされる', () => {
    expect(add2(-10)).toBe(-8);
  });
  test('引数"1"でnullがreturnされる', () => {
    expect(add2('1')).toBeNull();
  });
  test('引数trueでnullがreturnされる', () => {
    expect(add2(true)).toBeNull();
  });
  test('引数falseでnullがreturnされる', () => {
    expect(add2(false)).toBeNull();
  });
  test('引数undefinedでnullがreturnされる', () => {
    expect(add2(undefined)).toBeNull();
  });
  test('引数nullでnullがreturnされる', () => {
    expect(add2(null)).toBeNull();
  });
});
