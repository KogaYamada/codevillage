// 三項演算子
// 式 ? trueの時 : falseの時

// 次回:削除機能から

const Item = ({ content, deleteTodo, id, isDone, toggleIsDone }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => toggleIsDone(id)}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={() => deleteTodo(id)}>削除</button>
    </li>
  );
};

export default Item;

// Itemコンポーネントで参照するIsDoneの状態をAppから受け取る
// isDoneを変更するための関数をAppから受け取る
