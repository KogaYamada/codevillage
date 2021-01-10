import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './stores/todo';

type Props = {
  content: string;
  id: string;
  isDone: boolean;
};

const Item: FC<Props> = ({ content, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input type='checkbox' />
      {content}
      <button onClick={() => dispatch(deleteTodo(id))}>削除</button>
    </li>
  );
};

export default Item;
