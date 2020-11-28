import React, { FC } from 'react';
import { Todo } from './types';

import Item from './Item';

type Props = {
  todos: Todo[];
};

const List: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default List;
