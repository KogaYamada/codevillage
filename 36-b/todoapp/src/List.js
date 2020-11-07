import React from 'react';

import Item from './Item';

const List = ({ todos, deleteTodo, handleIsDoneChange }) => {
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
