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
    isDone: true,
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
      // action.payloadに欲しいもの -> 削除ボタンを押した要素のid
      const test = (todo) => todo.id !== action.payload;

      return state.filter(test); // 課題
    },
    toggleIsDone: (state, action) => {
      // action.payloadはidとして扱う
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});

// reducerをエクスポート
export default slice.reducer;

export const { addTodo, deleteTodo, toggleIsDone } = slice.actions;
