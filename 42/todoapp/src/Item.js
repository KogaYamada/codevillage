import React, { useState } from 'react';

const Item = ({ todo }) => {
  const [isDone, setIsDone] = useState(false);
  // 次回: ３項演算子の説明から
  return (
    <li>
      <input type='checkbox' onChange={() => setIsDone(!isDone)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button>削除</button>
    </li>
  );
};

export default Item;
