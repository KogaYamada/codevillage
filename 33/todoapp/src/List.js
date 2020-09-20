import React from 'react';

import Item from './Item';

const List = ({ todos, deleteTodo }) => {
  // map関数: jsの構文
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            deleteTodo={deleteTodo}
            key={todo.id}
            content={todo.content}
            id={todo.id}
          />
        );
      })}
    </ul>
  );
};

export default List;
