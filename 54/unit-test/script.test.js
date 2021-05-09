const add2 = require('./script');

describe('add2のテスト', () => {
  test('引数1で3がreturnされる', () => {
    expect(add2(1)).toBe(3);
  });
});
