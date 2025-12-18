import Image from "next/image";
import Link from "next/link";
import React from "react";
import './OurServices.scss'

const OurServices = () => {
    return (
        <div className="wrapper">
            <div className="ourServicesSec">
                <div className="leftSec">
                    <h1 className="title">Our Services</h1>
                    <p>From planning to project completion, we provide a full spectrum of services to bring your vision to life</p>
                    <Link href="/contact">
                        <button className="getStartedbtn">
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className="rightSec">
                    <div className="leftCard">
                        <div className="card">
                            <div className="icon">
                                <Image
                                    src="/assets/icons/residential.png"
                                    alt=""
                                    width={42}
                                    height={42}
                                />
                            </div>
                            <h3>Residential Construction</h3>
                            <p>Building homes that combine luxury and functionality</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <Image
                                    src="/assets/icons/industry.png"
                                    alt=""
                                    width={42}
                                    height={42}
                                />
                            </div>
                            <h3>Industrial Projects</h3>
                            <p>Delivering robust infrastructure for industrial growth</p>
                        </div>
                    </div>
                    <div className="rightCard">
                        <div className="card">
                            <div className="icon">
                                <Image
                                    src="/assets/icons/commercial.png"
                                    alt=""
                                    width={42}
                                    height={42}
                                />
                            </div>
                            <h3>Commercial Development</h3>
                            <p>Creating dynamic spaces for businesses to thrive.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <Image
                                    src="/assets/icons/project-managment.png"
                                    alt=""
                                    width={42}
                                    height={42}
                                />
                            </div>
                            <h3>Project Management <br/>and Consultancy</h3>
                            <p>Ensuring projects are completed on time, within budget, and to the highest standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
