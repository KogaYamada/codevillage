import { useState } from 'react';

// 三項演算子
// 式 ? trueの時 : falseの時

// 次回:削除機能から

const Item = ({ content, deleteTodo, id }) => {
  // チェックボックスのチェック状態
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
