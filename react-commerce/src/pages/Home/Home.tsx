import ProductCard from '../../components/ProductCard/ProductCard';
import Slider from '../../components/Slider/Slider';
import styles from './Home.module.scss';
import '../../Style.css';
import { Data } from '../../components/Data/Data';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const n = 5;
  return (
    <>
      <main>
        <Slider />
        <article className={styles.container}>
          <section className={styles.container__inner}>
            <section className={styles.ProductsParent}>
              {Data.map((item, index) => {
                return <ProductCard key={index} {...item} />;
              })}
            </section>
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;
