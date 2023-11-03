/* eslint-disable no-unused-vars */
// import React from 'react';
import { useRef, useState } from 'react';
import style from './FormComment.module.css';

export const FormComment = props => {
  const textareaRef = useRef(null);

  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => {
    setIsShowForm(true);
    setTimeout(() => {
      textareaRef.current.focus();
    }, 0);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };

  return (
    <>
      {!isShowForm &&
      <button className={style.btn}
        onClick={showForm}
      >
        Написать комментарий
      </button>}
      {isShowForm &&
        <form className={style.form} onSubmit={submitForm}>
          <textarea className={style.textarea} id='сomment'
            ref={textareaRef}
            rows={5}
            cols={40}
          >
          </textarea>
          <button className={style.btn}>Submit</button>
        </form>
      }
    </>);
};
