import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P1-tommy-mokobara-upto60.webp';
import Banner2 from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P2-panash-trink-under799.webp';
import Banner3 from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P3-asio-timex-upto50.jpg';
function Carouse() {
  return (
    <Carousel interval={3000} indicatorLabels={false} controls={false} > {/* Change the interval to your preference */}
      <Carousel.Item>
        <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouse;
