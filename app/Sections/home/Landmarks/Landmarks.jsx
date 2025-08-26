"use client";
import React, { useState } from "react";
import {landmarkImages} from '../../../../data/landmarks'
import "./Landmarks.scss";

const defaultImg = "/assets/carousel/img2.jpg"

const Landmarks = () => {
    const [selectedImage, setSelectedImage] = useState(defaultImg);

    return (
        <div className="wrapper">
            <div className="landmarksSection">
                <h2 className="title">
                    Landmarks <span>in OMAN</span>
                </h2>
                <div className="landmarksGrid">
                    <div className="mainImage">
                        <img src={selectedImage} alt="Main Landmark" />
                    </div>
                    <div className="subImages">
                        {landmarkImages.map((img, index) => (
                            <div
                                key={index}
                                className="subImage"
                                onMouseEnter={() => setSelectedImage(img.imgSrc)}
                                onClick={() => setSelectedImage(img.imgSrc)}
                            >
                                <img src={img.imgSrc} alt={`Landmark ${index}`} />
                                <div className="text">{img.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landmarks;
