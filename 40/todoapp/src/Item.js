import React, { useState } from 'react';

const Item = ({ content, deleteTodo, id }) => {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    deleteTodo(id);
  };
  console.log(isDone, content);
  // 三項演算子
  // 条件式 ? true : false
  return (
    <li>
      <input type="checkbox" onChange={() => setIsDone(!isDone)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={handleClick} type="button">
        削除
      </button>
    </li>
  );
};

export default Item;
