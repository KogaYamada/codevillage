import React, { useState } from 'react';

const Item = ({ content, deleteTodo, id }) => {
  const [isDone, setIsDone] = useState(false);
  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleChange = () => {
    setIsDone(!isDone);
  };
  // 三項演算子
  // 条件式 ?  trueの時 : falseの時

  return (
    <li>
      <input onChange={handleChange} type="checkbox" />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={handleDeleteClick}>削除</button>
    </li>
  );
};

export default Item;
