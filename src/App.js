import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postContext';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  console.log();
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
