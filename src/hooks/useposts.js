import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const usePosts = () => {
  const { token } = useContext(tokenContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    try {
      fetch(`${URL_API}/best`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(({ data }) => {
          const posts = data.children;
          setPosts(posts);
        });
    } catch (error) {
      console.log(error);
    }
  }, [token]);
  // console.log('posts in usePosts', posts);
  return posts;
};
