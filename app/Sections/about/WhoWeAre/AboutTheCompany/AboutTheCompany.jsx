import Image from "next/image";
import React from "react";
import "./AboutTheCompany.scss";

const AboutTheCompany = () => {
    return (
        <div className="aboutTheCompanySec">
            <h1 className="title">Who We Are</h1>
            <div className="mobViewTopSec">
                <Image
                    src="/assets/whoWeAre-img.png"
                    alt=""
                    width={550}
                    height={450}
                />
                <Image
                    className="neonEllipse"
                    src="/assets/Ellipse.png"
                    alt=""
                    width={700}
                    height={700}
                />
            </div>

            <div className="container">
                <div className="leftSec">
                    <p>
                        The Oasis Grace LLC name has been prevalent in the
                        construction industry specializing in general
                        contracting for more than 24 years, during which we have
                        established many long-standing relationships. Oasis
                        Grace LLC is recognized as an industry leader in civil
                        construction and quality service built to high
                        standards.
                    </p>

                    <p>
                        At Oasis Grace LLC, we recognize the value of
                        communication and the complexities of the building
                        industry. We do our utmost to guide our clients through
                        the design and construction process with a high degree
                        of comfort. 
                    </p>
                </div>
                <div className="middleSec">
                    <Image
                        src="/assets/whoWeAre-img.png"
                        alt=""
                        width={550}
                        height={450}
                    />
                    <Image
                        className="neonEllipse"
                        src="/assets/Ellipse.png"
                        alt=""
                        width={1000}
                        height={700}
                    />
                </div>
                <div className="rightSec">
                    <p>
                        Our expertise brings sound, practical knowledge to the
                        table and we take great pride in helping others realize
                        their vision. Our team provides a high degree of
                        sophistication combined with a down to earth ability to
                        explain matters and the capacity to assist with a wide
                        range of projects.
                    </p>

                    <p>
                        Passion, integrity and experience – these are reflective
                        of Oasis Grace LLC’s corporate values. We have assembled
                        a team of professionals that complement the foundation
                        on which we have based our philosophy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTheCompany;
