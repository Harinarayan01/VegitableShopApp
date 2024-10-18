import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import veg1 from '../assets/images/veg1.jpeg'
import veg2 from '../assets/images/veg2.jpeg'
import veg3 from '../assets/images/veg3.jpeg'
import veg4 from '../assets/images/veg4.jpeg'
import SProduct from './SProduct';
const ProductSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider py-5">
      <h1 className="text-center display-4  mt-4 fw-bold text-light">
        Fresh vegetable Recipes to bring
        <br />
        To Your Next Cookout
      </h1>
      <div className="container mt-5">
        <Slider {...settings}>
          <div className="p-1">
            <SProduct Image={veg1} Text="Varrow ricebean e cauliflower sea"/>

          </div>
          <div className="p-1">
            <SProduct Image={veg2} Text="Varrow ricebean e cauliflower sea"/>

          </div>
          <div className="p-1">
            <SProduct Image={veg3} Text="Varrow ricebean e cauliflower sea"/>
          </div>
          <div className="p-1">
            <SProduct Image={veg4} Text="Varrow ricebean e cauliflower sea"/>
          </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
