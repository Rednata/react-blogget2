/* eslint-disable max-len */
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    // title: 'Title',
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti veritatis quod illum quos eligendi blanditiis iste, ducimus cum mollitia!',
    author: 'Nickname',
    ups: 24,
    date: '2023-08-29T11:30:31.224Z',
    // date: '2022-02-24T09:45:00.000Z',
  };
  console.log();
  return (
    <ul className={style.list}>
      <Post postData={postData}></Post>
    </ul>);
};
