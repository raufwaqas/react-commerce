import styles from './ProductCard.module.scss';
import React, { useState, FC } from 'react';
import Text from '../Text/Text';
import { IProductCard } from '../../../../types';
import Btn from '../Buttons/Btn';

const ProductCard: FC<IProductCard> = ({
  id,
  img,
  name,
  price,
  shortdesc,
  colorgroup,
  label,
  qty,
}) => {
  let [quantity, setQuantity] = useState(qty);
  return (
    <a href={`/produkt/${id}`} className={styles.product_container}>
      {label && (
        <span className={styles.ny} aria-hidden='true'>
          {label}
        </span>
      )}
      <div
        className={`${styles.product__Img__Area} ${colorgroup}`}
        aria-label={`Picture of ${name}`}
        role='img'
      >
        <img
          className={`${styles.product__img} img-fluid besok add_to_cart`}
          src={img}
          alt={`${name}`}
          aria-label={`${shortdesc}`}
        />
      </div>
      <div
        className={styles.productItem__content}
        aria-label='Product name, short description and price area'
      >
        <span aria-label='Product Name' className={styles.pcard_title}>
          <Text
            fontSize={styles.pcard_title}
            text={`${name}`}
            aria-label={`${name}`}
          />
        </span>
        <span aria-label='Product short description'>
          <p className={styles.product_desc_1}>{`${shortdesc}`}</p>
        </span>
        <span aria-label='Product price' className={styles.produkt_price}>
          <span className={styles.price}>
            <Text text={`${price} Kr`} aria-label={`${price} Kr`} />
          </span>
          <span className={styles.buy_button} >
            <span className={styles.buy_button_display}>
              <Btn
                bgcolor='product_card_btn'
                onClick={() => setQuantity(quantity + 1)}
                text='Läs mer'
                className={styles.buy_button_focus}
              />
            </span>
          </span>
        </span>
      </div>
    </a>
  );
};

export default ProductCard;
