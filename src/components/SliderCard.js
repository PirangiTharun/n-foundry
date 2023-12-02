import React from 'react'
import exit from '../assets/exit.svg';
import testtube from '../assets/testtube.svg';
import setting from '../assets/setting.svg';
import check from '../assets/check.png';
import refresh from '../assets/refresh.png';
import backgroundimage from '../assets/backgroundimg.png';

const icons = [exit, testtube, setting, check, refresh];
const SliderCard = ({text,index}) => {
  return (
    <div style={{background: `url(${backgroundimage})`, borderRadius: '2rem', padding: '2rem 2rem', overflow: 'hidden', width: '350px'}}>
        <p style={{color: 'rgba(198, 229, 241, 0.80)', width: '80%', fontFamily: 'Avenir Next LT Pro', fontSize: '2rem'}}>{text}</p>
        <img style={{width: '200px', float: 'right'}} src={icons[index]} alt="" />
    </div>
  )
}

export default SliderCard