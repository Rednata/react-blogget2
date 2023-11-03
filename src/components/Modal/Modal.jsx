import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';

export const Modal = ({ author, title, markdown, closeModal }) => {
  const overlayRef = useRef(null);

  const handleClick = e => {
    console.log('overlay!');
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
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            }
          }}>
            {markdown}
          </Markdown>
        </div>
        <p className={style.author}>{author}</p>

        <button className={style.close}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'));
};

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
