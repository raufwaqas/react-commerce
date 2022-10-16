import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import Btn from '../Buttons/Btn';
import { socialmedia } from '../Data/social';
import { useState } from 'react';
import { IProductTitleSectionProps } from '../../../../types';

const ProductTitleSection: FC<IProductTitleSectionProps> = ({
  name,
  artnr,
  price,
  shortdesc,
  isSelected,
  ean,
  volume,
  qty,
  onClick,
}) => {
  const [selected, setSelected] = useState(isSelected);
  let [quantity, setQuantity] = useState(qty);
  return (
    <section
      className='product-section-main'
      aria-label='Product information section'
      role='contentinfo'
    >
      <div className='product-section-area'>
        <div className='product-Section-Title' aria-label='Product Title'>
          <Text fontSize='pcard-title' text={name} aria-label={name} />
        </div>
        <div
          className='product-Section-artnr'
          aria-label='Product Article number'
        >
          <Text fontSize='small-text' text={`ArtNr: ${artnr}`} />
        </div>
        <div className='product-Section-artnr' aria-hidden='true'>
          <Text fontSize='ean small-text ' text={`EAN: ${ean}`} />
        </div>
        <div className='product-Section-Price' aria-label='Product price'>
          <Text
            fontSize='h2'
            fontWeight='font-bold'
            text={`${price} KR`}
            aria-label={`${price} KR`}
          />
        </div>
        <div
          className='product-Section-shortdesc'
          aria-label='Product short description'
        >
          <Text fontSize='p' fontWeight='font-light' text={shortdesc} />
        </div>
        <div
          className='volume'
          aria-label='Product Volume in milliliter or grams'
        >
          <br aria-hidden='true' />
          <p aria-label={volume}>Volume: {volume}</p>
        </div>
        <div className='socialmedia'>
          Follow Us:
          <a href={socialmedia[0].link}>
            <img
              src={socialmedia[0].url}
              alt={socialmedia[0].title}
              className='socialIcons'
            />
          </a>
          <a href={socialmedia[1].link}>
            <img
              src={socialmedia[1].url}
              alt={socialmedia[1].title}
              className='socialIcons'
            />
          </a>
          <a href={socialmedia[2].link}>
            <img
              src={socialmedia[2].url}
              alt={socialmedia[2].title}
              className='socialIcons'
            />
          </a>
          <a href={socialmedia[3].link}>
            <img
              src={socialmedia[3].url}
              alt={socialmedia[3].title}
              className='socialIcons'
            />
          </a>
          <hr aria-hidden='true' />
        </div>
        <div className='container-quantity'>
          <div className='container-qty'>
            <Btn
              onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
              bgcolor='small-light-grey'
              text='<'
            />
            <Text
              fontSize='p'
              fontWeight='font-light'
              text={`${quantity}`}
              aria-label='Product Quantity'
            />

            <Btn
              onClick={() => setQuantity(quantity + 1)}
              bgcolor='small-dark-grey'
              text='>'
            />
          </div>
        </div>
        <div className='product-Section-cart-button' aria-label='Buy Now'>
          {selected ? (
            <Btn
              bgcolor='light'
              onClick={() => {
                setSelected(false);
                onClick(quantity);
              }}
              text='Ta bort'
            />
          ) : (
            <Link to='/cart'>
              <Btn
                bgcolor='dark'
                leftIcon='bi-basket'
                onClick={() => {
                  setSelected(true);
                  onClick(quantity);
                }}
                text='KÖP NU'
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTitleSection;
