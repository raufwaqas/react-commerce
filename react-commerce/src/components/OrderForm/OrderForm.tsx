import React, { FC } from 'react';
import { OrderFormProps } from '../../../../types';
import Btn from '../Buttons/Btn';

const FormData: FC<OrderFormProps> = ({
  FullName,
  Email,
  MobileNumber,
  StreetAdress,
  City,
  Land,
  ZipCode,
  NameOnCard,
  CVVNumber,
  CardNumber,
  ValidUntil,
}) => {
  const handleSubmit = () => {};
  return (
    <>
      <div id=''>
        <form className='personal' onSubmit={() => handleSubmit}>
          <div className='container'>
            <div className='ipnutcontainter full'>
              <label htmlFor='' className='form-title'>
                Personal Information
              </label>
            </div>
            <div className='ipnutcontainter full'>
              <input
                type='text'
                required
                aria-required='true'
                name='Full Name'
                className='forms full'
                id='firstName'
                value={FullName}
                placeholder='Full Name'
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                type='text'
                required
                aria-required='true'
                className='forms full'
                id='email'
                name='E Mail'
                value={Email}
                placeholder='E-mail'
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                type='text'
                required
                aria-required='true'
                name='Mobile Number'
                className='forms full'
                id='mobileNo'
                placeholder='Mobile Number'
                value={MobileNumber}
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                type='text'
                required
                aria-required='true'
                name='Street Adress'
                className='forms full'
                id='address'
                value={StreetAdress}
                placeholder='Street Address'
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                type='text'
                required
                aria-required='true'
                name='City'
                className='forms full'
                id='city'
                value={City}
                placeholder='City'
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                type='text'
                required
                aria-required='true'
                name='Zip Code'
                className='forms full'
                id='zip'
                value={ZipCode}
                placeholder='Zip Code'
              />
            </div>
            <div className='ipnutcontainter half'>
              <select
                className='forms full'
                id='country'
                name='Choose your country'
                required
                aria-required='true'
              >
                <option value='' className='darkbutton'>
                  Choose Country
                </option>
                <option>Sweden</option>
                <option>Finland</option>
                <option>Denmark</option>
                <option>Norway</option>
              </select>
            </div>
            <div className='ipnutcontainter full'>
              <label htmlFor='' className='form-title full'>
                Payment Method
              </label>

              <input name='card' value='' id='credit' type='radio' />
              <label htmlFor='credit' className='radio-button'>
                Visa
              </label>

              <input name='card' id='debit' type='radio' />
              <label htmlFor='debit' className='radio-button'>
                Master
              </label>

              <input id='paypal' name='card' type='radio' />
              <label className='radio-button' htmlFor='paypal'>
                PayPal
              </label>
            </div>
            <div className='ipnutcontainter half'>
              <input
                required
                aria-required='true'
                name='Card Number'
                type='text'
                className='forms full'
                id='card-number'
                placeholder='Card Number'
                value={CardNumber}
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                required
                aria-required='true'
                name='Card Holder Name'
                type='text'
                className='forms full'
                id='card-name'
                value={NameOnCard}
                placeholder='Card Holder Name'
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                required
                aria-required='true'
                name='Month and Year'
                type='text'
                className='forms full'
                id='valid-until'
                placeholder='Month/Year'
                value={ValidUntil}
              />
            </div>
            <div className='ipnutcontainter half'>
              <input
                required
                aria-required='true'
                aria-labelledby='CVV Code'
                name='CVV Code'
                type='text'
                className='forms full'
                id='cvv-number'
                placeholder='3 Digit code'
                value={CVVNumber}
              />
            </div>
            <Btn
              bgcolor='dark'
              type='submit'
              className='ipnutcontainter '
              text='Skicka'
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default FormData;
