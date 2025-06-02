import Image from "next/image";
import React from "react";
import './GrowthReputationSec.scss'

const GrowthReputationSec = () => {
    return (
        <div className="wrapper">
            <div className="growthRepSec">
                <div className="leftSec">
                    <h1 className="title">Our Growing <br/>Reputation</h1>
                    <div className="contents">
                        <div className="bullet">
                            <h1>01</h1>
                        </div>
                        <div className="text">
                            <p>Our growing reputation for excellence and resourcefulness is no accident. It is a natural consequence of the values that have guided our company since its founding. These include an energetic enthusiasm for what we do, sensitivity to the needs of our customers, a willingness to accept total responsibility, and a craftsman-like pride in knowing that what we build will last for generations.</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="bullet">
                            <h1>02</h1>
                        </div>
                        <div className="text">
                            <p>Organizations and architects throughout our region place their confidence and trust in Oasis Grace LLC construction. setting us apart as a leader in the construction industry. Our unwavering dedication to integrity and transparency further solidifies our relationships, fostering long-term partnerships built on trust and mutual respect. </p>
                        </div>
                    </div>
                </div>
                <div className="rightSec">
                    <Image
                        src="/assets/engineer-2.png"
                        alt=""
                        width={380}
                        height={500}
                    />
                    <Image
                        className="neonEllipse"
                        src="/assets/ellipse.png"
                        alt=""
                        width={800}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
};

export default GrowthReputationSec;
