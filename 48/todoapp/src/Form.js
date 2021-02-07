import { useState } from 'react';

// inputの内容をreactで管理する(state)
// 送信ボタンが押されたらinputの中身をtodosに追加する
// form送信時の再読み込みをキャンセル

// formが送信された時に、todosにtextの内容を追加する

// 1. 送信後に入力欄を空にする
// 2. 入力欄が空の状態では送信できないようにする(if文)

const Form = ({ addTodo }) => {
  // 入力欄の値 === textの値
  const [text, setText] = useState('');

  // formが送信された時の関数
  const handleSubmit = (e) => {
    // HTMLタグのデフォルトの挙動をキャンセルする
    e.preventDefault();
    if (text.length === 0) {
      alert('文字を入力してください');
    } else {
      // todosにtextの内容を追加
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button disabled={text.length === 0}>送信</button>
    </form>
  );
};

export default Form;
