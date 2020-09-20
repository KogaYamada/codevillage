import React, { useState } from 'react';

const Item = ({ content, deleteTodo, id }) => {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    setIsDone(!isDone);
  };
  return (
    <li>
      <p>
        <input onChange={handleClick} type="checkbox" />
        <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
          {content}
        </span>
        <button
          onClick={() => {
            deleteTodo(id);
          }}>
          削除
        </button>
      </p>
    </li>
  );
};

export default Item;
