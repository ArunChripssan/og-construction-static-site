import React from "react";
import './Banner.scss'
import Image from "next/image";

const Banner = () => {
    return (
        <div className="bannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <Image 
                    src="/assets/Carousel/img2.jpg" 
                    alt="" 
                    fill
                    style={{objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="textContent">
                <h1>About <span className="color">Us</span></h1>
            </div>
        </div>
    );
};

export default Banner;
