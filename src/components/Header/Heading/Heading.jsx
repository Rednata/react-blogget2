/* eslint-disable react/prop-types */
import style from './Heading.module.css';

export const Heading = ({text}) => {
  console.log();
  return (
    <h1 className={style.heading}>{text}
    </h1>);
};
