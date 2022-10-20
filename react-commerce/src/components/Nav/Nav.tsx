/* eslint-disable jsx-a11y/no-redundant-roles */
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
          setCardItem(res?.data.length);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <header className={styles.header} >
      <nav className={styles.navbar} >
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
          type="hidden"
          id={styles.nav}
          className={styles.hidden}
          
          
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
            <li className={styles.menu_item} aria-label={NavItem[0].name}>
              <a href={NavItem[0].path} role="link">
                {NavItem[0].name}
              </a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[1].name}>
              <a href={NavItem[1].path} role="link">
                {NavItem[1].name}
              </a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[2].name}>
              <a href={NavItem[2].path} role="link">
                {NavItem[2].name}
              </a>
            </li>
            <li className={styles.menu_item} aria-label={NavItem[3].name}>
              <a href={NavItem[3].path} role="link">
                {NavItem[3].name}
              </a>
            </li>
          </ol>
        </div>
        <div
          className='header__cartblock'
          // role='navigation'
          // aria-label='Varkorg'
          // aria-details='Varkorg'
        >
          <Link to='/cart' aria-label="Click here to visit cart page">
            
            <span className='bi-basket2' ></span>
            
          </Link>

          <span className='shopping-icon' aria-label='Cart quantity'>
            {cardItem}
          </span>
         
        </div>
      </nav>
    </header>
  );
};

export default Nav;
