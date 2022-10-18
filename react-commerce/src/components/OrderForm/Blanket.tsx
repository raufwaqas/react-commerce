import React from 'react';
import { payment } from '../Data/DataFooter';
import styles from '../Footer/Footer.module.scss';
import style from './Blanket.module.scss';

const Blanket = () => {
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
                    <i className='fa fa-user'></i> Fullständiga namn
                  </label>
                  <input
                    type='text'
                    id='fname'
                    name='Namn'
                    placeholder='John M. Doe'
                    required
                    aria-required='true'
                  />
                  <label htmlFor='email'>
                    <i className='fa fa-envelope'></i> E-post
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='john@example.com'
                    required
                    aria-required='true'
                  />
                  <label htmlFor='adr'>
                    <i className='fa fa-address-card-o'></i> Adress
                  </label>
                  <input
                    type='text'
                    id='adr'
                    name='adress'
                    placeholder='Adress'
                    required
                    aria-required='true'
                  />
                  <label htmlFor='city'>
                    <i className='fa fa-institution'></i> Postort
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='Stockholm'
                    required
                    aria-required='true'
                  />

                  <div className={style.row}>
                    <div className={style.col_50}>
                      <label htmlFor='state'>Region</label>
                      <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='Stockholm'
                        required
                        aria-required='true'
                      />
                    </div>
                    <div className={style.col_50}>
                      <label htmlFor='postnummer'>Postnummer</label>
                      <input
                        type='text'
                        id='zip'
                        name='Postnummer'
                        placeholder='100 01'
                        required
                        aria-required='true'
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
