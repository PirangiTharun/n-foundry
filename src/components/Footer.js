import React from 'react';
import logo from '../assets/Vector.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';


const Footer = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <div>
                <div>
                    <div>
                        <h2>How Can We Work Together for a Healthier </h2>
                    </div>
                    <div>
                        <p>Navigation links</p>
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>Solutions</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>6-9 The Square, Hayes, Uxbridge UB11 1FW, United Kingdom</p>
                        <p>info@neuralfoundry.co.uk</p>
                        <p>(+44) 020 8622 3011</p>
                        <div>
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Privacy</p>
                    <p>Terms and Conditions</p>
                </div>
                <p>© 2023 Neural Foundry Ltd</p>
            </div>
        </div>
    )
}

export default Footer