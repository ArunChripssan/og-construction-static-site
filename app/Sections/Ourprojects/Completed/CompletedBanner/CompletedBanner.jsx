import React from "react";
import Image from "next/image";
import './CompletedBanner.scss'

const CompletedBanner = () => {
    return (
        <div className="completedBannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <Image 
                    src="/assets/carousel/img2.jpg" 
                    alt="" 
                    fill
                    style={{objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="textContent">
                <h1>Projects</h1>
            </div>
        </div>
    ) 
};

export default CompletedBanner;
