import { useSelector } from 'react-redux';

import Item from './Item';
const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
export default List;

// 10ふんまで休憩
