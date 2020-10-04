import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>TODOを追加</label>
      <input value={text} onChange={handleTextChange} />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
