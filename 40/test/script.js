const add2 = (n) => n + 2;

// バリデーション関数
// 入力内容が空ならエラーを出す

const validation = (test) => {
  const errors = [];
  if (test.length === 0) {
    errors.push('文字を入力してください');
  }
  if (test.length > 10) {
    errors.push('文字は10文字以下にしてください');
  }
  return errors;
};

module.exports = { add2, validation };
