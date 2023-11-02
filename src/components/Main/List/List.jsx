/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import style from './List.module.css';
import Post from './Post';
import { assignID, getRandomKey } from '../../../utils/randomKey';
import { useContext } from 'react';
import { postContext } from '../../../context/postContext';

export const List = () => {
  const posts = useContext(postContext);
  console.log('data: ', posts);

  console.log('posts: ', posts);

  const postData = [
    {
      thumbnail: '',
      // title: 'Title',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-08-29T11:00:31.224Z',
      // date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      // title: 'Title',
      title: 'Title2',
      author: 'Nickname2',
      ups: 77,
      date: '2023-08-29T11:30:31.224Z',
      // date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      // title: 'Title',
      title: 'Title3',
      author: 'Nickname3',
      ups: 124,
      date: '2023-07-15T01:50:31.224Z',
      // date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      // title: 'Title',
      title: 'Title4',
      author: 'Nickname4',
      ups: 12,
      date: '2023-06-10T18:45:31.224Z',
      // date: '2022-02-24T09:45:00.000Z',
    }
  ].map(item => assignID(item));

  return (
    posts &&
    <ul className={style.list}>
      {posts.map(({ data }) =>
        <Post postData={data} key={getRandomKey()} />
      )}
    </ul>
  );
};


{/* <ul className={style.list}>
  {postData.map(post =>
    <Post postData={post} key={post.id} />
  )}
</ul>); */}
