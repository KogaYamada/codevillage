import { useState } from 'react';

// inputの入力が空の状態でもTODOのタスクとして追加できてしまう問題の修正。
// タスクを入力して送信した後に入力された内容がそのまま残っているので、送信後入力欄は空にする
const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  // formが送信された時に実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return alert('文字を入力してください');
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='タスクを入力...'
      />
      <button disabled={text.trim() === ''}>送信</button>
    </form>
  );
};

export default Form;
