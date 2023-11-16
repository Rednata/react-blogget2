import { URL_API } from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST
});

export const commentsRequestSuccess = ([post, comments]) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  post,
  comments,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  dispatch(commentsRequest());
  fetch(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(([postInfo, commentsInfo]) => {
      const post = postInfo.data.children[0].data;
      const comments = commentsInfo.data.children;
      dispatch(commentsRequestSuccess([post, comments]));
    })
    .catch(error => {
      dispatch(commentsRequestError(error));
    });
};

