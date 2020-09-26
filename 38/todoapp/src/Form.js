import React, { useState } from 'react';

// 入力内容が送信されたらinputの値リセットして欲しい
// 空では送信できないようにする

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      addTodo(text);
      setText('');
    } else {
      alert('文字を入力してください');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleTextChange} />
      <button>送信</button>
    </form>
  );
};

export default Form;
