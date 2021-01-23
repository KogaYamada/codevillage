// JavaScriptは全ての値がtruthyな値, falsyな値に分類される
// truthyな値 -> 評価されるとtrueになる値
// - falsyな値以外の値
// falsyな値 -> 評価されるとfalseになる値
// - 0, "", false, null, undefined, NaN(Not a Number)
// const value = NaN;
// if (value) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(value);

// const result = 'hello' / 3;
// console.log(result);

// swtch文(条件分岐)
/* 基本構文
swtch(値) {
    case 値:
        処理
        break
    case 値:
        処理
        break
    default:
        処理
        break
}
*/
// const number = 0;
// switch (number) {
//   case 0:
//     console.log('0です');
//     break;
//   case 1:
//     console.log('1です');
//     break;
//   case 2:
//     console.log('2です');
//     break;
//   default:
//     console.log('その他です');
// }

// 繰り返し文(ループ)
// for文
/* 基本構文
for(初期化処理; 条件式; 更新処理) {
    条件式がtrueの間繰り返される処理
}
*/

// for (let i = 0; i < 5; i = i + 1) {
//   console.log(`for文のループです。i=${i}`);
// }

// ループ処理は配列と相性●
// const colors = ['red', 'blue', 'green'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(`${i + 1}週目:i=${i}`);
//   console.log(colors[i]);
// }

// while文
/* 基本構文
while(条件式) {
    処理
}
*/
// let i = 0;

// while (i < 5) {
//   console.log(`while文のループです。i=${i}`);
//   i++; //ループから抜ける処理が必要
// }

// 関数
// - 処理をひとまとまりにしたもの
// - 値(引数)を受け取って値(返り値)を返すもの

/* 定義方法
1. 関数宣言
    function 関数名(引数) {
        処理
        return 返り値
    }
2. 関数式
    const 関数名 = function(引数) {
        処理
        return 返り値
    }
3. アロー関数:新しい方法
    const 関数名 = (引数) => {
        処理
        return 返り値
    }
- アロー関数の省略記法
  - 引数が1つの場合、()が省略できる
  - 処理が返り値のみの場合、{}とreturnが省略できる

- 実行方法
関数名(引数)
*/

// function add2(n) {
//   const result = n + 2;
//   return result;
// }
// const resultA = add2(3);
// console.log(resultA);

function is20(age) {
  if (age >= 20) {
    return '成人済み';
  } else {
    return '未成年';
  }
}
const taroAge = 23;
const jiroAge = 18;
const hanakoAge = 20;

// console.log(is20(taroAge));
// console.log(is20(jiroAge));
// console.log(is20(hanakoAge));
/* 関数式
 const 関数名 = function(引数) {
        処理
        return 返り値
    }
*/
// const add2 = function (n) {
//   return n + 2;
// };

// const result = add2(2);
// console.log(result);

/* アロー関数
const 関数名 = (引数) => {
        処理
        return 返り値
    }
*/
// const add3 = (n) => {
//   return n + 3;
// };

// const result = add3(4);
// 複数の引数をとる場合

// 3つの数字の合計を求める関数
// const sum = (a, b, c) => {
//   return a + b + c;
// };
//                 a   b   c
// console.log(sum(10, 20, 30));

// - アロー関数の省略記法
//   - 引数が1つの場合、()が省略できる
//   - 処理が返り値のみの場合、{}とreturnが省略できる

// const add4 = n => n + 4

// console.log(add4(10))

// スコープ
// name space:名前空間
// -> 変数名や引数を参照できる空間
// -> {}があるとスコープが生成される
// ルール
// - 外側のスコープから内側のスコープへの変数の参照はできない
// - 内側から外側のスコープへの変数の参照はできる

// スコープチェーン
const a = 1;
{
  const a = 2;
  {
    const a = 3;
    {
      const b = 4;
      {
        // console.log(a)
      }
    }
  }
}
// function funcA(num) {
//   function funcB() {
//     console.log(num)
//   }
//   funcB(20)
// }
// funcA(10)

// const number = 10
// {
//   console.log(number)
//   {
//     const a = 20
//   }
//   console.log(a)
// }

// if(number < 20) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// 無名関数: 名前のない関数
// 関数の本体
// function () {}
// () => {}


// 即時関数: 定義してすぐ実行する関数
// (function() {
//   const a = "hello"
//   console.log(a)
// })()

// JSON: Javascript Object Notation
// データ形式
// JavaScriptのオブジェクトとの違い
// 1. キーはダブルクォーテーションを用いて囲う
// 2. 文字列もダブルクォーテーションで囲う
// 3. データ形式なので処理は書けない
// 4. 最後の要素にはコンマ(,)はつけない
// 5. 使えるデータは
//    - 文字列, 数字, 真偽値, null

// 次回JSONのコード解析 + 変換

// 今日覚えて欲しいこと
// 1. 関数
//  - 引数、返り値
//  - スコープ
//  - 関数の定義方法
// 2. 制御構文
// 3. JSON