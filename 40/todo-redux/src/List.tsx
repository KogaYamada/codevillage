import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './stores';

import Item from './Item';

const List: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            content={todo.content}
            id={todo.id}
            isDone={todo.isDone}
          />
        );
      })}
    </ul>
  );
};

export default List;
