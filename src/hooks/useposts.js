import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useSelector } from 'react-redux';

export const usePosts = () => {
  const token = useSelector(state => state.token);
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
  return posts;
};
