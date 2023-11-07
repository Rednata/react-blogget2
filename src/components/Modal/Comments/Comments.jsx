// import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import { getRandomKey } from '../../../utils/randomKey';

export const Comments = ({ comments }) => {
  if (!comments) {
    return (
      <p>Загрузка...</p>
    );
  }

  return (
    comments.length <= 1 ?
    <p>Нет комментариев</p> :
    <ul className={style.list}>
      {
        comments.map(({ data }) => {
          console.log();
          return (
            <li key={getRandomKey()} className={style.item}>
              <div className={style.body}>{data.body}</div>
              <span className={style.author}>Comment by {data.author}</span>
            </li>
          );
        })
      }
    </ul>);
};

Comments.propTypes = {
  comments: PropTypes.array,
};
