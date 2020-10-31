import React from 'react';

const Item = ({ content, id, deleteTodo, handleIsDoneChange, isDone }) => {
  const handleDelteClick = () => {
    deleteTodo(id);
  };
  // 条件式 ? true : false
  return (
    <li>
      <input type='checkbox' onChange={() => handleIsDoneChange(id)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={handleDelteClick}>削除</button>
    </li>
  );
};

export default Item;
