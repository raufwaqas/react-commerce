import Text from '../Text/Text';
import { Data, IData } from '../Data/Data';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = ({
  img,
  name,
  price,
  shortdesc,
  label,
  colorgroup,
  ean,
  slug,
}: IData) => {
  let navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/produkt/${ean}`)}
      className={styles.productItem}
      aria-label={`${name}`}
      role='link'
    >
      <div
        className={`${styles.product__Img__Area} ${colorgroup}`}
        aria-label={`Picture of ${name}`}
        role='img'
      >
        <span className={styles.labelTag} aria-hidden='true'>
          Ny
        </span>
        <div className='p_cart'>
          <span className='besok'>
            <img
              src='https://d3studio.se/react/img/icons/visit.svg'
              alt='Visa Produkt'
            />
          </span>
          <span className='add_to_cart'>
            <img
              src='https://d3studio.se/react/img/icons/add-to-cart.svg'
              alt='Add to cart'
            />
          </span>
        </div>
        <img
          className={`${styles.product__img} img-fluid besok add_to_cart`}
          src={img}
          alt={`${name}`}
          aria-label={`${shortdesc}`}
        />
      </div>
      <div
        className={styles.productItem__content}
        aria-label='Product name, short description and price area'
      >
        <span aria-label='Product Name'>
          <Text
            fontSize={styles.pcard_title}
            text={`${name}`}
            aria-label={`${name}`}
          />
        </span>
        <span aria-label='Product short description'>
          <Text
            fontSize='small-text'
            text={`${shortdesc}`}
            aria-label={`${shortdesc}`}
          />
        </span>
        <span aria-label='Product price'>
          <Text
            fontSize='h4'
            fontWeight='font-bold'
            text={`${price} Kr`}
            aria-label={`${price} Kr`}
          />
        </span>
      </div>
    </section>
  );
};

export default ProductCard;
