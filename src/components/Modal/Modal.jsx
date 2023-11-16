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
import Loader from '../../UI/Loader';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const [post, comments, status] = useCommentsData(id);

  // let author;
  // let title;
  // if (post) {
  //   author = post.author;
  //   title = post.title;
  // }

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
        {status === 'loading' && <Loader size='150px' />}
        {status === 'loaded' &&
          <>
            <h2 className={style.title}>{post.title}</h2>
            <p className={style.author}>{post.author}</p>
            <FormComment />
            <Comments comments={comments}/>
          </>
        }
        {status === 'error' && <p>Ошибка загрузки</p>}
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
