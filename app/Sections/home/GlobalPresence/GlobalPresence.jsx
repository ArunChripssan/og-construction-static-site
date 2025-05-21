import React from "react";
import './GlobalPresence.scss'
import Image from "next/image";

const GlobalPresence = () => {
  return (
    <div className="wrapper">
      <div className="GlobalPresence-container">
        <h1 className="bold title"><span className="color">Global</span> Presence</h1>
        <div className="map-container">
          <Image
            className="map"
            src="/assets/map.png"
            alt=""
            fill
            style={{objectFit: "cover"}}
            />
          <Image
            className="map2"
            src="/assets/map2.png"
            alt=""
            fill
            style={{objectFit: "cover"}}
            />
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
