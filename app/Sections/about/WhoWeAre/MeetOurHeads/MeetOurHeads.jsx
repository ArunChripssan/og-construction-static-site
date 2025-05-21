import Image from "next/image";
import React from "react";
import "./MeetOurHeads.scss";

const MeetOurHeads = () => {
    return (
        <div className="meetOurHeadsSec">
            {/* <div className="imageWrapper">
                <Image
                    className="building-bg"
                    src="/assets/building-bg.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div> */}
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <h1>Meet Our Heads</h1>
                        <h2>Experienced Members</h2>
                    </div>
                    <div className="cardSec">
                        <div className="card">
                            <Image
                                src= "/assets/sultan.png"
                                alt = ""
                                width={400}
                                height={500}
                            />
                            <Image
                                className="neonEllipse"
                                src="/assets/Ellipse.png"
                                alt=""
                                width={1000}
                                height={600}
                            />
                            <div className="name">
                                <h2>Mr.Sultan Al Kharusi</h2>
                                <p>Chairman, Oasis Grace</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image
                                className="neonEllipse"
                                src="/assets/Ellipse.png"
                                alt=""
                                width={1000}
                                height={600}
                            />
                            <Image
                                src= "/assets/robin.png"
                                alt = ""
                                width={400}
                                height={500}
                            />
                            <div className="name">
                                <h2>Dr. Jose Mikle Robin</h2>
                                <p>Managing Director, OasisGrace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurHeads;
