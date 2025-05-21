import Image from "next/image";
import React from "react";
import './Card.scss';

const Card = ({id, title, imgurl}) => {
    
    return (
        <div className="projectCard" key={''}>
            
            <Image
                src={imgurl}
                alt=""
                fill
                style={{objectFit: "cover"}}
            />
            <div className="overlay">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;


