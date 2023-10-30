/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { assignID } from '../../../utils/randomKey';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';
import { Svg } from '../../../UI/SVG/Svg';

export const Tabs = () => {
  const HomeIcon1 = Svg('./img/home.svg');

  const LIST = [
    { value: 'Главная', Icon: HomeIcon },
    { value: 'Топ', Icon: TopIcon },
    { value: 'Лучшие', Icon: BestIcon },
    { value: 'Горячие', Icon: HotIcon },
  ].map(assignID);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrpodown, setIsDropdown] = useState(true);
  const [titleMenu, setTitleMenu] = useState('Главная');

  // const handleResize = () => {
  //   if (document.documentElement.clientWidth < 768) {
  //     console.log('<768');
  //     setIsDropdown(true);
  //   } else {
  //     console.log('>>>768');
  //     setIsDropdown(false);
  //   }
  // };


  const queryResize = () => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addListener((e) => {
      if (e.matches) {
        setIsDropdown(false);
      } else {
        setIsDropdown(true);
      }
    });
  };

  const handleClickList = () => {

  };

  useEffect(() => {
    queryResize();

    // const debounceResize = debounceRaf(handleResize);
    // debounceResize();
    // window.addEventListener('resize', debounceResize);
    // return () => {
    //   window.removeEventListener('resize', debounceResize);
    // };
  });

  return (
    <div className={style.container}>
      {isDrpodown && <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >{titleMenu}
          <ArrowIcon width={15} height={15}/>
        </button>
      </div>}

      {(isDropdownOpen || !isDrpodown) &&
      <ul className={style.list}
        onClick={() => setIsDropdownOpen(false)}
      >
        {LIST.map(({ value, id, Icon }) => (
          <li className={style.item} key={id}
            onClick={() => setTitleMenu(value)}
          >
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
