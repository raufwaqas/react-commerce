import React, { useState } from 'react';
import Text from '../Text/Text';
import '../Data/Data';
import { Data } from '../Data/Data';
import Btn from '../Buttons/Btn';

interface ICartProductSectionProps {
  artnr: number;
  img: string;
  name: string;
  price: number;
  shortdesc: string;
  qty: number;
  total: number;
  totalPris: number;
}
const CartProductSection = ({
  artnr,
  img,
  name,
  price,
  shortdesc,
  qty,
  total,
}: ICartProductSectionProps) => {
  let [quantity, setQuantity] = useState(qty);

  return (
    <section className='container-main-product'>
      <div className='container-sub'>
        <div className='container-title-img'>
          <div className='container-img group1'>
            <img
              className='container-product-img-small  '
              src={img}
              alt={`${name}`}
              aria-label={`${shortdesc}`}
            />
          </div>
          <div className='container-title-section'>
            <div className='container-title-txt'>
              <Text
                fontSize='pcard-title'
                fontWeight='font-light'
                text={`${name}`}
              />
            </div>
            <div className='container-sku'>
              <Text
                fontSize='small-text'
                fontWeight='font-extra-light '
                text={`SKU: ${artnr}`}
              />
            </div>
          </div>
        </div>
        <div className='container-price'>
          <div className='container-pris'>
            <Text fontSize='p' fontWeight='font-light' text={`${price} KR`} />
          </div>
        </div>
        <div className='container-quantity'>
          <div className='container-qty'>
            <Btn
              onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
              bgcolor='small-light-grey'
              text='<'
            />
            <Text fontSize='p' fontWeight='font-light' text={`${quantity}`} />
            <Btn
              onClick={() => setQuantity(quantity + 1)}
              bgcolor='small-dark-grey'
              text='>'
            />
          </div>
        </div>
        <div className='container-total'>
          <div className='container-total-price'>
            <Text
              fontSize='p'
              fontWeight='font-bold'
              text={`${quantity * price} KR`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProductSection;
// {`${total} KR`}
// {
//   `${total} KR`;
// }
