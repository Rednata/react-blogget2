/* eslint-disable max-len */
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text/Text';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import Loader from '../../../UI/Loader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [auth, loading, clearAuth] = useAuth();

  const [showLogout, setShowLogout] = useState(false);

  const getOut = () => {
    setShowLogout(true);
  };

  const logOut = () => {
    // delToken();
    dispatch(deleteToken());
    clearAuth();
  };


  return (
    <div className={style.container}>
      {loading ? (<Loader size='30px'/>
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              alt={`Аватар ${auth.name}`}
              title={auth.name}
            />
          </button>
          {
            showLogout &&
            <button
              className={style.logout}
              onClick={logOut}
            >Выйти
            </button>
          }
        </>
        ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
        )

      // <svg className={style.svg} width="128" height="128" viewBox="0 0 128 128" fill="#CC6633" xmlns="http://www.w3.org/2000/svg">
      //   <path d="M88 48C88 54.3652 85.4714 60.4697 80.9706 64.9706C76.4697 69.4714 70.3652 72 64 72C57.6348 72 51.5303 69.4714 47.0294 64.9706C42.5286 60.4697 40 54.3652 40 48C40 41.6348 42.5286 35.5303 47.0294 31.0294C51.5303 26.5286 57.6348 24 64 24C70.3652 24 76.4697 26.5286 80.9706 31.0294C85.4714 35.5303 88 41.6348 88 48V48Z"/>
      //   <path fillRule="evenodd" clipRule="evenodd" d="M0 64C0 47.0261 6.74284 30.7475 18.7452 18.7452C30.7475 6.74284 47.0261 0 64 0C80.9739 0 97.2525 6.74284 109.255 18.7452C121.257 30.7475 128 47.0261 128 64C128 80.9739 121.257 97.2525 109.255 109.255C97.2525 121.257 80.9739 128 64 128C47.0261 128 30.7475 121.257 18.7452 109.255C6.74284 97.2525 0 80.9739 0 64V64ZM64 8C53.4542 8.00056 43.1229 10.9789 34.1952 16.5922C25.2675 22.2055 18.1063 30.2257 13.5357 39.7295C8.96516 49.2334 7.17109 59.8347 8.35999 70.3133C9.54888 80.7918 13.6724 90.7217 20.256 98.96C25.936 89.808 38.44 80 64 80C89.56 80 102.056 89.8 107.744 98.96C114.328 90.7217 118.451 80.7918 119.64 70.3133C120.829 59.8347 119.035 49.2334 114.464 39.7295C109.894 30.2257 102.732 22.2055 93.8048 16.5922C84.8771 10.9789 74.5458 8.00056 64 8V8Z"/>
      // </svg>
      }
    </div>);
};
