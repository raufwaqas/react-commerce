import React from 'react';
import ImageGallery from './ImageGallery';
import ProductTitleSection from './ProductTitleSection';
import styles from './ProductPage.module.scss';
import { IData, Data } from '../../components/Data/Data';
import { socialmedia } from '../Data/social';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { NavItem } from '../Data/DataHeader';

const ProductPage = ({
  artnr,
  img,
  name,
  price,
  volume,
  desc,
  shortdesc,
  ingredients,
  isSelected,
  colorgroup,
  ean,
  slug,
}: IData) => {
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
              isSelected={isSelected}
              qty={1}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
