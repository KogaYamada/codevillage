import React, { useState } from 'react';

const Form = () => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleTextChange} />
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
