import { useState } from 'react';

// 送信ボタンが押されたタイミング(formが送信されたタイミング)
// 入力された内容をaddTodoの引数に入れて実行

// 入力された内容を(jsが)知る方法
const Form = ({ addTodo }) => {
  // 入力されている内容
  const [text, setText] = useState('');
  // formが送信されたタイミングで実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert('文字を入力してください');
      return;
    }
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='やることを入力'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>送信</button>
    </form>
  );
};

export default Form;
