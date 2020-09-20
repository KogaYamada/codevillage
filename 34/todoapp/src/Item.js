import React, { useState } from 'react';

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);
  const handleChange = () => {
    setIsDone(!isDone);
  };
  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button
        onClick={() => {
          deleteTodo(id);
        }}>
        削除
      </button>
    </li>
  );
};

export default Item;
