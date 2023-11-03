/* eslint-disable max-len */
import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text/Text';
import { useState } from 'react';
import Modal from '../../../../Modal';

export const Content = ({ author, title, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          className={style.linkPost}
          size={18}
          msize={26}
          tsize={32}
          color='grey2d'
          href='#post'
          func={() => setIsModalOpen(true)}
        >
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
      {isModalOpen && (
        <Modal
          id={id}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
