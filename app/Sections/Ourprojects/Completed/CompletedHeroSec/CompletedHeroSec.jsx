import React from "react";
import Image from "next/image";
import "./CompletedHeroSec.scss";

const CompletedHeroSec = () => {
    return (
        <div className="wrapper">
            <div className="completedHeroSec">
                <span className="subDiv">
                    <Image
                        className="imageSec"
                        src="/assets/completed-project.png"
                        alt=""
                        width={500}
                        height={400}
                    />
                </span>
                <div className="container">
                    <div className="contents">
                        <h1 className="title">Completed Projects</h1>
                        <div className="text">
                            <Image
                                src="/assets/icons/double-tick.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>
                                We are presently executing several mega projects
                                ranging from high-speed rail & dedicated freight
                                corridors to metro rail systems, from river &
                                sea bridges to large water, power & solar
                                infrastructure, many of which will be the first
                                of their kind. 
                            </p>
                        </div>
                        <div className="text">
                            <Image
                                src="/assets/icons/double-tick.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>
                                We are presently executing several mega projects
                                ranging from high-speed rail & dedicated freight
                                corridors to metro rail systems, from river &
                                sea bridges to large water, power & solar
                                infrastructure, many of which will be the first
                                of their kind. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedHeroSec;
