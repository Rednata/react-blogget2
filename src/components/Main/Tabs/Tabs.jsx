/* eslint-disable no-unused-vars */
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { assignID } from '../../../utils/randomKey';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as EyeIcon } from './img/eye.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as PostIcon } from './img/post.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const LIST = [
    { value: 'Главная', Icon: EyeIcon },
    { value: 'Сохраненное', Icon: HomeIcon },
    { value: 'Просмотренное', Icon: PostIcon },
    { value: 'Мои посты', Icon: SaveIcon },
  ].map(assignID);

  return (
    <div className={style.container}>
      <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >Add Item
          <ArrowIcon width={15} height={15}/>
        </button>
      </div>

      {isDropdownOpen &&
      <ul className={style.list}
        onClick={() => setIsDropdownOpen(false)}
      >
        {LIST.map(({ value, id, Icon }) => (
          <li className={style.item} key={id}>
            <button
              className={style.btn}
            >{value}
              {
                Icon && <Icon width={20} height={20}/>
              }
            </button>
          </li>
        ))}
      </ul>}
    </div>);
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func
};
