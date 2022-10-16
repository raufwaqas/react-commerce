import React, { FC } from 'react';
import { ProductInfoProps } from '../../../../types';
import styles from './ProductInfo.module.scss';

const ProductInfo: FC<ProductInfoProps> = ({ desc, ingredient }) => {
  return (
    <div className={styles.main_content_block_1}>
      <div className={styles.description}>
        <div className={styles.description_title}>Om produkt</div>
      </div>
      <div className={styles.product_description_block}>
        <div className={styles.beskrivning}>
          <h6 className={styles.rubrik}>Beskrivning:</h6>
          {desc}
        </div>
        <div>
          <h6 className={styles.rubrik}>Ingredients:</h6>
          <div className={styles.beskrivning}>{ingredient}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
