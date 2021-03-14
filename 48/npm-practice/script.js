const add2 = (x) => {
  if (typeof x !== 'number') {
    return null;
  }
  return x + 2;
};

module.exports = add2;
