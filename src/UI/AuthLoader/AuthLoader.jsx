import RingLoader from 'react-spinners/RingLoader';

export const AuthLoader = () => {
  console.log();
  const cssOverride = {
    display: 'block',
  };
  return (
    <RingLoader
      color='#cc6633'
      cssOverride={cssOverride}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
