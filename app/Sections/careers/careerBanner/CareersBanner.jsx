import Image from "next/image";
import React from "react";
import './CareersBanner.scss'

const CareersBanner = () => {
    return (
        <div className="careersBannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <Image 
                    src="/assets/careers_bg.png" 
                    alt="" 
                    fill
                    style={{objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="textContent">
                <h1>Careers </h1>
            </div>
        </div>
    );
};

export default CareersBanner;
