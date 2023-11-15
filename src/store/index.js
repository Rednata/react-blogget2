/* eslint-disable no-unused-vars */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { commentReducer } from './commentReducer';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducerAuth';

const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,
  comment: commentReducer,
});

const logger = (store) => (next) => (action) => {
  console.log('action: ', action);
  next(action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
