import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './stores/todo';

const Form = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button type='submit'>送信</button>
    </form>
  );
};

export default Form;
