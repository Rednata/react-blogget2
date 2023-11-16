import { URL_API } from '../../api/const';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

const postRequest = () => ({
  type: POSTS_REQUEST,
});

const postRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after
});

const postRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().posts.after;

  dispatch(postRequest());

  axios(`${URL_API}/best?limit=5&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then(({ data }) => {
      dispatch(postRequestSuccess(data.data));
    })
    .catch(error => {
      dispatch(postRequestError(error));
    });
};
