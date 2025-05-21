import React from "react";
import { specialized } from "../../../../data/specialized";
import Image from "next/image";
import './SpecializedIn.scss'

const SpecializedIn = () => {
    return (
        <div className="wrapper">
            <div className="specializedSec">
                <h1 className="title">We are <br/>specialized in</h1>
                <div className="cardSec">
                    {specialized.map((data, i) => {
                        return(
                            <div className="card" key={data.id}>
                                <div className="icon" >
                                    <Image
                                        src={data.imgLink}
                                        alt=""
                                        width={60}
                                        height={60}
                                        />
                                </div>
                                <div className="heading"  >
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SpecializedIn;
