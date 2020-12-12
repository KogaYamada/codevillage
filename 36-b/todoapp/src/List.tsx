import React, { FC } from 'react';

import Item from './Item';
import { Todo } from './App';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  handleIsDoneChange: (id: string) => void;
};

const List: FC<Props> = ({ todos, deleteTodo, handleIsDoneChange }) => {
  return (
    <React.Fragment>
      <p>やることリスト</p>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
              handleChange={handleIsDoneChange}
              isDone={todo.isDone}
              deleteTodo={deleteTodo}
              key={todo.id}
              id={todo.id}
              content={todo.content}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
