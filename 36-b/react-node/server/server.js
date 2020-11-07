// node.jsの実行
// node 実行したいファイル名

// import文 comon module形式のファイルインポート
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// エンドポイント「/」にGETリクエストが来た時の処理
app.get('/', (request, response) => {
  response.json({ user: 'koga' });
});

// ポート番号を8000でサーバー起動
app.listen(8000, () => {
  console.log('サーバー起動中... port:8000');
});

// npm start
