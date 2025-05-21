import React from "react";
import {ourConsultant} from '../../../../data/ourClient';
import './OurConsultant.scss';
import Image from "next/image";

const OurConsultant = () => {
    return (
        <div className="wrapper">
            <div className="ourConsultantSec">
                <h1 className="bold title">Our consultant</h1>
                <div className="logo-grid">
                    {ourConsultant.map((data, i) => (
                        <div className="logo-item" key={data.id}>
                            <Image
                                src={data.imgLink}
                                alt=''
                                width={210}
                                height={120}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurConsultant;
