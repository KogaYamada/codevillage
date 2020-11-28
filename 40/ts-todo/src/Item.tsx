import React, { FC } from 'react';
import { Todo } from './types';

type Props = {
  todo: Todo;
};

const Item: FC<Props> = ({ todo }) => {
  return <li>{todo.content}</li>;
};

export default Item;
