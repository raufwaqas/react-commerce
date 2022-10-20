import React, { FC } from 'react';
import { ICartTotalSection } from '../../../../types';
import styles from './CartSectionHeader.module.scss';

const CartTotalSection: FC<ICartTotalSection> = ({ total }) => {
  return (
    <footer className={styles.footer_content} aria-hidden='true'>
      <p className={styles.produkt_title}></p>
      <p className={styles.produkt_antal}>Totalt:</p>
      <p className={styles.produkt_total_price}>{total}</p>
      <p className={styles.produkt_bin}></p>
    </footer>
  );
};

export default CartTotalSection;
