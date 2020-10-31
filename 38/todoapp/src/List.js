import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo, handleIsDoneChange }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
            content={todo.content}
            handleIsDoneChange={handleIsDoneChange}
            isDone={todo.isDone}
          />
        );
      })}
    </ul>
  );
};

export default List;
