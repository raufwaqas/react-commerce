import React from 'react';
import { NavItem, brand, cart } from '../Data/DataHeader';
import styles from './Nav.module.scss';

interface INavProps {
  name?: string;
  path?: string;
  icon?: string;
  url?: string;
  target?: string;
}

const Nav = ({ name, path }: INavProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href={NavItem[0].path} className={styles.brand}>
          <img
            src={brand[0].url}
            style={{ height: '70px' }}
            alt={brand[0].title}
            title={brand[0].title}
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
          <li className='bi-search'></li>
          <li className='bi-basket2'></li>
          <li className='shopping-icon'>1</li>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

// <div className='header'>
// <div className='header__logo' aria-hidden='true'>
//   <a href={NavItem[0].path}>
//     <img
//       src={brand[0].url}
//       style={{ height: '70px' }}
//       alt={brand[0].title}
//       title={brand[0].title}
//       className='header__logo--image'
//     />
//   </a>
// </div>
// <div className='header__menu'>
//   <a href={NavItem[0].path} className='header__menu1 '>
//     {NavItem[0].name}
//   </a>
//   <a href={NavItem[1].path} className='header__menu2'>
//     {NavItem[1].name}
//   </a>
//   <a href={NavItem[2].path} className='header__menu3'>
//     {NavItem[2].name}
//   </a>
//   <a href={NavItem[3].slug} className='header__menu4'>
//     {NavItem[3].name}
//   </a>
// </div>
// <div className='header__cartblock'>
//   <li className='bi-search'></li>
//   <li className='bi-basket2'></li>
//   <li className='shopping-icon'>12</li>
// </div>
// </div>

/* <nav
aria-labelledby='mainmenulabel'
aria-label='Navigation bar'
className='header_main'
>
<div className='header'>
  <div className='header__logo' aria-hidden='true'>
    <a href={NavItem[0].path}>
      <img
        src={brand[0].url}
        style={{ height: '70px' }}
        alt={brand[0].title}
        title={brand[0].title}
        className='header__logo--image'
      />
    </a>
  </div>
  <div className='header__menu'>
    <a href={NavItem[0].path} className='header__menu1 '>
      {NavItem[0].name}
    </a>
    <a href={NavItem[1].path} className='header__menu2'>
      {NavItem[1].name}
    </a>
    <a href={NavItem[2].path} className='header__menu3'>
      {NavItem[2].name}
    </a>
    <a href={NavItem[3].slug} className='header__menu4'>
      {NavItem[3].name}
    </a>
  </div>
  <div className='header__cartblock'>
    <li className='bi-search'></li>
    <li className='bi-basket2'></li>
    <li className='shopping-icon'>12</li>
  </div>
</div>
</nav> */
