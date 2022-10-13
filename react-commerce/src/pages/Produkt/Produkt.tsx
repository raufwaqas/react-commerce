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
            </section>
          )}
        </article>
      </main>
    </>
  );
};

export default Home;

// /* eslint-disable jsx-a11y/role-has-required-aria-props */
// import ProductCard from '../../components/ProductCard/ProductCard';
// import Slider from '../../components/Slider/Slider';
// import styles from './Produkt.module.scss';
// import { NavItem } from '../../components/Data/DataHeader';
// import '../../Style.css';
// import { Data } from '../../components/Data/Data';
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
// import Footer from '../../components/Footer/Footer';

// const Home = () => {
//   return (
//     <>
//       <main aria-label='Product page'>
//         <Breadcrumb
//           title={NavItem[1].name}
//           path={NavItem[0].name}
//           pagepath={NavItem[1].name}
//           sectionpath={NavItem[1].slug}
//         />
//         <article className={styles.container} aria-label='Products'>
//           <section
//             className={styles.container__inner}
//             aria-label='See all products'
//           >
//             <section className={styles.ProductsParent} role='option'>
//               {Data.map((item, index) => {
//                 return <ProductCard key={index} {...item} />;
//               })}
//             </section>
//           </section>
//         </article>
//       </main>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Home;
