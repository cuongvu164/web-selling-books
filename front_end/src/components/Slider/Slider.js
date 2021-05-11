import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const styleImg = {
    objectFit: 'cover',
    maxHeight: '615px'
  }


  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/bg/1.jpg"
            alt="First slide"
            style={styleImg}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/bg/7.jpg"
            alt="Second slide"
            style={styleImg}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/bg/8.jpg"
            alt="Third slide"
            style={styleImg}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;