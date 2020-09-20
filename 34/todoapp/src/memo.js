const colors1 = ['red', 'blue'];
const colors2 = ['red', 'blue'];

colors1.push('yellow'); // 元の配列を破壊する

[...colors2, 'yellow']; // 元の配列を元に新しい配列を生成する

console.log(colors2);

// push, spliceなど元の配列を破壊するメソッド
// => 破壊的メソッド
// - やめとこう
// 元々値が入っている配列に対しては使わない
// Reactのstateを変更しない
// - いいよ
// 空の配列を作ってループ処理で追加していく時
const arr = [];

colors1.forEach((color, index) => {
  arr.push(`選択した色:${color[index]}`);
});

// スプレッド構文などの元の配列を破壊しないメソッド
// => 非破壊的メソッド
