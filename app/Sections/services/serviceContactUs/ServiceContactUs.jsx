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
                                <p>At Oasis Grace LLC, we believe your home should tell your story. Whether it’s a new build, an extension, or a renovation, we bring more than 25 years of trusted experience to create spaces that truly reflect your vision.</p>
                            </div>
                            <div className="text">
                                <Image
                                    src="/assets/icons/double-tick-2.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    />
                                <p>With a reputation for reliability and craftsmanship, we’re here to make the process smooth, enjoyable, and rewarding. Every project we deliver is not just a structure—it’s a lasting investment and a place you’ll be proud to call home.</p>
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
