import React from "react";
import {aboutUsDesc} from '../../../../data/aboutus'
import './Aboutus.scss'
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="wrapper">
            <div className="about-usSec">
                <div className="container">
                    <Image
                        className="neonEllipse"
                        src="/assets/ellipse.png"
                        alt=""
                        width={900}
                        height={700}
                    />
                    <div className="leftSec">
                        <Image
                            className="aboutUsImg"
                            src="/assets/about-us.png"
                            alt=""
                            width={350}
                            height={380}
                        />
                        
                        <div className="content">
                            <div className="icon">
                                <Image
                                    src="/assets/icons/exp-icon.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="text">
                                <h1>24 +</h1>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className="textContent">
                        </div>
                    </div>
                    <div className="rightSec">
                        <h1 className="bold title"><span className="color">Who</span> We Are</h1>
                        {aboutUsDesc.map((data, i) => (
                            <div key={data.id} className="aboutus-desc">
                                <img src=".\assets\icons\circle-bullet.png" alt="" />
                                <p className="aboutus-desc__content">{data.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;

