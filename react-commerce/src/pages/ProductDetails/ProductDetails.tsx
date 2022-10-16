import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/ProductPage/ProductPage';
import { nanoid } from 'nanoid';
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
          // console.log(search);
          if (search === undefined) {
            setIsSelected(false);
            setQuantity(quantity);
          } else {
            setIsSelected(true);
            setQuantity(search?.quantity);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, [params?.id, quantity]);

  const onClick = async (
    quantity: number,
    img: string,
    price: number,
    title: String
  ) => {
    // console.log('cart item button');
    if (!isSelected) {
      // console.log('add item');
      await axiosInstance({
        url: '/carts',
        method: 'post',
        data: {
          userId: nanoid(),
          productId: params?.id,
          quantity: quantity,
          img: img,
          price: price,
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
      // console.log('remove item');
      await axiosInstance
        .delete(`/carts/${params?.id}`)
        .then((res) => {
          console.log('successfully removed item from cart');
          setIsSelected(false);
          setQuantity(quantity);
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
          artnr={''}
          ean={''}
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
