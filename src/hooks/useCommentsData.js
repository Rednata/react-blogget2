/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useCommentsData = (id) => {
  const { token } = useContext(tokenContext);
  const [info, setComments] = useState([]);

  useEffect(() => {
    console.log(id);
    try {
      fetch(`${URL_API}/comments/${id}`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(([postInfo, commentsInfo]) => {
          const post = postInfo.data.children[0].data;
          const comments = commentsInfo.data.children;
          setComments([post, comments]);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return info;
};
