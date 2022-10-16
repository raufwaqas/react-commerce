import React from 'react';
import styles from './CartSectionHeader.module.scss';

const CartSectionHeader = () => {
  return (
    <header className={styles.header_content}>
      <p className={styles.produkt_title}>Produkt</p>
      <p className={styles.produkt_antal}>Antal</p>
      <p className={styles.produkt_price}>Pris</p>
      <p className={styles.produkt_bin}></p>
    </header>
  );
};

export default CartSectionHeader;
