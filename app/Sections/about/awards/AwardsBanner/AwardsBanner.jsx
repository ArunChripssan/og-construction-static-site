import Image from "next/image";
import React from "react";
import './AwardsBanner.scss'

const AwardsBanner = () => {
    return (
        <div className="awardsBannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <Image 
                    src="/assets/awardBanner.jpg" 
                    alt="" 
                    fill
                    style={{objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="textContent">
                <h1>Awards &<span className="color"><br/>Certifications</span></h1>
            </div>
        </div>
    );
};

export default AwardsBanner;
