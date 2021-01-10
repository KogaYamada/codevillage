import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
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
];

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (todos, action) => {
      return [
        ...todos,
        { content: action.payload, id: nanoid(), isDone: false },
      ];
    },
    deleteTodo: (todos, action) => {
      return todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = slice.actions;

export default slice.reducer;
