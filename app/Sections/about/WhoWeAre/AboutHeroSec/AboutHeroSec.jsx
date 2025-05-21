import Image from "next/image";
import React from "react";
import "./AboutHeroSec.scss";

const AboutHeroSec = () => {
    return (
        <div className="aboutHeroSec">
            <div className="bold title">Oasis Grace</div>
            <div className="wrapper">
                <div className="content">
                    <div className="leftSec">
                        <Image
                            className="building"
                            src="/assets/building_1.png"
                            alt=""
                            height={500}
                            width={500}
                        />
                        <Image
                            className="neonEllipse"
                            src="/assets/Ellipse.png"
                            alt=""
                            width={900}
                            height={700}
                        />
                    </div>
                    <div className="rightSec">
                        <h2>Redefining Construction Excellence Since 2000</h2>
                        <div className="description">
                            <p>
                                Oasis Grace LLC, is an Excellent Grade Civil
                                Construction Company located in MBD, Ruwi,
                                Muscat, Sultanate of Oman.
                            </p>
                            <p>
                                Over the last 24 years, we have established
                                ourselves as the
                                <span className="color">
                                    "Most Respected and Trusted company "
                                </span>{" "}
                                in the field of general contracting in Oman.
                                Growing steadily over time, we have the complete
                                infrastructure in place and many successful
                                projects to our credit. In the commercial and
                                institutional construction, we have undertaken
                                large, complex projects ensuring on-time
                                delivery and great quality within the mentioned
                                budget. 
                            </p>
                            <p>
                                Our organization has a fully computerized
                                Estimating Department and thorough{" "}
                                <span className="color">State-of-the-art</span>{" "}
                                Technology and Information systems, we
                                continuously update our database, vendors, and
                                subcontractors, which allows us to develop
                                precise information on any construction project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroSec;
