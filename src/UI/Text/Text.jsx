import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    msize,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    func,
  } = prop;

  const classes = classNames(
    center,
    className,
    style[color],
    { [style.center]: center },
    { [style[`fsm${msize}`]]: msize },
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fst${dsize}`]]: dsize },
  );

  return (
    <As className={classes} href={href} onClick={func}>{children}</As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  msize: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  fweight: PropTypes.string,
  func: PropTypes.func,
  func1: PropTypes.func,
};
