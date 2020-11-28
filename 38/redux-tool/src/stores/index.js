import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import TodoReducer from './todo';

const reducer = combineReducers({
  todos: TodoReducer,
});

const store = configureStore({ reducer });

export default store;
