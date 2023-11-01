import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import { Heading } from './Heading/Heading';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken }) => {
  console.log();
  return (
    <header className={style.header}>
      <Layout >
        <div className={style.gridContainer}>
          <Logo />
          <Search />
          <Heading text='заголовок'/>
          <Auth token={token} delToken={delToken}/>
        </div>
      </Layout>
    </header>);
};

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
