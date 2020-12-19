const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// エンドポイント "/"にGETリクエストされた時 "helloworld!!"を返す
app.get('/', (req, res) => {
  res.send('hello world!!!!!!!!!!!!!');
});

app.get('/user', (req, res) => {
  if (req.headers.apikey === 'abc') {
    res.status(200).json({ username: 'koga', age: 10 });
  } else {
    res
      .status(401)
      .json({ errorCode: 401, message: 'API keyが間違っています' });
  }
});

app.listen(8000, () => {
  console.log('server listening on port 8000...');
});

// http://localhost:8000
