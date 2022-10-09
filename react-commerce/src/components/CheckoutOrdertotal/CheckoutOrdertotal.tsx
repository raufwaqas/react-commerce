import React from 'react';

interface ICheckoutOrdertotal {
  productTotal: number;
}

const Ordertotal = ({ productTotal }: ICheckoutOrdertotal) => {
  return (
    <div className='order-total'>
      <div className='order-total-section'>
        <div className='order-total-area'>
          <span className='order-total-info font-light'>Produckt total</span>
          <span className='order-total-pris font-medium'>100KR</span>
        </div>
        <hr className='solid' />
        <div className='order-total-area'>
          <span className='order-total-info font-light'>Moms</span>
          <span className='order-total-pris font-medium'>20KR</span>
        </div>
        <hr className='solid' />
        <div className='order-total-area'>
          <span className='order-total-info font-light'>Frakt</span>
          <span className='order-total-pris font-medium'>60KR</span>
        </div>
        <hr className='solid2' />
        <div className='order-total-area'>
          <span className='order-total-info font-medium'>Total med moms</span>
          <span className='order-total-pris font-bold'>160KR</span>
        </div>
      </div>
    </div>
  );
};

export default Ordertotal;
