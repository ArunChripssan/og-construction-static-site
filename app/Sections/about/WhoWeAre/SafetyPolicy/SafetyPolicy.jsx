import Image from "next/image";
import React from "react";
import "./SafetyPolicy.scss";

const contentsLeft = [
    {
        number: "01",
        text: "“Safety is the only way to work”, this is the motto by which we live. ‘We are committed to safety above everything, and this commitment is central to whatever we do. Our proactive approach creates value for our clients and safeguards our employees",
    },
    {
        number: "02",
        text: "Our entire team is dedicated to maintaining a safety-focused business. implementing and evaluating safety practices daily. Our safety program is proactive and action-oriented: everyone from management to trades are involved in making our place a zero-incident workplace. ",
    },
];

const contentsRight = [
    {
        number: "03",
        text: "We use daily per task planning sessions, ongoing safety inspection, weekly safety meetings, safety seminars, special equipment training, safety manual reviews, and email updates to assist in attaining our goal of zero incidents. In addition to our robust safety practices, we are equally committed to environmental stewardship.",
    },
    {
        number: "04",
        text: "We integrate sustainable practices into our operations, minimizing our ecological footprint and promoting a cleaner environment. By prioritizing safety and environmental responsibility, we ensure a secure and sustainable future for our communities and the planet. ",
    },
];

const SafetyPolicy = () => {
    return (
        <div className="safetyPolicySec">
            <h1 className="title">Safety & Environmental Policy</h1>
            <div className="mobImgWrapper">
                <Image
                    src="/assets/engineer-3.png"
                    alt=""
                    width={390}
                    height={390}
                />
            </div>
            <div className="contentWrapper">
                <div className="leftSec">
                    {contentsLeft.map((data) => {
                        return (
                            <div className="content" key={data.id}>
                                <div className="bullet" >
                                    <h2>{data.number}</h2>
                                </div>
                                <p>{data.text}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="middleSec">
                    <Image
                        src="/assets/engineer-3.png"
                        alt=""
                        width={390}
                        height={390}
                    />
                </div>
                <div className="rightSec">
                    {contentsRight.map((data) => {
                        return (
                            <div className="content" key={data.id}>
                                <div className="bullet">
                                    <h2>{data.number}</h2>
                                </div>
                                <p>{data.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SafetyPolicy;
