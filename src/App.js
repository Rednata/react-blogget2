import Header from './components/Header';
import Main from './components/Main';
import { PostsContextProvider } from './context/postContext';
import { useDispatch } from 'react-redux';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';

// const time = () => dispatch => {
//   dispatch({
//     type: 'START',
//   });

//   setTimeout(() => {
//     dispatch({
//       type: 'END',
//     });
//   }, 3000);
// };

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));


  // store.dispatch(time());

  return (
    <PostsContextProvider>
      <Header />
      <Main />
    </PostsContextProvider>
  );
};

export default App;
