import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const [auth, setAuth] = useState({});

  const clearAuth = () => setAuth({});

  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;

    try {
      fetch(`${URL_API}/api/v1/me`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      }).then(response => {
        if (response.status === 401) {
          localStorage.removeItem('bearer');
        }
        return response.json();
      })
        .then(({ name, icon_img: iconImg }) => {
          const img = iconImg.replace(/\?.*$/, '');
          setAuth({ name, img });
          console.log('auth', auth);
        });
    } catch (error) {
      console.log(error);
      // delToken();
      setAuth({});
    }
  }, [token]);
  return [auth, clearAuth];
};
