import { VFC, useState } from 'react';
import { Todo } from './types';
import List from './components/List';
import Form from './components/Form';
import { randomId } from './utils/randomId';

const App: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { content: '掃除', id: randomId(), isDone: false },
  ]);

  const addTodo = (task: string): void => {
    if (task.trim().length === 0) return alert('文字を入力してください');
    setTodos([...todos, { content: task, id: randomId(), isDone: false }]);
  };

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <Form onFormSubmit={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
