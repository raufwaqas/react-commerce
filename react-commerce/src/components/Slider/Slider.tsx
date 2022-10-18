import React from 'react';
import { Carousel } from '../Data/SliderDB';
import Btn from '../Buttons/Btn';

const Slider: React.FC = () => {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide'
      data-bs-ride='false'
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label={Carousel[0].name}
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
            alt={Carousel[0].name}
          />
          <div className='carousel-caption d-md-block'>
            <h2>{Carousel[0].name}</h2>
            <h5>{Carousel[0].shortdesc}</h5>
            <img
              src={Carousel[0].produktbild}
              className='pbild'
              alt={Carousel[0].name}
            />
            <br />
            <Btn bgcolor='primary' onClick={() => {}} text='KÖP NU' />
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
            <h5>{Carousel[1].shortdesc}</h5>
            <img
              src={Carousel[1].produktbild}
              className='pbild'
              alt={Carousel[1].name}
            />
            <br />
            <Btn bgcolor='primary' onClick={() => {}} text='KÖP NU' />
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
    </div>
  );
};

export default Slider;