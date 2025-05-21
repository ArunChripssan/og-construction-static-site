"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {carouselImages} from '../../../data/CarouselImg';
import Image from "next/image";
import './Carousel.scss'

const Carousel = () => {
    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false
    };
    
    return (
        <div className="carouselContainer">
            <Slider {...settings}>
                {carouselImages.map((data, i) => {
                    return(
                        <div className="slider">
                            <Image
                                src={data.imgSrc}
                                alt=""
                                fill
                                style={{objectFit: "cover"}}
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
