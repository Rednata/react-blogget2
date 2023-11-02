import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Thumbnail = ({ title, thumbnail }) => {
  const [src, setSrc] = useState(thumbnail);

  return (
    <img
      className={style.img}
      src={src}
      alt={title}
      onError={() => setSrc(notphoto)}
    />
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
