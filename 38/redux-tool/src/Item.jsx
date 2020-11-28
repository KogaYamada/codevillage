const Item = ({ todo }) => {
  return (
    <li>
      <span>{todo.content}</span>
      <button>削除</button>
    </li>
  );
};

export default Item;
