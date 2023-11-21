import React from 'react';
import './Challenges.css';
import alert from '../assets/alert-triangle.svg';
import clock from '../assets/clock.svg';
import human from '../assets/human-warning.svg';

const images = [alert, clock, human];

const SingleBox = ({title, info}) => {
    return (
      <div className="singleBox">
        <div className="title">
          <p>{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="337"
            height="3"
            viewBox="0 0 337 3"
            fill="none"
          >
            <path
              d="M2 1.5H335"
              stroke="#383F5D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p className='info'>{info}</p>
        <img className='floatingImage' src={images[parseInt(title)-1]} alt="" />
      </div>
    );
}

const Challenges = () => {
    return (
      <div className="challengeContainer">
        <h1>Challenges</h1>
        <SingleBox
          title={"01"}
          info={"Mobile phase is a vital component for testing samples​"}
        />
        <SingleBox
          title={"02"}
          info={
            "In a day ~3 hrs are taken in mobile phase preparation for any given test​"
          }
        />
        <SingleBox
          title={"03"}
          info={
            "Highly susceptible to human errors that adversely impact batch release​"
          }
        />
        <SingleBox
          title={"04"}
          info={
            "Time saved from this process will double fold the sample testing productivity​"
          }
        />
      </div>
    );
}

export default Challenges;