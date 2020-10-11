import React from 'react';

import Item from "./Item"

const List = ({ todos, deleteTodo }) => {
  return (
    <React.Fragment>
      <h3>やることリスト</h3>
      <ul>
        {todos.map((todo) => {
          return <Item
                  key={ todo.id }
                  content={ todo.content }
                  deleteTodo={deleteTodo}
                  id={todo.id}
                />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
