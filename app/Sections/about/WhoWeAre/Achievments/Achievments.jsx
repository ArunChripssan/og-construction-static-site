import Image from "next/image";
import React from "react";
import './Achievments.scss'

const Achievments = () => {
    return (
        <div className="aboutAchievmentSec">
            <div className="wrapper">
                <div className="cardSec">
                    <div className="card">
                        <Image
                            src="/assets/icons/worker.png"
                            alt=""
                            width={86}
                            height={86}
                        />
                        <h1>500+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="card">
                        <Image
                            src="/assets/icons/project.png"
                            alt=""
                            width={86}
                            height={86}
                        />
                        <h1>24+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="card">
                        <Image
                            src="/assets/icons/awards.png"
                            alt=""
                            width={86}
                            height={86}
                        />
                        <h1>8+</h1>
                        <p>Awards</p>
                    </div>
                    <div className="card">
                        <Image
                            src="/assets/icons/clients.png"
                            alt=""
                            width={86}
                            height={86}
                        />
                        <h1>150+</h1>
                        <p>Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievments;
