import React from 'react';

const List = ({ todos }) => {
  // リストされているものには「一意なkey(ユニークなキー)」が必要
  return (
    <React.Fragment>
      <h2>やることリスト</h2>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.content}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
