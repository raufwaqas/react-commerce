/* eslint-disable jsx-a11y/role-has-required-aria-props */
import ProductCard from '../../components/ProductCard/ProductCard';
import Slider from '../../components/Slider/Slider';
import styles from './Produkt.module.scss';
import { NavItem } from '../../components/Data/DataHeader';
import '../../Style.css';
import { Data } from '../../components/Data/Data';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';

const Home = () => {
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
          <section
            className={styles.container__inner}
            aria-label='See all products'
          >
            <section className={styles.ProductsParent} role='option'>
              {Data.map((item, index) => {
                return <ProductCard key={index} {...item} />;
              })}
            </section>
          </section>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
