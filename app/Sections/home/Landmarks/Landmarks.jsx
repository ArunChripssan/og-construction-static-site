"use client";
import React, { useState } from "react";
import "./Landmarks.scss";

const images = [
    "/assets/carousel/img1.jpg",
    "/assets/carousel/img2.jpg",
    "/assets/carousel/img1.jpg",
];

const Landmarks = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="wrapper">
            <div className="landmarksSection">
                <h2>
                    Landmarks <span>in OMAN</span>
                </h2>
                <div className="landmarksGrid">
                    <div className="mainImage">
                        <img src={selectedImage} alt="Main Landmark" />
                    </div>
                    <div className="subImages">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="subImage"
                                onMouseEnter={() => setSelectedImage(img)}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`Landmark ${index}`} />
                                <div className="text">
                                    Oman Shooting Area
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landmarks;
