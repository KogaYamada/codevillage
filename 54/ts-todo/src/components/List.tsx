import { VFC } from 'react';
import Item from './Item';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const List: VFC<Props> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          isDone={todo.isDone}
          content={todo.content}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default List;
