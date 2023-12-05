import React, { useState } from 'react'
import logo from '../assets/Vector.svg';
import hamburger from '../assets/menu-fill.svg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
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
      <nav className='mobileNavContainer'>
        <img src={logo} alt="" />
        <img onClick={()=>setMenuOpen(!menuOpen)} src={hamburger} alt="" />
      </nav>
      {menuOpen && <div>
        <ul className='mobileList'>
          <li>Home</li>
          <li>Products</li>
          <li>Incentive</li>
          <li>About</li>
          <li className='mobileContactBtn'>Contact</li>
        </ul>
      </div>}
    </>
  )
}

export default Navbar