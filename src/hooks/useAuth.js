import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authLogout, authRequestAsync,
} from '../store/auth/authAction';

export const useAuth = () => {
  // const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const clearAuth = () => dispatch(authLogout());
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);

  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  return [auth, loading, clearAuth];
};
