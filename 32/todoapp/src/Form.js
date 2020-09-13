import React, { useState } from 'react';

const Form = () => {
  const [count, setCount] = useState(0);
  // const [状態(state),状態を変更する関数] = useState(初期値)

  console.log('描写されました');
  // 状態(state)とは
  // - reactの中で管理する値(変数みたいなやつ)
  // - set関数を用いて状態(state)が変わるたびに画面が再描写される
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h4>今の数字:{count}</h4>
      <button onClick={addCount}>count up</button>
    </>
  );
};

export default Form;

/* todo
ユーザーの入力を受け付ける。
入力値を状態として管理する。
ユーザーの入力値を検証する。
入力の確定を受け付ける。
*/
