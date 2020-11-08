import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState(''); // 初期値は空の文字列
  // フォームが送信された時の関数
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      alert('文字を入力して下さい');
      return;
    }
    addTodo(text);
    setText('');
  };
  // チャレンジ
  // 1. todo登録されたらinputの中身を空にする
  // => 入力内容 === text
  // 2. inputが空の状態ではtodoに追加できないようにする
  // => if文を使おう
  // => 文字数は「length」プロパティを使う ex) "aiueo".length === 5

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button type='submit'>登録</button>
    </form>
  );
};

export default Form;
