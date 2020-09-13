import React from 'react';

const List = ({ todos }) => {
  // map関数: jsの構文
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.content}</li>;
      })}
    </ul>
  );
};

export default List;
