import Image from "next/image";
import React from "react";
import {
    awards,
    horizontalCert,
    verticalCert,
} from "../../../../../data/awardsAndCertificates";
import "./AwardsAndCertificatesSec.scss";

const AwardsAndCertificatesSec = () => {
    return (
        <div className="wrapper">
            <div className="awardsAndCertificatesSec">
                <h1 className="title">Awards and Certifications</h1>
                <div className="grid grid-awards">
                    <div className="card">
                        <Image
                            src="/assets/awards/award1.jpeg"
                            alt=""
                            width={580}
                            height={350}
                        />
                        <p className="caption">Award from Ministry of Manpower</p>
                    </div>
                    <div className="card">
                        <Image
                            src="/assets/awards/award2.jpeg"
                            alt=""
                            width={580}
                            height={350}
                        />
                        <p className="caption">
                            Award from Tamil Nadu governor Mr. Banwarilal
                            Purohit
                        </p>
                    </div>
                </div>
                <div className="grid grid-verticalCertificates">
                    <div className="leftSec">
                        <div className="card">
                            <Image
                                src="/assets/awards/cert1.jpg"
                                alt=""
                                width={275}
                                height={400}
                            />
                        </div>
                        <div className="card">
                            <Image
                                src="/assets/awards/cert2.jpg"
                                alt=""
                                width={275}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="rightSec">
                        <div className="card">
                            <Image
                                src="/assets/awards/cert3.jpg"
                                alt=""
                                width={275}
                                height={400}
                            />
                        </div>
                        <div className="card">
                            <Image
                                src="/assets/awards/cert4.jpg"
                                alt=""
                                width={275}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-horixontalCertificates">
                    <div className="leftSec">
                        <div className="card">
                            <Image
                                src="/assets/awards/cert5.jpg"
                                alt=""
                                width={275}
                                height={200}
                            />
                        </div>
                        <div className="card">
                            <Image
                                src="/assets/awards/cert6.jpg"
                                alt=""
                                width={275}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="rightSec">
                        <div className="card">
                            <Image
                                src="/assets/awards/cert7.jpg"
                                alt=""
                                width={275}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardsAndCertificatesSec;
