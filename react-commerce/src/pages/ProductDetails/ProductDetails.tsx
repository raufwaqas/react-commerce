import React from 'react';
import { useParams } from 'react-router-dom';
import { Data, IData } from '../../components/Data/Data';
import ProductPage from '../../components/ProductPage/ProductPage';

const ProductDetails = () => {
  let params = useParams();

  let results: IData = Data.find((x) => x.ean === Number(params.id))!;

  return (
    <div className='sida'>
      <ProductPage {...results} isSelected={false} />
    </div>
  );
};

export default ProductDetails;
