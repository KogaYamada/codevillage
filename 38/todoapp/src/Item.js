import React, { useState } from 'react';

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);
  const handleDelteClick = () => {
    deleteTodo(id);
  };
  const handleChange = () => {
    setIsDone(!isDone);
  };
  // 条件式 ? true : false
  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={handleDelteClick}>削除</button>
    </li>
  );
};

export default Item;
