import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';

export const useAuth = (token) => {
  const [auth, setAuth] = useState({});

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
      setAuth({});
    }
  }, [token]);
  return [auth];
};
