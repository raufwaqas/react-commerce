import React, { FC } from 'react';
import { NavItem, Logo } from '../Data/DataHeader';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href={NavItem[0].path} className={styles.brand}>
          <img
            src={Logo[0].url}
            style={{ height: '70px' }}
            alt={Logo[0].title}
            title={Logo[0].title}
            className='header__logo--image'
          />
        </a>
        <input type='checkbox' id={styles.nav} className={styles.hidden} />
        <label htmlFor='nav' className={styles.nav_toggle}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={styles.wrapper}>
          <ol className={styles.menu}>
            <ul className={styles.menu_item}>
              <a href={NavItem[0].path}>{NavItem[0].name}</a>
            </ul>
            <ul className={styles.menu_item}>
              <a href={NavItem[1].path}>{NavItem[1].name}</a>
            </ul>
            <ul className={styles.menu_item}>
              <a href={NavItem[2].path}>{NavItem[2].name}</a>
            </ul>
            <ul className={styles.menu_item}>
              <a href={NavItem[3].path}>{NavItem[3].name}</a>
            </ul>
          </ol>
        </div>
        <div className='header__cartblock'>
          <Link to='/cart'>
            <li className='bi-basket2'></li>
          </Link>

          <li className='shopping-icon'>1</li>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
