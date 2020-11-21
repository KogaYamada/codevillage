import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// 管理するstateの初期値
const INITAL_STATE = [
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
  {
    content: '料理をする',
    id: nanoid(),
    isDone: false,
  },
];

// 管理するstateとその操作をまとめたもの
const slice = createSlice({
  name: 'todos',
  initialState: INITAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        { content: action.payload, id: nanoid(), isDone: false },
      ];
    },
    deleteTodo: (state, action) => {
      // const filterdTodos = state.filter(() => {})
      // return filterdTodos
      return state.filter(() => {}); // 課題
    },
  },
});

// reducerをエクスポート
export default slice.reducer;

export const { addTodo, deleteTodo } = slice.actions;
