import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './menu.module.scss';

const Menu: React.FC = () => {
  return(
    <nav className={style.nav}>
      <div className="container">
        <div className={style.navInnerWrap}>
          <h1 className={style.mainTitle}>Проект "Карточки 1000 англ слов"</h1>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink to="/" style={({ isActive }) =>
                isActive
                  ? { textDecoration: 'underline' }
                  : { textDecoration: 'none' }
                }>
                Главная
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/allwords" style={({ isActive }) =>
                isActive
                  ? { textDecoration: 'underline' }
                  : { textDecoration: 'none' }
                }>
                Список слов
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu };