import React from "react";
import "./AchievmentCard.scss";
import Image from "next/image";

const AchievmentCard = () => {
    return (
        <div className="mobAchievmentSec">
            <div className="mobProjectsCompleted card">
                <Image
                    src="/assets/icons/project.png"
                    alt=""
                    width={80}
                    height={80}
                />
                <div className="mobContents">
                    <h1>500+</h1>
                    <h2>
                        {" "}
                        Projects Completed
                    </h2>
                </div>
            </div>
            <div className="mobExperience card">
                <Image
                    src="/assets/icons/worker.png"
                    alt=""
                    width={80}
                    height={80}
                />
                <div className="mobContents">
                    <h1>24+</h1>
                    <h2>
                        {" "}
                        Years of Experience
                    </h2>
                </div>
            </div>
            <div className="mobAwards card">
                <Image
                    src="/assets/icons/awards.png"
                    alt=""
                    width={80}
                    height={80}
                />
                <div className="mobContents">
                    <h1>8+</h1>
                    <h2>Awards</h2>
                </div>
            </div>
            <div className="mobClients card">
                <Image
                    src="/assets/icons/clients.png"
                    alt=""
                    width={80}
                    height={80}
                />
                <div className="mobContents">
                    <h1>150+</h1>
                    <h2>Clients</h2>
                </div>
            </div>
        </div>
    );
};

export default AchievmentCard;
