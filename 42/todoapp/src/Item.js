import React, { useState } from 'react';

const Item = ({ todo, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li>
      <input type='checkbox' onChange={() => setIsDone(!isDone)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        削除
      </button>
    </li>
  );
};

export default Item;
