import React from "react";
import hero_image from "../../../components/Assets/hero_image.png";
import "./Hero.css";


export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
