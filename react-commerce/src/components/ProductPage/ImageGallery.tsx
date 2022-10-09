import { findAllByLabelText, findByTitle } from '@testing-library/react';
import React from 'react';
import { Data, IData } from '../Data/Data';
// import '../Data/Data';

interface IImageGalleryProps {
  img: string;
  name: string;
  shortdesc?: string;
  colorgroup: string;
}

const ImageGallery = ({
  img,
  name,
  colorgroup,
  shortdesc,
}: IImageGalleryProps | IData) => {
  return (
    <div className='Product-page-image'>
      <div className='imge-gallery'>
        <div className={`main-image ${colorgroup}`}>
          <img
            src={img}
            alt={`${name}`}
            aria-label={shortdesc}
            className='product-img'
          />
        </div>
        <div className={`producnt-thumbnail ${colorgroup}`}>
          <img
            src={img}
            alt={`${name}`}
            aria-label={shortdesc}
            className='thumbnail-image'
          />
        </div>
        <div className={`producnt-thumbnail ${colorgroup}`}>
          {' '}
          <img
            src={img}
            alt={`${name}`}
            aria-label={shortdesc}
            className='thumbnail-image'
          />
        </div>
        <div className={`producnt-thumbnail ${colorgroup}`}>
          {' '}
          <img
            src={img}
            alt={`${name}`}
            aria-label={shortdesc}
            className='thumbnail-image'
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
