import Image from "next/image";
import React from "react";
import './ServiceBanner.scss'

const ServiceBanner = () => {
    return (
        <div className="bannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <Image
                    src="/assets/service.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="textContent">
                <h1>
                    Services
                </h1>
            </div>
        </div>
    );
};

export default ServiceBanner;
