import Item from './Item';
import { useSelector } from 'react-redux';

const List = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default List;
