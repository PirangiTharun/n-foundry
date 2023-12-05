import React from 'react';
import logo from '../assets/Vector.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import arrow from '../assets/arrow-right.svg';
import './Footer.css';

const Footer = () => {
    return (
      <div className='footerContainer'>
        <img src={logo} alt="logo" />
        <div>
          <div className="flexing">
            <div>
              <h2 className='mainText'>How Can We Work Together for a Healthier </h2>
            </div>
            <div>
              <p className='smallTitle'>Navigation links</p>
              <ul>
                <li>Home<img src={arrow} alt="" /></li>
                <li>Projects<img src={arrow} alt="" /></li>
                <li>Solutions<img src={arrow} alt="" /></li>
                <li>About<img src={arrow} alt="" /></li>
                <li>Contact<img src={arrow} alt="" /></li>
              </ul>
            </div>
            <div>
              <p className='smallTitle'>Contact</p>
              <p className='contacts'>6-9 The Square, Hayes, Uxbridge UB11 1FW, United Kingdom</p>
              <p className='contacts'>info@neuralfoundry.co.uk</p>
              <p className='contacts'>(+44) 020 8622 3011</p>
              <div className='imageContainer'>
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='tncContainer'>
          <div style={{display: 'flex', gap: '2rem'}}>
            <p className='tnc'>Privacy<img src={arrow} alt="" /></p>
            <p className='tnc'>Terms and Conditions<img src={arrow} alt="" /></p>
          </div>
          <p className='cpr'>© 2023 Neural Foundry Ltd</p>
        </div>
      </div>
    );
}

export default Footer