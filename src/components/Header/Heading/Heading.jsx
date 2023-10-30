import style from './Heading.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../UI/Text/Text';

export const Heading = ({ text }) => {
  console.log();
  return (
    <Text
      As='h1'
      className={style.heading}
      size={22}
      tsize={26}
      center
    >
      {text}
    </Text>);
};

Heading.propTypes = {
  text: PropTypes.string,
};
