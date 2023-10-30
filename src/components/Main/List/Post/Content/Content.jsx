/* eslint-disable max-len */
import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text/Text';

export const Content = ({ author, title }) => {
  console.log();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          className={style.linkPost}
          size={18}
          msize={26}
          tsize={32}
          color='grey2d'
          href='#post'>
          {title}
        </Text>
      </Text>
      {/* <a className={style.linkAuthor} href='#author'>{author}</a> */}
      <Text
        As='a'
        color='orange'
        size={12}
        msize={14}
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};
