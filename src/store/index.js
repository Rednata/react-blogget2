/* eslint-disable no-unused-vars */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { commentReducer } from './commentReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

const logger = (store) => (next) => (action) => {
  console.log('action: ', action);
  next(action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware))
);
