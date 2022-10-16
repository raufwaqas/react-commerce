import React, { FC } from 'react';
import ImageGallery from './ImageGallery';
import ProductTitleSection from './ProductTitleSection';
import styles from './ProductPage.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { NavItem } from '../Data/DataHeader';
import { IProductPageProps } from '../../../../types';
import ProductInfo from './ProductInfo';

const ProductPage: FC<IProductPageProps> = ({
  artnr,
  img,
  name,
  price,
  volume,
  colorgroup,
  ean,
  shortdesc,
  isSelected,
  onClick,
  quantity,
  desc,
  ingredients,
}) => {
  return (
    <main className='sida' aria-label='Product page'>
      <Breadcrumb
        title='Produkt'
        path={NavItem[0].name}
        pagepath={NavItem[1].name}
        sectionpath={NavItem[1].name}
      />

      <section className={styles.productPage} aria-label='Product section'>
        <div className='product-page-image'>
          <div>
            <ImageGallery name={name} colorgroup={colorgroup} img={img} />
          </div>
        </div>
        <div className='product-page-content'>
          <div>
            <ProductTitleSection
              artnr={artnr}
              ean={ean}
              name={name}
              price={price}
              shortdesc={shortdesc}
              volume={volume}
              qty={quantity}
              isSelected={isSelected}
              onClick={onClick}
            />
          </div>
        </div>
      </section>
      <ProductInfo desc={desc} ingredient={ingredients} />
    </main>
  );
};

export default ProductPage;
