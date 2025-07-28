import React from "react";
import Image from "next/image";
import './OnGoingHeroSec.scss'

const OnGoingHeroSec = () => {
    return (
        <div className="wrapper">
            <div className="onGoingHeroSec">
                <span className="subDiv">
                    <Image
                        className="imageSec"
                        src="/assets/completed-project.png"
                        alt=""
                        width={450}
						height={350}
                    />
                </span>
                <div className="container">
                    <div className="contents">
                        <h1 className="title">Ongoing Projects</h1>
                        <div className="text">
                            <Image
                                src="/assets/icons/double-tick.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>We are presently executing several mega projects ranging from high-speed rail & dedicated freight corridors to metro rail systems, from river & sea bridges to large water, power & solar infrastructure, many of which will be the first of their kind. We are currently at the forefront of several infrastructure projects, actively shaping the landscape of high-speed rail, dedicated freight corridors, metro rail systems, river and sea bridges, and expansive water, power, and solar infrastructure. </p>
                        </div>
                        <div className="text">
                            <Image
                                src="/assets/icons/double-tick.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>These projects, some of which are pioneering endeavors, are progressing swiftly and efficiently as we continue to leverage our expertise in engineering and project management.</p>
                        </div>
                
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default OnGoingHeroSec;
