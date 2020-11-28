import React, { FC, useState } from 'react';
import List from './List';

import { Todo } from './types';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { content: '掃除をする', id: '1', isDone: false },
    { content: '洗濯をする', id: '2', isDone: false },
    { content: '運動をする', id: '3', isDone: false },
  ]);

  return (
    <>
      <List todos={todos} />
    </>
  );
};

export default App;
