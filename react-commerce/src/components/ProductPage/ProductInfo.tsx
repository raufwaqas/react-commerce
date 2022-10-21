import React, { FC } from 'react';
import { ProductInfoProps } from '../../../../types';
import styles from './ProductInfo.module.scss';

const ProductInfo: FC<ProductInfoProps> = ({ desc, ingredient }) => {
  return (
    <article
      className={styles.main_content_block_1}
      aria-label='Produkt beskrivning och Ingredienser '
    >
      <div className={styles.description}>
        <div className={styles.description_title} aria-label='Om Produkt'>
          Om produkt
        </div>
      </div>
      <div
        className={styles.product_description_block}
        aria-label='Produkt beskrivning'
      >
        <div className={styles.beskrivning}>
          <h6 className={styles.rubrik}>Beskrivning:</h6>
          {desc}
        </div>
        <div aria-label='Produkt ingredienser'>
          <h6
            className={styles.rubrik}
            aria-label='Produkt ingredienser rubrik'
          >
            Ingredienser:
          </h6>
          <div className={styles.beskrivning} aria-label='ingredienser'>
            {ingredient}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductInfo;
