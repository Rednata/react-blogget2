import style from './Logo.module.css';
import logoImg from './img/logo.svg';

export const Logo = props => {
  console.log();
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={logoImg} alt="Логотип Blogget" />
    </a>
  );
};
