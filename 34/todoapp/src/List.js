import React from 'react';

import Item from './Item';

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        console.log(todo);
        return (
          <Item
            deleteTodo={deleteTodo}
            id={todo.id}
            key={todo.id}
            content={todo.content}
          />
        );
      })}
    </ul>
  );
};

export default List;
