import Image from "next/image";
import React from "react";
import './ContactBanner.scss'

const ContactBanner = () => {
  return (
    <div className="contactBannerSec">
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
            <h1>Contact <span className="color">Us</span></h1>
        </div>
    </div>
  );
};

export default ContactBanner;
