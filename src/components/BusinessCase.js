import React from "react";
import "./BusinessCase.css";
import Challenges from "./Challenges";
import overall from "../assets/overall.svg";
import bubble1 from '../assets/bubble1.svg';
import bubble2 from '../assets/bubble2.svg';
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from '../assets/s4.svg';
import basket from '../assets/basket.svg';
import video from '../assets/lab-video.mp4';

const BusinessCase = () => {
  return (
    <div className="businessCaseContainer">
      <div style={{ display: "flex" }}>
        <img className="bubble1" src={bubble1} alt="" />
        <div>
          <p className="smalltitle">Ai - Cobots</p>
          <h2 className="mainTitle">Automated mobile phase solution</h2>
          <p className="info">
            Mobile phase and base solution are frequently used the drug testing
            laboratory. Preparation of these and their preparation was becoming
            a bottleneck. So, Neural foundry has automated the whole processes
            with the help of A.I powered cobot workstation setup.
          </p>
        </div>
        <img className="bubble1" src={bubble2} alt="" />
      </div>
      <img style={{ width: "100%" }} src={overall} alt="" />
      <img className="mobileBasket" src={basket} alt="" />
      <div className="challenges">
        <Challenges />
      </div>
      <div className="gridBox">
        <div className="deskChallenges">
          <Challenges />
        </div>
        <div style={{margin: 'auto'}}>
            <img className="basket" src={basket} alt="" />
            <h3 className="innerTitle">Solution</h3>
            <div className="boxesContainer">
                <img className="boxes" src={s1} alt="" />
                <img className="boxes" src={s2} alt="" />
                <img className="boxes" src={s3} alt="" />
                <img className="boxes" src={s4} alt="" />
            </div>
        </div>
      </div>
      <div>
        <video className="videoBox" src={video} width={'100%'} autoPlay={true} muted loop />
      </div>
    </div>
  );
};

export default BusinessCase;
