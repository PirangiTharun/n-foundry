import React from 'react';
import vr from '../assets/vr.svg';
import './SingleProduct.css';

const SingleProduct = () => {
  return (
    <div className='productContainer'>
        <div>
            <h2 className='productTitle'>Vuzix M400</h2>
            <p className='productText'>Lightweight and durable, Vuzix M400 smart glasses are the most wearable, powerful, and ergonomically versatile head worn computer on the market.</p>
        </div>
        <img src={vr} alt="" />
    </div>
  )
}

export default SingleProduct