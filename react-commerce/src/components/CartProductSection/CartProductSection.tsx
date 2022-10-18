import React, { useState, FC } from 'react';
import { IcartSection } from '../../../../types';
import styles from './CartProductSection.module.scss';
import style from './CartSectionHeader.module.scss';

const CartProductSection: FC<IcartSection> = ({
  img,
  name,
  price,
  shortdesc,
  qty,
  _Id,
  total,
  id,
  onClick,
}) => {
  let [quantity, setQuantity] = useState(qty);
  return (
    <li className={styles.cart_article_inner_section} key={_Id}>
      <img
        className={styles.container_product_img_small}
        src={img}
        alt={`${name}`}
        aria-label={`${shortdesc}`}
      />
      <div className={styles.area_container}>
        <article className={styles.cart_product_block_contents}>
          <div className={style.produkt_title}>
            <a href={`/produkt/${_Id}`} className={styles.product_container}>
              <p className={styles.cart_title}>{name}</p>
            </a>
          </div>
          <div className={style.produkt_pris}>
            <p className={styles.cart_title}>{price} KR</p>
          </div>
          <div className={style.produkt_antal}>
            <div className={styles.qty_area}>
              <button
                className={styles.qty_button}
                onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className={styles.qty_button}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className={style.produkt_price}>
            <p className={styles.cart_title}>{`${total}`} KR</p>
          </div>
          <div className={style.produkt_bin}>
            <button
              aria-label='Ta bort'
              onClick={() => price * qty}
              className={styles.bin_icon}
            >
              <img
                src='https://d3studio.se/react/img/icons/bin.svg'
                alt='Ta bort'
              />
            </button>
          </div>
        </article>
      </div>
    </li>
  );
};

export default CartProductSection;
