import React, { FC } from 'react';
import { ImageGalleryProps } from '../../../../types';

const ImageGallery: FC<ImageGalleryProps> = ({
  img,
  name,
  colorgroup,
  shortdesc,
}) => {
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
