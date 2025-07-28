import Image from "next/image";
import React from "react";
import { whyOasis } from "../../../../data/careers";
import './WhyOasis.scss'

const WhyOasis = () => {
  return (
    <div className="whyOasisSec">
        <div className="wrapper">
            <div className="container">

                <div className="leftSec">
                    <Image
                        src="/assets/whyOasis.png"
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
                <div className="rightSec">
                    <h1>Why Oasis LLC?</h1>
                    <div className="content" >
                        {whyOasis.map((data, i) => 
                            <div className="text" key={data.id}>
                                <Image
                                    src="/assets/icons/bullet2.png"
                                    alt=""
                                    width={24}
                                    height={24}
                                    />
                                <p >{data.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyOasis;
