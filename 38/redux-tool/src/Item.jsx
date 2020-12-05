import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './stores/todo';

const Item = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input type='checkbox' onChange={() => dispatch(toggleTodo(todo.id))} />
      <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>削除</button>
    </li>
  );
};

export default Item;
