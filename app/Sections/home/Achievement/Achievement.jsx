import React from "react";
import ExpTimeline from "../../../Components/ExpTimeline/ExpTimeline";
import Image from "next/image";
import AchievmentCard from "../../../Components/AchievmentCard/AchievmentCard";
import "./Achievement.scss";

const Achievement = () => {
    return (
        <div className="achievementSec">
            <Image
                className="building-bg"
                src= "/assets/Building-bg.png"
                alt= ""
                fill
                style={{objectFit: "cover"}}
            />
            <div className="wrapper">
                <h1 className="bold title">
                    {" "}
                    <span className="color">Everlasting Trust,</span> it's What We Build
                </h1>
                <div className="container">
                    <ExpTimeline className="achievement-timeline" />
                    <AchievmentCard/>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
