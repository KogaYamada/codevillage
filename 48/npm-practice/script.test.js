const add2 = require('./script');

describe('add2のテスト', () => {
  test('引数に2を渡すと4がreturnされる', () => {
    expect(add2(2)).toBe(4);
  });
  test('引数に-2を渡すと0がreturnされる', () => {
    expect(add2(-2)).toBe(0);
  });
  test('引数に文字列が入るとnullがreturnされる', () => {
    expect(add2('文字だよ')).toBe(null);
  });
});
