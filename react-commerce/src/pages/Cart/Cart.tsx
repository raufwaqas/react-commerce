import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { axiosInstance } from '../../axios/axiosHttps';
import { NavItem } from '../../components/Data/DataHeader';
import CartProductSection from '../../components/CartProductSection/CartProductSection';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CartSectionHeader from '../../components/CartProductSection/CartSectionHeader';
import CartTotalSection from '../../components/CartProductSection/CartTotalSection';

const Cart = () => {
  const [cartData, setCartData] = useState<any>([]);
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
            
        
            res.data.qty = x.quantity;
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
              {productsData?.map((product: { _id: any; qty: any; name: any; _Id: any; price: any; img: any; }, index:number) => {
                const { _id, qty, name, _Id, price, img } = product;
                console.log("Cart product data", product)
                return (
                  <ol className={styles.cartParent} key={index}>
                    <CartProductSection
                      img={img}
                      name={name}
                      price={price*qty}
                      shortdesc={''}
                      qty={qty}
                      _Id={_id}
                    />
                  </ol>
                );
              })}
            </div>
          )}
        </div>
        <CartTotalSection 
            total={0}/>
        <div className={styles.order_form}></div>
      </article>
    </main>
  );
};

export default Cart;
