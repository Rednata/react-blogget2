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
  data: data.children,
});

const postRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  dispatch(postRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then(({ data: { data } }) => {
      dispatch(postRequestSuccess(data));
    })
    .catch(error => {
      dispatch(postRequestError(error));
    });
};
