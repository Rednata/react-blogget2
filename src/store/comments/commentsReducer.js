import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS } from './commentsAction';

const initialState = {
  comments: [],
  loading: false,
  error: '',
  post: {},
  status: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        status: 'loading',
      };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
        post: action.post,
        status: 'loaded',
      };

    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };

    default:
      return state;
  }
};
