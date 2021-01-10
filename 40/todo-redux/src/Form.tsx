import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './stores/todo';

const Form: FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    dispatch(addTodo(text));
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>送信</button>
    </form>
  );
};

export default Form;
