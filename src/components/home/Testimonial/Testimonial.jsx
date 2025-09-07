import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import TestimonialCard from './TestimonialCard'
import "./testimonial.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MdNavigateNext } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Testimonial = () => {

  function ArrowFun(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, display: "block", background: "#00B98E" , borderRadius: "50%"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <ArrowFun />,
    prevArrow: <ArrowFun />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <h1 className="mb-3">Our Clients Say!</h1>
    </div>
    
    {/* <OwlCarousel autoWidth loop margin={10} nav className="owl-carousel" data-wow-delay="0.1s"> */}
    
    <Slider {...settings}>

    
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
    </Slider>
  </div>
</div>

  )
}

export default Testimonial