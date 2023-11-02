import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import { Heading } from './Heading/Heading';

export const Header = () => {
  console.log(13);
  return (
    <header className={style.header}>
      <Layout >
        <div className={style.gridContainer}>
          <Logo />
          <Heading text='заголовок'/>
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>);
};
