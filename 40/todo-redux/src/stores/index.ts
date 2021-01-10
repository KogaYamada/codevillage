import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import todoReducer from './todo';

const reducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({ reducer });

// テンプレートとして覚えても良い
export type RootState = ReturnType<typeof reducer>;

export default store;
