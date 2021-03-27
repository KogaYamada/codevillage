import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  // formが送信された時に実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='タスクを入力...'
      />
      <button>送信</button>
    </form>
  );
};

export default Form;
