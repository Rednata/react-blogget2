/* eslint-disable no-unused-vars */
import style from './Post.module.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import DeleteBtn from './DeleteBtn';
import Content from './Content';
import Rating from './Rating';
import Time from './Time';


export const Post = ({ postData }) => {
  const { title, author, ups, created, thumbnail } = postData;

  return (
    <li className={style.post}>
      <Thumbnail title={title} thumbnail={thumbnail}/>
      <DeleteBtn />
      <Content author={author} title={title}/>
      <Rating ups={ups}/>
      <Time date={created * 1000}/>
    </li>);
};

Post.propTypes = {
  postData: PropTypes.object,
};
