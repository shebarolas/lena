import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/slider.css';
// import lena1 from '../imgs/lena1.jpg';
// import lena2 from '../imgs/lena2.jpg';
// import lena3 from '../imgs/lena3.jpg';
import img1 from '../imgs/imagen1.jpg';
import img2 from '../imgs/imagen2.jpg';
import img3 from '../imgs/imagen3.jpg';
import img4 from '../imgs/imagen4.jpg';
import img5 from '../imgs/imagen5.jpg';
import img6 from '../imgs/imagen6.jpg';

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
            <img src={img1} alt="Slide 1" />
        </div>
        <div className="images">
            <img src={img2} alt="Slide 2" />
        </div>
        <div className="images">
            <img src={img3} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={img4} alt="Slide 4" />
        </div>
        <div className="images">
            <img src={img5} alt="Slide 5" />
        </div>
        <div className="images">
            <img src={img6} alt="Slide 6" />
        </div>
    </Slider>
  )
}
