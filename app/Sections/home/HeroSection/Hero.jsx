import React from "react";
import './Hero.scss';
import Image from "next/image";
import Carousel from "../../../Components/Carousel/Carousel";
import Link from "next/link";
import SubCarousel from "../../../Components/SubCarousel/SubCarousel";

const Hero = () => {
    return (
        <div className="homeBannerSec">
            <div className="bannerText">
                <h1>
                    <span className="color">Building Landmarks</span><br /> Creating Futures
                </h1>
                <p>
                    “ With over 20 years of excellence, we deliver worldclass
                    construction solutions tailored to your vision. ”
                </p>
              <button><Link href="/contact">Get a Quote</Link></button>
            </div>
            <Carousel/>
            <SubCarousel/>
        </div>
    );
};

export default Hero;
