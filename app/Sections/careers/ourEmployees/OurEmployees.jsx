import Image from "next/image";
import React from "react";
import './OurEmployees.scss'

const OurEmployees = () => {
  return (
    <div className="wrapper">
        <div className="ourEmployeesSec">
            <div className="leftSec">
                <h1>Our Employees</h1>
                <p>Oasis Grace LLC employs 2540 + people from different nationalities who bring new ideas and ways of thinking that help us in our continuous strive for business success. Our employees understand they have a role to play and are expected to perform to high standards.</p>
                <div className="achievments">
                    <div className="peopleJoined">
                        <Image
                            src="/assets/icons/peopleJoined.png"
                            alt=""
                            width={64}
                            height={64}
                        />
                        <div className="text">
                            <p>People Joined</p>
                            <h2 className="count">254K+</h2>
                        </div>
                    </div>
                    <div className="projectsCompleted">
                        <Image
                            src="/assets/icons/projectCompleted.png"
                            alt=""
                            width={64}
                            height={64}
                        />
                        <div className="text">
                            <p>Projects Completed</p>
                            <h2 className="count">500+</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSec">
                <Image 
                    src="/assets/ourEmp.png"
                    alt=""
                    width={500}
                    height={400}
                />
            </div>
        </div>
    </div>
  );
};

export default OurEmployees;
