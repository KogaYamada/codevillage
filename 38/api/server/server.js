const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// http://localhost:{ポート番号}/ にGETリクエストを送ると{ user: 'koga' }が返却される
app.get('/', (request, response) => {
  response.json({ user: 'koga' });
});

// ポート8000でザーバーを起動
app.listen(8000, () => {
  console.log('server listening on port 8000...');
});
