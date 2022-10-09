import React from 'react';
import Text from '../Text/Text';

interface ICartSectionHeaderProps {
  cartHeader: string;
}

const CartSectionHeader = ({ cartHeader }: ICartSectionHeaderProps) => {
  return (
    <section className='container-mian'>
      <div className='container-sub'>
        <div className='container-product'>
          <Text fontSize='p' fontWeight='font-light' text='Produkt' />
        </div>
        <div className='container-price'>
          <div className='container-pris'>
            <Text fontSize='p' fontWeight='font-light' text='Pris' />
          </div>
        </div>
        <div className='container-quantity'>
          <div className='container-qty'>
            <Text fontSize='p' fontWeight='font-light' text='Quantity' />
          </div>
        </div>
        <div className='container-total'>
          <div className='container-total-price'>
            <Text fontSize='p' fontWeight='font-light' text='Total' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSectionHeader;
