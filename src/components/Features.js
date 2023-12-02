import React from "react";
import voice from "../assets/humanvoice.svg";
import spects from "../assets/spects.svg";
import telescope from "../assets/telescope.svg";
import volume from "../assets/volume.svg";
import background from "../assets/featureBackground.png";
import "./Features.css";

const Feature = () => {
  return (
    <div
      style={{ background: `url(${background})` }}
      className="featureContainer"
    >
      <img src={voice} alt="" />
      <h2>Voice control</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing e nisi ut aliquip.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="featuresContainer">
      <div className="fullSet">
        <div className="firstSet">
          <Feature />
          <Feature />
        </div>
        <div className="secondSet">
          <Feature />
          <Feature />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "5rem" }}>
          <h2 className="featureHeading">
            Features & Benefits of Using Smart Glass App
          </h2>
          <p className="featureText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <Feature />
      </div>
    </div>
  );
};

export default Features;
