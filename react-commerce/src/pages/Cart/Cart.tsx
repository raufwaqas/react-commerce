import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { axiosInstance } from '../../axios/axiosHttps';
import { NavItem } from '../../components/Data/DataHeader';
import CartProductSection from '../../components/CartProductSection/CartProductSection';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CartSectionHeader from '../../components/CartProductSection/CartSectionHeader';
import CartTotalSection from '../../components/CartProductSection/CartTotalSection';
import Btn from '../../components/Buttons/Btn';
import { Link } from 'react-router-dom';
import { store } from '../../store/index';

const Cart = () => {
  const [cartData, setCartData] = useState<any>([]);
  const [productsData, setProductData] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [updateCart, setUpdateCart] = useState(false);

  const calcTotal = (data: any) => {
    let total = 0;
    for (let u = 0; u < data.length; u++) {
      const item = data[u];
      total += item.price * item.qty;
    }
    setTotal((prev: any) => total);
  };

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => {
          setCartData(res?.data);
          store.cartState.setCartCount(res?.data.length || 0);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  const handleCounter = (id: string, quant: number): void => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].productId === id) {
        axiosInstance
          .put(`/carts/${cartData[i]._id}`, { ...cartData[i], quantity: quant })
          .then(async (res) => {
            const newCart = cartData;
            newCart[i] = res.data;
            setCartData(newCart);
            setUpdateCart((prev: any) => !prev);
            // Update cart count (in case quantity changes affect count)
            const cartRes = await axiosInstance.get(`/carts`);
            store.cartState.setCartCount(cartRes?.data.length || 0);
          })
          .catch((err) => console.log(err));
        break;
      }
    }
  };

  const onDelete = () => {
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => {
          setCartData(res?.data);
          store.cartState.setCartCount(res?.data.length || 0);
        })
        .catch((err) => console.log(err));
    })();
  };

  useEffect(() => {
    (async () => {
      if (cartData.length === 0) return;
      let arr: any = [];
      for (var item of cartData) {
        const res = await axiosInstance.get(
          `/products/find/${item?.productId}`
        );

        res.data.qty = item.quantity;
        arr.push(res.data);
      }

      console.log(arr);
      setProductData(arr);
      calcTotal(arr);
    })();
  }, [cartData, updateCart]);

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
              Din vagn är tom
            </div>
          ) : (
            <div>
              {productsData.map(
                (
                  product: {
                    _id: any;
                    qty: any;
                    name: any;
                    price: any;
                    img: any;
                  },
                  index: number
                ) => {
                  const { _id, qty, name, price, img } = product;
                  // console.log('Cart product data', product);

                  return (
                    <ol className={styles.cartParent} key={index}>
                      <CartProductSection
                        _Id={_id}
                        name={name}
                        img={img}
                        qty={qty}
                        price={price}
                        shortdesc={''}
                        total={price}
                        onDelete={onDelete}
                        handleCounter={(id: string, quant: number) => {
                          handleCounter(id, quant);
                        }}
                      />
                    </ol>
                  );
                }
              )}
            </div>
          )}
        </div>
        <CartTotalSection total={`${total}KR`} />
        <div className={styles.checkout_buttons}>
          <Link to='/produkt'>
            <Btn
              bgcolor='dark'
              leftIcon='bi bi-caret-left-fill'
              text='Fortsätt handla'
            />
          </Link>
          <Link to='/checkout'>
            <Btn bgcolor='light' rightIcon='bi bi-basket2' text='KASSA' />
          </Link>
        </div>
        <div className={styles.order_form}></div>
      </article>
    </main>
  );
};

export default Cart;
