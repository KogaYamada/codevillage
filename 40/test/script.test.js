const { add2, validation } = require('./script');

describe('add2のテスト', () => {
  test('成功するテスト', () => {
    expect(add2(2)).toBe(4);
  });

  test('失敗するテスト', () => {
    expect(add2(2)).toBe(0);
  });
});

describe('validationのテスト', () => {
  test("文字が''の時返り値の配列の要素数が1つになる", () => {
    expect(validation('').length).toBe(1);
  });
  test("文字が''の時返り値の配列の最初の要素に「文字を入力してください」が入る", () => {
    expect(validation('')[0]).toBe('文字を入力してください');
  });

  test("文字が'x'の時返り値の配列の要素数が0個になる", () => {
    expect(validation('x').length).toBe(0);
  });
});

// テストケース

// text

// 0文字 => errors ["文字を入力してください"]
// 1文字 => errors []

// 10文字 => errors []
// 11文字 => errors ["文字は10文字以下にしてください"]
