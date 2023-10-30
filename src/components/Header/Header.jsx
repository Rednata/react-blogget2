import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import { Heading } from './Heading/Heading';

export const Header = props => {
  console.log();
  return (
    <header className={style.header}>
      <Layout >
        <div className={style.gridContainer}>
          <Logo />
          <Search />
          <Heading text='заголовок'/>
          <Auth auth='Nat'/>
        </div>
      </Layout>
    </header>);
};
