const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('サーバー起動 port 3000');
});

// TODO: TODOアプリの最終課題の答え合わせ
