/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import style from './FormComment.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateComment } from '../../../store/index';

export const FormComment = props => {
  const value = useSelector(state => state.comment);

  const dispatch = useDispatch();

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
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
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
            value={value}
            onChange={handleChange}
          >
          </textarea>
          <button className={style.btn}>Submit</button>
        </form>
      }
    </>);
};
