
import React from "react";
import Hero from "./Sections/home/HeroSection/Hero";
import Aboutus from "./Sections/home/AboutUs/Aboutus";
import GlobalPresence from "./Sections/home/GlobalPresence/GlobalPresence";
import Experience from "./Sections/home/Experince/Experience";
import Achievement from "./Sections/home/Achievement/Achievement";
import Testimonials from "./Sections/home/Testimonials/Testimonials";
import Landmarks from "./Sections/home/Landmarks/Landmarks";

const page = () => {
    return (
        <>
            <Hero />
            <Aboutus/>
            <Landmarks/>
            <Experience/>
            <Achievement/>
            <GlobalPresence/>
            <Testimonials/>
        </>
    );
};

export default page;
