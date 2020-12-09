import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import List from './List';
import Form from './Form';

import { Todo } from './types';

type Add2 = (n: number) => string;

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { content: '掃除をする', id: nanoid(), isDone: false },
    { content: '洗濯をする', id: nanoid(), isDone: false },
    { content: '運動をする', id: nanoid(), isDone: false },
  ]);

  // void : 関数の返り値がない(undefined)
  const addTodo = (text: string): void => {
    setTodos([...todos, { content: text, id: nanoid(), isDone: false }]);
  };

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string): void => {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });

    setTodos(toggledTodos);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
