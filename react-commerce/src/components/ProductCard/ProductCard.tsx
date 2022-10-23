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
    <a
      href={`/produkt/${id}`}
      className={styles.product_container}
      property='contentUrl'
      typeof='schema:Product'
    >
      {label && (
        <span className={styles.ny} aria-hidden='true'>
          {label}
        </span>
      )}
      <div
        className={`${styles.product__Img__Area} ${colorgroup}`}
        aria-label={`bilder av ${name}`}
        role='img'
        resource={img}
      >
        <img
          className={`${styles.product__img} img-fluid besok add_to_cart`}
          src={img}
          alt={`${shortdesc}`}
          aria-label={`${shortdesc}`}
        />
      </div>
      <div
        className={styles.productItem__content}
        aria-label='Produkt Namn, Kort beskrivning och priser'
      >
        <span
          aria-label='Produkt Namn'
          className={styles.pcard_title}
          property='schema:name'
        >
          <Text
            fontSize={styles.pcard_title}
            text={`${name}`}
            aria-label={`${name}`}
          />
        </span>
        <span
          aria-label='Product short description'
          property='schema:description'
        >
          <p
            className={styles.product_desc_1}
            aria-label='Product short description'
          >{`${shortdesc}`}</p>
        </span>
        <span
          aria-label='Product price'
          className={styles.produkt_price}
          property='schema:price'
        >
          <span className={styles.price}>
            <Text text={`${price}KR`} aria-label={`${price} Kr`} />
          </span>
          <span className={styles.buy_button}>
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
