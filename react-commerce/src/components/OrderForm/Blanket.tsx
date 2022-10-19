import React, { useState, FC } from 'react';
import { payment } from '../Data/DataFooter';
import styles from '../Footer/Footer.module.scss';
import style from './Blanket.module.scss';
import { axiosInstance } from '../../axios/axiosHttps';

const Blanket: FC = () => {
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const cart = (await axiosInstance.get(`/carts`)).data;
    const userId = cart[0].userId;

    let amount = 0;
    for (let item of cart) {
      const res = await axiosInstance.get(`/products/find/${item?.productId}`);
      amount += res.data.price;
    }

    const products = cart.map((item: any) => {
      return { productId: item.productId, quantity: item.quantity };
    });
    const orderAddress = {
      address,
      postcode,
      city,
      region,
    };

    const order = {
      userId,
      products,
      name,
      email,
      amount,
      address: orderAddress,
    };

    axiosInstance
      .post(`/orders`, order)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className={style.row}>
        <div className={style.col_75}>
          <div className={style.container}>
            <form>
              <div className={style.row}>
                <div className={style.col_50}>
                  <h3>Leveransuppgifter</h3>
                  <label htmlFor='fname'>
                    <i></i> Fullständiga namn
                  </label>
                  <input
                    type='text'
                    id='fname'
                    name='name'
                    placeholder='John M. Doe'
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                  <label htmlFor='email'>
                    <i></i> E-post
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='john@example.com'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  <label htmlFor='adr'>
                    <i></i> Adress
                  </label>
                  <input
                    type='text'
                    id='adr'
                    name='adress'
                    placeholder='Adress'
                    value={address}
                    onChange={(e: any) => setAddress(e.target.value)}
                  />
                  <label htmlFor='city'>
                    <i></i> Postort
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='Stockholm'
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  />

                  <div className={style.row}>
                    <div className={style.col_50}>
                      <label htmlFor='state'>Region</label>
                      <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='Stockholm'
                        value={region}
                        onChange={(e: any) => setRegion(e.target.value)}
                      />
                    </div>
                    <div className={style.col_50}>
                      <label htmlFor='postnummer'>Postnummer</label>
                      <input
                        type='text'
                        id='zip'
                        name='Postnummer'
                        placeholder='10001'
                        value={postcode}
                        onChange={(e: any) => setPostcode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className={style.col_50}>
                  <h3>Betalsätt</h3>
                  <label htmlFor='fname'>Betalning Metod</label>
                  <div className={style.icon_container}>
                    <input type='radio' id='visa' name='visa' value='HTML' />
                    <img
                      src={payment[0].icon}
                      alt={payment[0].title}
                      aria-label={payment[0].title}
                      className={styles.payment_icons}
                    />
                    <input type='radio' id='visa' name='visa' value='HTML' />
                    <img
                      src={payment[1].icon}
                      alt={payment[1].title}
                      aria-label={payment[1].title}
                      className={styles.payment_icons}
                    />

                    <input type='radio' id='visa' name='visa' value='HTML' />
                    <img
                      src={payment[2].icon}
                      alt={payment[2].title}
                      aria-label={payment[2].title}
                      className={styles.payment_icons}
                    />

                    <input type='radio' id='visa' name='visa' value='HTML' />
                    <img
                      src={payment[3].icon}
                      alt={payment[3].title}
                      aria-label={payment[3].title}
                      className={styles.payment_icons}
                    />
                  </div>
                  <label htmlFor='cname'>Name on Card</label>
                  <input
                    type='text'
                    id='cname'
                    name='cardname'
                    placeholder='John More Doe'
                  />
                  <label htmlFor='ccnum'>Credit card number</label>
                  <input
                    type='text'
                    id='ccnum'
                    name='cardnumber'
                    placeholder='1111-2222-3333-4444'
                  />
                  <label htmlFor='expmonth'>Exp Month</label>
                  <input
                    type='text'
                    id='expmonth'
                    name='expmonth'
                    placeholder='September'
                  />
                  <div className={style.row}>
                    <div className={style.col_50}>
                      <label htmlFor='expyear'>Utgångsdatum</label>
                      <input
                        type='text'
                        id='expyear'
                        name='expyear'
                        placeholder='2025'
                      />
                    </div>
                    <div className={style.col_50}>
                      <label htmlFor='cvv'>CVV</label>
                      <input
                        type='text'
                        id='cvv'
                        name='cvv'
                        placeholder='333'
                      />
                    </div>
                  </div>
                </div>
                <input
                  type='submit'
                  onClick={onSubmit}
                  value='Slutför köp'
                  className={style.btn}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blanket;
