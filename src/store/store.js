import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

//create redux store
const store = createStore(reducer, applyMiddleware(thunk));


const initialState = {
  movies: [],
}

//create action
function action(type, payload) {
  return { type, payload };
}

//create thunk
function thunk(dispatch) {
  return function (next) {
    /*return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    };*/
  };
}

//create reducer
function reducer(state = [], action) {
  
  switch (action.type) {
    case 'ADD_SORTED_MOVIES':
      return { ...state, movies:  action.payload };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) };
    default:
      return state;
  }
}