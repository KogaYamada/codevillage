import React from 'react';

import Item from './Item';

const List = ({ deleteTodo, todos, changeIsDone }) => {
  // リストされているものには「一意なkey(ユニークなキー)」が必要
  return (
    <React.Fragment>
      <h2>やることリスト</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
              deleteTodo={deleteTodo}
              key={todo.id}
              todo={todo}
              changeIsDone={changeIsDone}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
