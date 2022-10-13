import React from 'react';
import styles from './Footer.module.scss';
import { brand, payment, social } from '../Data/DataFooter';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_section_main}>
      <div className={styles.footer_section_inner}>
        <div className={styles.foter_section_2} aria-label='Company Logo'>
          <img
            src={brand[0].url}
            alt={brand[0].title}
            className={styles.footer_logo}
          />
        </div>
        <div className={styles.foter_seprator}></div>
        <div className={styles.foter_section_1}>
          <span
            className={styles.foter_section_icons}
            aria-label='Follow us on social media'
          >
            <a href={social[0].url}>
              <img
                src={social[0].icon}
                alt={social[0].title}
                aria-label={social[0].title}
                className={styles.payment_icons}
              />
            </a>
            <a href={social[1].url}>
              <img
                src={social[1].icon}
                alt={social[1].title}
                aria-label={social[1].title}
                className={styles.payment_icons}
              />
            </a>
            <a href={social[2].url}>
              <img
                src={social[2].icon}
                alt={social[2].title}
                aria-label={social[2].title}
                className={styles.payment_icons}
              />
            </a>
            <a href={social[3].url}>
              <img
                src={social[3].icon}
                alt={social[3].title}
                aria-label={social[3].title}
                className={styles.payment_icons}
              />
            </a>
            <img
              src={payment[0].icon}
              alt={payment[0].title}
              aria-label={payment[0].title}
              className={styles.payment_icons}
            />

            <img
              src={payment[1].icon}
              alt={payment[1].title}
              aria-label={payment[0].title}
              className={styles.payment_icons}
            />
            <img
              src={payment[2].icon}
              alt={payment[2].title}
              aria-label={payment[0].title}
              className={styles.payment_icons}
            />
            <img
              src={payment[3].icon}
              alt={payment[3].title}
              aria-label={payment[0].title}
              className={styles.payment_icons}
            />
          </span>
          <span
            className={styles.foter_section_copyright}
            aria-label='Follow us on social media'
          >
            Copyright@ 2022 Design & developed by Waqas Rauf
          </span>
        </div>
        <div
          className={styles.foter_section_3}
          aria-label='Payment Methods'
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
