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
          // console.log('data', res?.data.length);
          setCardItem(res?.data.length);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <header className={styles.header} role='tree' aria-details='Navigation'>
      <nav className={styles.navbar} aria-controls='menu'>
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
          aria-hidden='true'
        />
        <label htmlFor='nav' className={styles.nav_toggle} aria-hidden='true'>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div
          className={styles.wrapper}
          aria-label='navigation'
          role='navigation'
        >
          <ol className={styles.menu} aria-label='navigation bar'>
            <ul className={styles.menu_item} aria-label={NavItem[0].name}>
              <a href={NavItem[0].path} aria-hidden='true'>
                {NavItem[0].name}
              </a>
            </ul>
            <ul className={styles.menu_item} aria-label={NavItem[1].name}>
              <a href={NavItem[1].path} aria-hidden='true'>
                {NavItem[1].name}
              </a>
            </ul>
            <ul className={styles.menu_item} aria-label={NavItem[2].name}>
              <a href={NavItem[2].path} aria-hidden='true'>
                {NavItem[2].name}
              </a>
            </ul>
            <ul className={styles.menu_item} aria-label={NavItem[3].name}>
              <a href={NavItem[3].path} aria-hidden='true'>
                {NavItem[3].name}
              </a>
            </ul>
          </ol>
        </div>
        <div
          className='header__cartblock'
          aria-label='Varkorg'
          aria-details='Varkorg'
        >
          <Link to='/cart' aria-hidden='true'>
            <li className='bi-basket2' aria-hidden='true'></li>
          </Link>

          <li className='shopping-icon' aria-hidden='true'>
            {cardItem}
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
