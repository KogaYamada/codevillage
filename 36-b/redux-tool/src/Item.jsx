import { useDispatch } from 'react-redux';
import { deleteTodo, toggleIsDone } from './stores/todos';

const Item = ({ todo }) => {
  const dispach = useDispatch();
  // todoを削除する関数
  const handleDelete = (id) => {
    dispach(deleteTodo(id)); // 課題
  };

  const handleCheck = (id) => {
    dispach(toggleIsDone(id));
  };

  return (
    <li
      key={todo.id}
      style={{ backgroundColor: todo.isDone ? '#000' : '#fff' }}
    >
      <input
        defaultChecked={todo.isDone}
        type='checkbox'
        onChange={() => handleCheck(todo.id)}
      />
      <span>{todo.content}</span>
      <button onClick={() => handleDelete(todo.id)}>削除</button>
    </li>
  );
};

export default Item;
