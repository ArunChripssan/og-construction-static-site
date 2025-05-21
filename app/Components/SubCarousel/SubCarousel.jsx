"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Image from "next/image";
import Slider from "react-slick";
import {subCarouselImages} from '../../../data/CarouselImg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SubCarousel.scss'

const images = [1, 2, 3, 4, 5];

const SubCarousel = () => {
    const settings = {
      centerMode: true,
      centerPadding: "100px",
      slidesToShow: 3,
      arrows: true,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      infinite: true,
      cssEase: "linear",
      arrows: false,
        responsive: [
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 1,
                centerPadding: "450px",
              },
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                centerPadding: "250px",
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                centerPadding: "120px",
              },
            },
        ],
    };
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                    {subCarouselImages.map((data, i) => {
                        return(
                            <div className="sliderCard">
                                <Image
                                    src={data.imgSrc}
                                    alt=""
                                    width={500}
                                    height={200}
                                />
                            </div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default SubCarousel;
