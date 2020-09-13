// 条件分岐 if文
/* -- 基本構文 --
if(条件式) {
  条件式が(正しい)trueの時処理
} else {
  条件式が正しくない(false)の時の処理
}

 -- else if文 --
 if(条件式A) {
   条件式Aが正しい(true)時の処理
 } else if(条件式B) {
   条件式Bが正しい(true)時の処理
 } else {
   全ての条件式がfalseの時
 }
*/

/*
let age = 19;
if (age < 20) {
  console.log('未成年です');
} else {
  console.log('成人済みです');
}
let score = 80;
if (score > 80) {
  console.log('よくできました');
} else if (score > 60) {
  console.log('まあまあです');
} else {
  console.log('がんばろう');
}
*/
/* 比較演算子
 a > b  aはbよりも大きい
 a < b  aはbよりも小さい
 a >= b  aはb以上である
 a <= b  aはb以下である
 a === b aとbは等しい "1" === 1 // false
 a == b aとbは等しい  "1" == 1 // true
 a !== b aとbは等しくない
 && 左右の条件式の両方が正しい時にtrue
 || 左右の条件式のどちらかが正しい時true

評価: 条件式(if, for,...)の中でどうにかtrueかfalseに分けること

  truesyな値とfalsyな値値
  truesy: 評価されるとtrueになる値
    falsyな値以外の全て
  falsy: 評価されるとfalseになる値 
    0, "", false, null, undefined, NaN(not a number)
    const input = '';
    if (input) {
      console.log('OKです');
    } else {
      console.log('Eメールアドレスを入力してください');
    }
*/

/* for文(ループ)
 -- 基本構文 --
 for(初期化; 条件式; 更新処理) {
   処理
 }
 
 for (let i = 0; i < 5; i++) {
   console.log(`${i + 1}回目の処理です`);
  }
*/

/* while文(ループ)
　-- 基本構文 --
  while(条件式) {
    処理
    必ずループから抜けるための処理を書く必要がある
  }
  let i = 0;
  while (i < 5) {
    console.log(`while文の${i + 1}回目の処理です`);
    i++;
  }
*/

/* forEach文(配列限定のループ)
  -- 基本構文 --
  配列.forEach((要素) =>{
    処理
  })

const array = [11, 21, 31, 41, 51];

array.forEach((num) => {
  console.log(num);
});
*/

// 関数
// 一連の処理をまとめたもの
/* 定義の仕方
 - 1 -
function 関数名(引数) {
  処理
}
 - 2 -
const 関数名 = function(引数){
  処理
}
 - 3 - アロー関数
const 関数名 = (引数) => {
  処理
}
*/

// DRYの原則: Don't repeat yourself
// コピペするような処理はDRYに反している
// 引数の注意点 順番は絶対!!

// 三角形の面積を求める
function getTriangleArea(width, height) {
  const area = (width * height) / 2;
  return area;
}

// 関数:返り値,戻り値,return
// 関数の処理結果を呼び出し元に返す

// 5つの三角形の面積を教えてもらう
const area1 = getTriangleArea(13, 5);

