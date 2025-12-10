import React, { FC, useEffect, useState } from 'react';
import { NavItem, Logo } from '../Data/DataHeader';
import styles from './Nav.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { axiosInstance } from '../../axios/axiosHttps';
import { store } from '../../store/index';

const Nav: FC = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const res = await axiosInstance.get(`/carts`);
        const count = res?.data.length || 0;
        setCartCount(count);
        store.cartState.setCartCount(count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCartCount();
    // Refresh cart count when route changes (e.g., after adding/removing items)
    const interval = setInterval(fetchCartCount, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, [location.pathname]);

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
            aria-label='Company loga du kan även knappa här för besök första sida'
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
            <li className={styles.menu_item} aria-label='Besök Första sida'>
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
        <div className='header__cartblock' aria-label='Varkorg'>
          <Link to='/cart' aria-label='Varkorg'>
            <span className='bi-basket2'></span>
          </Link>

          <span className='shopping-icon'>{cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
