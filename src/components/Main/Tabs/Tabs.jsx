import style from './Tabs.module.css';

export const Tabs = props => {
  console.log();
  return (
    <ul className={style.list}>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">Сохраненное</a>
      </li>
      <li>
        <a href="/">Просмотренное</a>
      </li>
      <li>
        <a href="/">Мои посты</a>
      </li>
    </ul>);
};
