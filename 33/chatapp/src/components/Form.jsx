import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core';

const Form = ({ addMessage }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('文字を入力してください');
      return;
    }
    addMessage(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant='outlined'
        size='small'
        placeholder='メッセージを入力'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type='submit' variant='contained' color='secondary'>
        送信
      </Button>
    </form>
  );
};

export default Form;
