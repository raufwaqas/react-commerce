import React, { FC } from 'react';
import styles from './CartSectionHeader.module.scss';

const CartSectionHeader: FC = () => {
  return (
    <header className={styles.header_content} aria-hidden='true'>
      <p className={styles.produkt_title}>Produkt</p>
      <p className={styles.produkt_pris}>A-pris</p>
      <p className={styles.produkt_antal}>Antal</p>
      <p className={styles.produkt_price}>Summa</p>
      <p className={styles.produkt_bin}></p>
    </header>
  );
};

export default CartSectionHeader;
