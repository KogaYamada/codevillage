import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './stores/todos';

const Form = () => {
  const dispach = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(addTodo(text));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>送信</button>
    </form>
  );
};

export default Form;
