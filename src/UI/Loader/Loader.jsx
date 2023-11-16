import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const Loader = ({ size }) => {
  console.log();
  const cssOverride = {
    display: 'block',
    margin: '0 auto',
  };
  return (
    <RingLoader
      color='#cc6633'
      cssOverride={cssOverride}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
