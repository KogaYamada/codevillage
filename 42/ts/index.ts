// typescript -> javascript

// なんでTS?
// - 予期しない(意図しない)挙動を防ぐ

const calcPrice = (a: number, b: number) => {
  return a + b;
};

const resultA = calcPrice(100, 200);
// -> 300

const resultB = calcPrice('100', '200');
// -> なし
