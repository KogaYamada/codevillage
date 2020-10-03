import React from 'react';

import Item from './Item';

const List = ({ todos, deleteTodo }) => {
  return (
    <React.Fragment>
      <p>やることリスト</p>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
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
