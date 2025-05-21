import React from "react";
import Image from "next/image";
import { experienceDesc } from "../../../../data/experience";
import "./Experience.scss";

const Experience = () => {
    return (
        <div className="experinceSec">
            <div className="wrapper">
                <h1 className="bold title">
                    We’ve Been Building For
                    <br />
                    <span className="color">Over 24 Years</span>
                </h1>
                <div className="container">
                    <div className="leftSec">
                        {experienceDesc.map((data, i) => (
                            <div key={data.id} className="contents">
                                <img src=".\assets\icons\bullets.png" />
                                <p>{data.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rightSec">
                        <Image
                            src="/assets/mechanical-engineer.png"
                            alt=""
                            width={550}
                            height={550}
                            className="aboutus"
                        />
                        <Image
                            className="neonEllipse"
                            src="/assets/ellipse.png"
                            alt=""
                            width={700}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
