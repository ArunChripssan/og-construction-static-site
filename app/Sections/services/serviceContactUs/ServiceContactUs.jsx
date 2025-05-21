import Image from "next/image";
import Link from "next/link";
import React from "react";
import './ServiceContactUs.scss'

const ServiceContactUs = () => {
    return (
        <div className="wrapper">
            <div className="serviceContactUsSec">
                <div className="leftSec">
                    <h2>Need Any Help?</h2>
                    <div className="email">
                        <Image
                            src="/assets/icons/email.png"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <p>oasisgrace.com</p>
                    </div>
                    <div className="contact">
                        <Image
                            src="/assets/icons/contact.png"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <p>+968 24812226</p>
                    </div>
                    <Link href="/contact">
                        <button>Get a Quote</button>
                    </Link>
                </div>
                <div className="rightSec">
                    <div className="topSec">
                        <h1>Let's Build Something Together</h1>
                        <div className="content">
                            <div className="text">
                                <Image
                                    src="/assets/icons/double-tick-2.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    />
                                <p>Building and home renovation today is more exciting than it has ever been! Oasis Grace LLC is a well established renovation, extension, and home builder in the Sultanate of Oman, with over 11 years experience and with a reputation for reliability and dependability. </p>
                            </div>
                            <div className="text">
                                <Image
                                    src="/assets/icons/double-tick-2.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    />
                                <p>Oasis Grace LLC ensures you are rewarded with a Iifetime investment you’ll be proud of.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottomSec">
                        <div className="bottomSecContent">
                            <Image
                                src= "/assets/icons/time.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>Delivery on Time</p>
                        </div>
                        <div className="bottomSecContent">
                            <Image
                                src= "/assets/icons/engineer.png"
                                alt=""
                                width={32}
                                height={28}
                            />
                            <p>Professional Engineer</p>
                        </div>
                        <div className="bottomSecContent">
                            <Image
                                src= "/assets/icons/quality.png"
                                alt=""
                                width={32}
                                height={30}
                            />
                            <p>Quality Products</p>
                        </div>
                        <div className="bottomSecContent">
                            <Image
                                src= "/assets/icons/time.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p>Delivery on Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContactUs;
