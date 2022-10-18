import React from 'react';
import Btn from '../Buttons/Btn';
import Text from '../Text/Text';

interface ICartOrderTotalProps {
  productTotal: number;
}

const Ordertotal = ({ productTotal }: ICartOrderTotalProps) => {
  return (
    <section className='order-total'>
      <div className='order-total-section'>
        <div className='order-total-area'>
          <span className='order-total-info'>
            <Text fontSize='p' fontWeight='font-light' text='Produkt total' />
          </span>
          <span className='order-total-pris font-medium'>
            <Text fontSize='p' fontWeight='font-medium' text='100 KR' />
          </span>
        </div>
        <hr className='solid' />
        <div className='order-total-area'>
          <span className='order-total-info'>
            <Text fontSize='p' fontWeight='font-light' text='Frakt' />
          </span>
          <span className='order-total-pris'>
            <Text fontSize='p' fontWeight='font-medium' text='60KR' />
          </span>
        </div>
        <hr className='solid2' />
        <div className='order-total-area'>
          <span className='order-total-info'>
            <Text fontSize='h5' fontWeight='font-bold' text='Total' />
          </span>
          <span className='order-total-pris'>
            <Text fontSize='h5' fontWeight='font-bold' text='160KR' />
          </span>
        </div>
        <div className='top-Bottom-space'>
          <Btn bgcolor='dark-full' text='CHECKOUT' />
        </div>
      </div>
    </section>
  );
};

export default Ordertotal;
