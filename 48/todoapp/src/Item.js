import { useState } from 'react';

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);
  // 三項演算子
  // 式単位で条件分岐ができる
  // 条件式 ? trueの時の式 : falseの時の式
  return (
    <li>
      <input onChange={() => setIsDone(!isDone)} type='checkbox' />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={() => deleteTodo(id)}>削除</button>
    </li>
  );
};

export default Item;
