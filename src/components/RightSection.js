import React from 'react'
import arrow from '../assets/arrow-right.svg';
import './Sections.css';


const RightSection = () => {
  return (
    <div className='rightSection slide-in'>
        <h2>Our Projects</h2>
        <p><span>01</span> AR & AI Assistance for sterility testing <img src={arrow} alt="" /></p>
        <p><span>02</span> Automated mobile phase solution <img src={arrow} alt="" /></p>
        <p><span>03</span> Automating IR Spectroscopy testing <img src={arrow} alt="" /></p>
    </div>
  )
}

export default RightSection;