import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// todos.jsで作成したreducerをtodosReducerとしてインポート
import todosReducer from './todos';

const reducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({ reducer });

export default store;
