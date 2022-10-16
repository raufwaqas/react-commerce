import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { axiosInstance } from '../../axios/axiosHttps';
import { NavItem } from '../../components/Data/DataHeader';
import CartProductSection from '../../components/CartProductSection/CartProductSection';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CartSectionHeader from '../../components/CartProductSection/CartSectionHeader';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [productsData, setProductData] = useState<any>([]);
  console.log(productsData);
  useEffect(() => {
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => {
          // console.log('data', res?.data);
          setCartData(res?.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (cartData.length === 0) return;
      console.log('cartData', cartData);
      cartData?.map(async (x: any) => {
        await axiosInstance
          .get(`/products/find/${x?.productId}`)
          .then((res) => {
            setProductData((prev: any) => [...prev, res?.data]);
          });
      });
    })();
  }, [cartData]);
  return (
    <main>
      <Breadcrumb
        title={NavItem[4].name}
        path={NavItem[0].name}
        pagepath={NavItem[4].name}
        sectionpath={NavItem[4].slug}
      />
      <article className={styles.container}>
        <CartSectionHeader />
        <div>
          {cartData?.length === 0 ? (
            <div className='text-center my-5 fs-1 text-center'>
              Your cart is empty
            </div>
          ) : (
            <div>
              {cartData?.map((setCartData) => {
                const { _id, quantity, name, _Id, price, img } = setCartData;
                return (
                  <ol className={styles.cartParent} key={_id}>
                    <CartProductSection
                      img={img}
                      name={name}
                      price={price}
                      shortdesc={''}
                      qty={quantity}
                      _Id={_Id}
                    />
                  </ol>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.order_form}></div>
      </article>
    </main>
  );
};

export default Cart;
