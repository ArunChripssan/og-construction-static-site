import Image from "next/image";
import React from "react";
import './OurClientsBanner.scss'

const OurClientsBanner = () => {
  return (
    <div className="ourClientsBannerSec">
        <div className="bannerImgSec">
            <span className="overlay"></span>
            <Image 
                src="/assets/contactUs_bg.png" 
                alt="" 
                fill
                style={{objectFit: 'cover'}}
                priority
            />
        </div>
        <div className="textContent">
            <h1>Our <span className="color">Clients</span></h1>
        </div>
    </div>
  );
};

export default OurClientsBanner;
