import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialTodos = [
  { content: '掃除をする', id: nanoid(), isDone: false },
  { content: '洗濯をする', id: nanoid(), isDone: false },
  { content: '運動をする', id: nanoid(), isDone: false },
];

const slice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (todos, action) => {
      // 新しいtodosがreturnされる
      return [
        ...todos,
        { content: action.payload, id: nanoid(), isDone: false },
      ];
    },
    deleteTodo: (todos, action) => {
      return todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    toggleTodo: (todos, action) => {
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = slice.actions;

export default slice.reducer;
