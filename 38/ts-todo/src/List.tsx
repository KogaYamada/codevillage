import React, { FC } from 'react';

type Props = {
  todos: { content: string }[];
};

const List: FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return <li>{todo.content}</li>;
      })}
    </>
  );
};

export default List;
