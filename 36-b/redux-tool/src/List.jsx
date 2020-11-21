import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './stores/todos';
const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispach = useDispatch();

  // todoを削除する関数
  const handleDelete = (id) => {
    dispach(); // 課題
  };
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.content}
            <button onClick={handleDelete}>削除</button>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
