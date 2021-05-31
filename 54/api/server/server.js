const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// http://localhost:3000 に対してGETリクエストされた時の処理
app.get('/', (req, res) => {
  res.send('Hello');
});

// http://localhost:3000/user に対してGETリクエストされた時の処理
app.get('/user', (req, res) => {
  // jsonを返す
  console.log(req.query);
  // DBからID === 123の人を取得
  res.status(200).json({ user: 'koga' });
});

app.listen(3000, () => {
  console.log('サーバー起動 port 3000');
});

// HTTPメソッド
// GET: データの取得
// -> firebaseでは get()
// POST: データを作成
// -> firebaseでは add() set()
// PUT: データの更新(上書き)
// -> firebaseでは set()
// PATCH: データの更新(部分更新)
// -> firebaseでは update()
// DELETE: データの削除
// -> firebaseではdelete()

// HTTP(Hyper Text Transfer Protocol) -> 通信プロトコル
// HTTPS(Hyper Text Transfer Protocol Secure) -> 通信プロトコル
// TCP/IPモデル
/* HTTP でログイン

メソッド GET
宛先 -> https://youtube.com
email -> koga@cv.com
password -> 123456

HTTPS でログイン

宛先 ->24tegowhjgnw
email -> kafalknfgoq3f9q
password -> q2g30iejf0peghiq

*/

// 1
// 型を知る
// string, number, boolean, null

// 2
// TSがどう考えているか知る
// 用意された型を理解、使える

// 3
// 自分で複雑な型を表現できる
