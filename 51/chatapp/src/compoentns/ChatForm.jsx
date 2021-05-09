import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const ChatForm = ({ addChat }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // テキストフィールドに入力された内容を引数に
    addChat(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='チャットを入力...'
      />
      <Button type='submit' variant='contained' color='primary'>
        送信
      </Button>
    </form>
  );
};

export default ChatForm;

// presentational component
// 見た目だけ作成する
// ロジック(処理)は持たない

// container component
// ロジックを持ってpresentational componentに対してデータを渡す

// テスト

// 単体テスト(unit test)

// 結合テスト(integration test)

// E2Eテスト(end to end)
