import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Produkt.module.scss';
import { NavItem } from '../../components/Data/DataHeader';
import '../../Style.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { axiosInstance } from '../../axios/axiosHttps';
import { useState, useEffect } from 'react';

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get('/products')
        .then((res) => {
          console.log(res?.data);
          setProductsData(res?.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <>
      <main aria-label='Product page'>
        <Breadcrumb
          title={NavItem[1].name}
          path={NavItem[0].name}
          pagepath={NavItem[1].name}
          sectionpath={NavItem[1].slug}
        />
        <article className={styles.container} aria-label='Products'>
          {productsData?.length === 0 ? (
            <div className='text-center my-5 fs-1 text-center'>
              Loading, please wait
            </div>
          ) : (
            <section
              className={styles.container__inner}
              aria-label='See all products'
            >
              <section className={styles.ProductsParent}>
                {productsData?.map((item, index) => {
                  let {
                    _id,
                    img,
                    name,
                    price,
                    colorgroup,
                    shortdesc,
                    label,
                    qty,
                  } = item;
                  return (
                    <ProductCard
                      key={_id}
                      id={_id}
                      name={name}
                      img={img}
                      price={price}
                      colorgroup={colorgroup}
                      shortdesc={shortdesc}
                      label={label}
                      qty={qty}
                    />
                  );
                })}
              </section>
            </section>
          )}
        </article>
      </main>
    </>
  );
};

export default Home;
