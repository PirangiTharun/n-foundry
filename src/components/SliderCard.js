import React from 'react'
import exit from '../assets/exit.svg';
import testtube from '../assets/testtube.svg';
import setting from '../assets/setting.svg';
import check from '../assets/check.png';
import refresh from '../assets/refresh.png';
import backgroundimage from '../assets/backgroundimg.png';
import './Slider.css';

const icons = [exit, testtube, setting, check, refresh];
const SliderCard = ({text,index}) => {
  return (
    <div className='singleSlider' style={{background: `url(${backgroundimage})`}}>
        <p>{text}</p>
        <img src={icons[index]} alt="" />
    </div>
  )
}

export default SliderCard