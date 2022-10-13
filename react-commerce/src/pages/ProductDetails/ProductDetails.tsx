import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/ProductPage/ProductPage';
import { axiosInstance } from '../../axios/axiosHttps';

const ProductDetails = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState<any>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get(`/products/find/${params?.id}`)
        .then((res) => {
          setProductDetails(res?.data);
        })
        .catch((err) => console.log(err));
    })();
    (async () => {
      await axiosInstance
        .get(`/carts`)
        .then((res) => {
          let search = res?.data.find((x: any) => x?.productId === params?.id);
          console.log(search);
          if (search === undefined) {
            setIsSelected(false);
            setQuantity(1);
          } else {
            setIsSelected(true);
            setQuantity(search?.quantity);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, [params?.id]);

  const onClick = async (quantity: number) => {
    console.log('cart item button');
    if (!isSelected) {
      console.log('add item');
      await axiosInstance({
        url: '/carts',
        method: 'post',
        data: {
          userId: '123qweasdzxc',
          productId: params?.id,
          quantity: quantity,
        },
      })
        .then((res) => {
          console.log('successfully added to cart');
          setIsSelected(true);
        })
        .catch((err) => {
          setIsSelected(false);
          console.log(err);
        });
    } else {
      console.log('remove item');
      await axiosInstance
        .delete(`/carts/${params?.id}`)
        .then((res) => {
          console.log('successfully removed item from cart');
          setIsSelected(false);
          setQuantity(1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const { desc } = productDetails;
  return (
    <div className='sida'>
      {productDetails?.length === 0 ? (
        <div className='text-center my-5 fs-1 text-center'>
          Loading, please wait
        </div>
      ) : (
        <ProductPage
          artnr={132423231}
          ean={132423231}
          shortdesc={desc}
          {...productDetails}
          isSelected={isSelected}
          quantity={quantity}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default ProductDetails;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Data, IData } from '../../components/Data/Data';
// import ProductPage from '../../components/ProductPage/ProductPage';

// const ProductDetails = () => {
//   let params = useParams();

//   let results: IData = Data.find((x) => x.ean === Number(params.id))!;

//   return (
//     <div className='sida'>
//       <ProductPage {...results} isSelected={false} />
//     </div>
//   );
// };

// export default ProductDetails;
