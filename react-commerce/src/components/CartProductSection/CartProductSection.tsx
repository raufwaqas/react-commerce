import React, { useState, FC } from 'react';
import { IcartSection } from '../../../../types';
import styles from './CartProductSection.module.scss';
import { axiosInstance } from '../../axios/axiosHttps';
import style from './CartSectionHeader.module.scss';

const CartProductSection: FC<IcartSection> = ({
  img,
  name,
  price,
  shortdesc,
  qty,
  _Id,
  total,
  onClick,
  handleCounter,
}) => {
  let [quantity, setQuantity] = useState(qty);
  
  const onDelete = () => {
    console.log(_Id);
    (async () => {
      await axiosInstance
        .delete(`/carts/${_Id}`)
        .then((res) => {
          console.log('res', res?.data);
        })
        .catch((err) => console.log(err));
    })();
  }
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
            <p className={styles.cart_title}>{name}</p>
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
                <p onClick={() => quantity !== 1 && handleCounter(_Id, quantity - 1)}>-</p>
              </button>
              <p>{quantity}</p>
              <button
                className={styles.qty_button}
                onClick={() => setQuantity(quantity + 1)}
              >
                <p onClick={() => handleCounter(_Id, quantity + 1)}>+</p>
              </button>
            </div>
          </div>
          <div className={style.produkt_price}>
            <p className={styles.cart_title}>{`${parseInt(total.toString()) * quantity}`} KR</p>
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
                onClick={onDelete}
              />
            </button>
          </div>
        </article>
      </div>
    </li>
  );
};

export default CartProductSection;
