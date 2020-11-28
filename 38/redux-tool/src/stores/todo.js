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
});

export default slice.reducer;
