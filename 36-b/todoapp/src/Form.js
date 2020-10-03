import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // 1. 送信したタイミングで入力している内容を削除する
  // 2. 何も入力されていないときにTodosに追加しない + alertで注意する:validatoin
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleTextChange} />
      <button>送信</button>
    </form>
  );
};

export default Form;
