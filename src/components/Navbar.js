import React from 'react'
import logo from '../assets/Vector.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navContainer'>
        <img src={logo} alt="" />
        <ul className='ulList'>
            <li>Home</li>
            <li>Products</li>
            <li>Incentive</li>
            <li>About</li>
            <li className='contactBtn'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar