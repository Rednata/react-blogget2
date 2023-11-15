import { useEffect } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteToken } from '../store/tokenReducer';
import {
  authLogout,
  authRequest,
  authRequestError,
  authRequestSuccess
} from '../store/auth/authAction';

export const useAuth = () => {
  // const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const clearAuth = () => dispatch(authLogout());
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (!token) return;

    dispatch(authRequest());

    // try {
    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(({ data: { name, icon_img: iconImg } }) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = { name, img };
        // setAuth(data);
        dispatch(authRequestSuccess(data));
      })
      .catch(error => {
        console.log(error);
        dispatch(deleteToken);
        // setAuth({});
        dispatch(authRequestError(error.toString()));
      });
  }, [token]);

  return [auth, clearAuth];
};
