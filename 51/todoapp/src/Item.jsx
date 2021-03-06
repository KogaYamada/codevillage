import { useState } from 'react';

const Item = ({ content }) => {
  const [isDone, setIsDone] = useState(false);

  // 三項演算子
  // 条件式 ? trueの時 : falseの時
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
      <button>削除</button>
    </li>
  );
};

export default Item;
