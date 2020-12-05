import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import List from './List';

export type Todo = {
  content: string;
  id: string;
  isDone: boolean;
};

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { content: '掃除をする', id: nanoid(), isDone: false },
    { content: '洗濯をする', id: nanoid(), isDone: false },
  ]);

  const addTodo = (text: string): void => {
    setTodos([...todos, { content: text, id: nanoid(), isDone: false }]);
  };

  const deleteTodo = (id: string): void => {
    const deletedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodos);
  };

  const toggleIsDone = (id: string) => {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(toggledTodos);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <List toggleIsDone={toggleIsDone} todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;

// 型をつける方法
// 型注釈
// 型推論

// let str: 'グー' | 'チョキ' | 'パー' = 'チョキ'; // リテラル型
