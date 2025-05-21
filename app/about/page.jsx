import React from "react";
import Banner from "../Sections/about/WhoWeAre/AboutBanner/Banner";
import AboutHeroSec from "../Sections/about/WhoWeAre/AboutHeroSec/AboutHeroSec";
import GrowthReputationSec from "../Sections/about/WhoWeAre/GrowthReputationSec/GrowthReputationSec";
import AboutTheCompany from "../Sections/about/WhoWeAre/AboutTheCompany/AboutTheCompany";
import MeetOurHeads from "../Sections/about/WhoWeAre/MeetOurHeads/MeetOurHeads";
import Achievments from "../Sections/about/WhoWeAre/Achievments/Achievments";
import HealthPolicy from "../Sections/about/WhoWeAre/HealthPolicy/HealthPolicy";
import SafetyPolicy from "../Sections/about/WhoWeAre/SafetyPolicy/SafetyPolicy";

const About = () => {
    return(
        <>
            <Banner/>
            <AboutHeroSec/>
            <GrowthReputationSec/>
            <AboutTheCompany/>
            <MeetOurHeads/>
            <Achievments/>
            <HealthPolicy/>
            <SafetyPolicy/>
        </>
    );
};

export default About;
