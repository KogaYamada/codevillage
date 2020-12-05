import React, { FC } from 'react';
import { Todo } from './types';

import Item from './Item';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const List: FC<Props> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        );
      })}
    </ul>
  );
};

export default List;
