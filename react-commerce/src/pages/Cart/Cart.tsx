import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios/axiosHttps';
import { NavItem } from '../../components/Data/DataHeader';
// import CartSectionHeader from '../../components/CartSectionHeader/CartSectionHeader';
import CartProductSection from '../../components/CartProductSection/CartProductSection';
import styles from './Cart.module.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [productsData, setProductData] = useState<any>([]);
  console.log(productsData);
  useEffect(() => {
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => setCartData(res?.data))
        .catch((err) => console.log(err));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      cartData?.map(async (x: any) => {
        await axiosInstance
          .get(`/products/find/${x?.productsId}`)
          .then((res) => {
            setProductData((prev: any) => [...prev, res?.data]);
          });
      });
    })();
  }, [cartData]);
  return (
    <>
      <Breadcrumb
        title={NavItem[4].name}
        path={NavItem[0].name}
        pagepath={NavItem[4].name}
        sectionpath={NavItem[4].slug}
      />
      <div className='my-5 mx-5'>
        {cartData?.length === 0 ? (
          <div className='text-center my-5 fs-1 text-center'>
            Loading, please wait
          </div>
        ) : (
          <div className={styles.cartParent}>
            {cartData?.map((x) => {
              const { _id, quantity, name, artnr, price, img, shortdesc } = x;
              return (
                <section>
                  <CartProductSection
                    key={_id}
                    img={img}
                    name={name}
                    price={price}
                    qty={quantity}
                    total={200}
                    artnr={artnr}
                    shortdesc={shortdesc}
                    totalPris={0}
                  />
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
