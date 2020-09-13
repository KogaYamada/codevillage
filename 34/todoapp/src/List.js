import React from 'react';

const List = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.content}</li>;
      })}
    </ul>
  );
};

export default List;
