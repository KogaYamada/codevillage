{
  // tsの基礎的な型

  // -- プリミティブ型 --
  // 数字(number)    123   -1   0
  // 文字列(string)   "1000" "hello"
  // 真偽値(boolean)     true  false
  // undefined   undefined
  // null     null

  // -- リテラル型 --
  let age: 20;
  //   let name: 'taro';
  let t: true;

  // ユニオン  |

  let name: 'taro' | 'jiro';

  // tsには基礎的な仕様として「型推論」と「型注釈」
  const num = 123;

  let arr: [string, string, number];

  arr = ['asd', 'asd', 123];
}
