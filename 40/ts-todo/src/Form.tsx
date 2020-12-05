import React, { FC, useState } from 'react';

type Props = {
  addTodo: (text: string) => void;
};

const Form: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  // React.FormEvent:Reactが提供している型の情報
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>送信</button>
    </form>
  );
};

export default Form;
