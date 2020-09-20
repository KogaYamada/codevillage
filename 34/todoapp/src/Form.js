import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState(''); // 入力された値
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation(検証)
    if (text.trim().length === 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>todoを入力</label>
      <input value={text} onChange={handleChange} type="text" />
      <button type="submit">登録</button>
    </form>
  );
};

export default Form;
