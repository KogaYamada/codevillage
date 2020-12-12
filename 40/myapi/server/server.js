const express = require('express');

const app = express();

// エンドポイント "/"にGETリクエストされた時 "helloworld!!"を返す
app.get('/', (req, res) => {
  res.send('hello world!!!!!!!!!!!!!');
});

app.get('/user', (req, res) => {
  res.status(200).json({ username: 'koga', age: 10 });
});

app.listen(8000, () => {
  console.log('server listening on port 8000...');
});

// http://localhost:8000
