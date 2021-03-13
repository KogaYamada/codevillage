import { useState } from 'react';

// 1. 送信時にinputに値が残ったままになる問題
// textの値 === inputの値
// 2. inputの値が空でも送信できてしまう問題

const Form = ({ addTodo }) => {
  // inputの入力された内容を表すstate
  const [text, setText] = useState('');

  // formが送信された時に実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='タスクを入力してください'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={text.trim() === ''}>追加</button>
    </form>
  );
};

export default Form;
