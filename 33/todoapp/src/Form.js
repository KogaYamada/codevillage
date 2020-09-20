import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーション(検証):validation
    if (text.trim().length <= 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text);
    // 2. inputの値を空にする
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleTextChange} />
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
