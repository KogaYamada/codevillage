import React, { FC } from 'react';
import { Todo } from './types';

type Props = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const Item: FC<Props> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li>
      <input type='checkbox' onChange={() => toggleTodo(todo.id)} />
      <span style={{ color: todo.isDone ? '#FFF' : '#000' }}>
        {todo.content}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>削除</button>
    </li>
  );
};

export default Item;
