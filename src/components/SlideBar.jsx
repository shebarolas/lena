import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/slider.css';
import lena1 from '../imgs/lena1.jpg';
import lena2 from '../imgs/lena2.jpg';
import lena3 from '../imgs/lena3.jpg';

export const SlideBar = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,

      };
  return (
    <Slider {...settings} className="slider">
        <div className="images">
            <img src={lena1} alt="Slide 1" />
        </div>
        <div className="images">
            <img src={lena2} alt="Slide 2" />
        </div>
        <div className="images">
            <img src={lena3} alt="Slide 3" />
        </div>
    </Slider>
  )
}
