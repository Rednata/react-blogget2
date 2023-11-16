import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/posts/postsAction';

export const usePosts = () => {
  const token = useSelector(state => state.token.token);
  // const [posts, setPosts] = useState();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);
  return [posts, loading];
};
