import React from "react";
import Slider from "react-slick";
import FirstCard from './cards/firstCard'
import {RightCircleFilled, LeftCircleFilled}  from '@ant-design/icons'

const headSlide = () => {
	
	
	    const settings = {
			arrows: true,
      dots: false,
      infinite: true,
      
      slidesToShow: 4.5,
   
       autoplay: true,
       slidesToScroll: 1,
      speed: 100,
      autoplaySpeed: 5000,
      cssEase: "linear",
 
 className: 'react__slick__slider__parent',
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4.5,
      slidesToScroll: 1,
      infinite: true,
    
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
      slidesToShow: 1.3,
      slidesToScroll: 1
    }
  }
]
    };

	
	return(
		   <div>
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings} className="parent">
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/2.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/3.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/4.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/5.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/6.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/1.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
         <div className="hed-flex">
			<div className="first"><img alt="example" src="/7.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          <div className="hed-flex">
			<div className="first"><img alt="example" src="/8.png" /></div>
			<div className="second"><FirstCard /></div>
           
          </div>
          
        </Slider>
      </div>
	)
	}
	
export default headSlide;
