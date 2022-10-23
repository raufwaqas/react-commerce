import React, { FC } from 'react';
import { Carousel } from '../Data/SliderDB';
import Btn from '../Buttons/Btn';
import { Link } from 'react-router-dom';

const Slider: FC = () => {
  return (
    <section
      id='carouselExampleCaptions'
      className='carousel slide'
      data-bs-ride='false'
      aria-label='Product presentation area'
    >
      <div
        className='carousel-indicators'
        aria-label='Product presentation area'
      >
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='product presentation'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
      </div>
      <div className='carousel-inner'>
        <div className={`carousel-item active ${Carousel[0].colorgroup}`}>
          <img
            src={Carousel[0].img}
            className='d-block slide-right'
            alt='bilder av model'
          />
          <div className='carousel-caption d-md-block'>
            <h2>{Carousel[0].name}</h2>
            <p className='slider-short-Desc'>{Carousel[0].shortdesc}</p>
            <img
              src={Carousel[0].produktbild}
              className='pbild'
              alt={`bilder av ${Carousel[0].name}`}
            />
            <br />
            <Link to={`/produkt/6344670c640a2b589120ca4d`}>
              <Btn bgcolor='primary' text='KÖP NU' aria-label='köp nu' />
            </Link>
          </div>
        </div>
        <div className={`carousel-item ${Carousel[1].colorgroup}`}>
          <img
            src={Carousel[1].img}
            className='d-block slide-right'
            alt={Carousel[1].name}
          />
          <div className='carousel-caption d-none d-md-block'>
            <h2>{Carousel[1].name}</h2>
            <p>{Carousel[1].shortdesc}</p>
            <img
              src={Carousel[1].produktbild}
              className='pbild'
              alt={Carousel[1].name}
            />
            <br />
            <Link to={`/produkt/63446840640a2b589120ca8d`}>
              <Btn bgcolor='primary' text='KÖP NU' />
            </Link>
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>

      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </section>
  );
};

export default Slider;
