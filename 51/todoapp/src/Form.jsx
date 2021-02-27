import { useState } from 'react';

const Form = () => {
  // inputの入力された内容を表すstate
  const [text, setText] = useState('');

  // formが送信された時に実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='タスクを入力してください'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>追加</button>
    </form>
  );
};

export default Form;
