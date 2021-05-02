const makeValue = () => {
  return [1, 2, 3, 4, 5];
};

const value1 = makeValue();
const value2 = value1;

value2.push(123);

console.log(value1 === value2); // ture? false?
console.log(value1);
console.log(value2);
