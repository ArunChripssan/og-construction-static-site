import React from 'react';
import Image from 'next/image';
import {diplomaticAndMinistries} from '../../../../data/ourClient'
import './DiplomaticAndMinistries.scss'; 

const DiplomaticAndMinistries = () => {

    return (
        <div className="wrapper">
            <div className="diplomaticAndMinistriesSec">
                <h1 className="bold title">Diplomatic and Ministries</h1>
                <div className="logo-grid">
                    {diplomaticAndMinistries.map((data, i) => (
                        <div key={data.id} className="logo-item">
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

export default DiplomaticAndMinistries;