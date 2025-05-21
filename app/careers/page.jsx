import React from "react";
import CareerBanner from "../Sections/careers/careerBanner/CareersBanner";
import CareerOpportunities from "../Sections/careers/careerOpportunities/CareerOpportunities";
import OurEmployees from "../Sections/careers/ourEmployees/OurEmployees";
import WhyOasis from "../Sections/careers/whyOasis/WhyOasis";

const Careers = () => {
  return (
    <>
        <CareerBanner/>
        <CareerOpportunities/>
        <OurEmployees/>
        <WhyOasis/>
    </>
  );
};

export default Careers;
