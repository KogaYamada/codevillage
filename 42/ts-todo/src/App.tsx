import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';
// npm i nanoid
// yarn add nanoid

export type Todo = {
  content: string;
  id: string;
  isDone: boolean;
};

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      content: '掃除をする',
      id: nanoid(),
      isDone: false,
    },
    {
      content: '洗濯をする',
      id: nanoid(),
      isDone: false,
    },
  ]);

  const addTodo = (text: string): void => {
    setTodos([...todos, { content: text, id: nanoid(), isDone: false }]);
  };
  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // mapの返り値はTodoの型でないといけない
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };
  return (
    <>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
