import React, { FC, useState, useEffect } from 'react';
import { NavItem, Logo } from '../Data/DataHeader';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../axios/axiosHttps';

const Nav: FC = () => {
  const [cardItem, setCardItem] = useState(0);

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => {
          console.log('data', res?.data.length);
          setCardItem(res?.data.length);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

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
        <input
          type='checkbox'
          id={styles.nav}
          className={styles.hidden}
          aria-label='Navigation'
        />
        <div
          // htmlFor='nav'
          className={styles.nav_toggle}
          aria-label='Open and close button on mobile menu'
        >
          <span className={styles.hide} aria-hidden='true'></span>
          <span className={styles.hide} aria-hidden='true'></span>
          <span className={styles.hide} aria-hidden='true'></span>
        </div>
        <div
          className={styles.wrapper}
          aria-label='navigation'
          role='navigation'
        >
          <ul className={styles.menu} aria-label='navigation bar'>
            <li className={styles.menu_item} aria-label={NavItem[0].name}>
              <a href={NavItem[0].path}>{NavItem[0].name}</a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[1].name}>
              <a href={NavItem[1].path}>{NavItem[1].name}</a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[2].name}>
              <a href={NavItem[2].path}>{NavItem[2].name}</a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[3].name}>
              <a href={NavItem[3].path}>{NavItem[3].name}</a>
            </li>
          </ul>
        </div>
        <div className='header__cartblock'>
          <Link to='/cart' aria-label='Go to cart page'>
            <span className='bi-basket2'></span>
          </Link>

          <span className='shopping-icon'>{cardItem}</span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
