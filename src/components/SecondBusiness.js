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

const SecondBusiness = () => {
  return (
    <div className="businessCaseContainer">
      <div style={{ display: "flex" }}>
        <img src={bubble1} alt="" />
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
        <img src={bubble2} alt="" />
      </div>
      <img style={{ width: "100%" }} src={overall} alt="" />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem'}}>
        <Challenges />
        <div style={{margin: 'auto'}}>
            <img style={{width:'100%'}} src={basket} alt="" />
            <h3 className="innerTitle">Solution</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between'}}>
                <img style={{width: '45%'}} src={s1} alt="" />
                <img style={{width: '45%'}} src={s2} alt="" />
                <img style={{width: '45%'}} src={s3} alt="" />
                <img style={{width: '45%'}} src={s4} alt="" />
            </div>
        </div>
      </div>
      <div>
        <video style={{borderRadius: '1.5rem', margin: '10rem 0'}} src={video} width={'100%'} autoPlay={true} muted loop />
      </div>
    </div>
  );
};

export default SecondBusiness;
