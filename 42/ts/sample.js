const calcPrice = (a, b) => {
  return a + b;
};

const resultA = calcPrice(100, 200);
// -> 300
const resultB = calcPrice('100', '200');
// -> "100200"
