import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.scss';

import '../../Style.css';
import { axiosInstance } from '../../axios/axiosHttps';
import { useState, useEffect, SetStateAction } from 'react';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get('/products')
        .then((res: { data: SetStateAction<never[]> }) => {
          console.log(res?.data);
          setProductsData(res?.data);
        })
        .catch((err: any) => console.log(err));
    })();
  }, []);

  return (
    <>
      <main>
        <Slider />
        <div
          className={`${styles.om_oss_block_om} ${styles.top_margin}`}
          aria-label='Vällkommen till'
        >
          <dfn className={styles.rubrik} aria-label='Company Salogan'>
            Välkomment Till
          </dfn>
          <label className={styles.title_main}>
            <h1 aria-label='W&A KLINIQUE'>W&A KLINIQUE</h1>
          </label>
          <label className={styles.om_oss_kortbeskrv}>
            <p aria-label='Ett liv i hälsa'>Ett liv i hälsa</p>
          </label>
        </div>
        <article className={styles.product_container}>
          <div></div>
          <section className='container__inner'>
            {productsData?.length === 0 ? (
              <div className='text-center my-5 fs-1 text-center'>
                Loading, please wait
              </div>
            ) : (
              <section className={styles.ProductsParent}>
                {productsData?.slice(0, 5).map((item) => {
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
                      id={_id}
                      key={_id}
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
            )}
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;

// const Home = () => {
//   const n = 5;
//   return (
//     <>
//       <main>
//         <Slider />
//         <article className={styles.container}>
//           <section className={styles.container__inner}>
//             <section className={styles.ProductsParent}>
//               {Data.map((item, index) => {
//                 return <ProductCard key={index} {...item} />;
//               })}
//             </section>
//           </section>
//         </article>
//       </main>
//     </>
//   );
// };

// export default Home;
