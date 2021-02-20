import { useState } from 'react';

// 三項演算子
// 条件式 ? trueの時の式 : falseの時の式

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <li>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={() => deleteTodo(id)}>削除</button>
    </li>
  );
};

export default Item;
