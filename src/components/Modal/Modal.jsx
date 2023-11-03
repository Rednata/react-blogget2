/* eslint-disable no-unused-vars */
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({ id, closeModal }) => {
  // author, title, markdown,
  const overlayRef = useRef(null);
  const [post, comments] = useCommentsData(id);
  console.log('post: ', post);
  console.log('comments: ', comments);

  let author;
  let title;
  if (post) {
    author = post.author;
    title = post.title;
  }

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    // <div className={style.overlay} ref={overlayRef} onClick={handleClick}>
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.author}>{author}</p>
        <FormComment />
        <Comments comments={comments}/>
        <button className={style.close}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'));
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
