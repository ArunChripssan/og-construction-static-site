import Image from "next/image";
import React from "react";
import {careerOpportunities} from '../../../../data/careers';
import './CareerOpportunities.scss'

const CareerOpportunities = () => {
    return (
        <div className="wrapper">
            <div className="careerOpportunitiesSec">
            <div className="bold title" >Career Opportunities</div>
                <div className="contents">
                    <div className="leftSec">
                        <Image 
                            src="/assets/careerOpportunities.png"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="rightSec">
                        {careerOpportunities.map((data, i) => 
                            <div className="textContent" key={data.id}>
                                <p className="icon">{data.id}</p>
                                <p className="text">{data.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerOpportunities;
