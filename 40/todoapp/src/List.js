import React from 'react';

const List = ({ todos }) => {
  return (
    <React.Fragment>
      <h3>やることリスト</h3>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.content}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
