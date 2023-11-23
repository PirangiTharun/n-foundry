import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import './Home.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from '../models/Capsule.jsx';
import { Suspense } from "react";
import {Model as CapsulePill} from '../models/CapsulePills.jsx';
import {Model as Particles} from '../models/Particles.jsx';
import {Model as PurpleCapsule} from '../models/PurpleCapsule.jsx';
import tripod from '../assets/tripod.svg';
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import FAQ from './FAQ.js';
import Footer from './Footer.js';
import BusinessCase from './BusinessCase.js';
import SecondBusiness from './SecondBusiness.js';
import SingleProduct from './SingleProduct.js';

const Home = () => {
  const [distance, setDistance] = useState(0);
  const capsuleElement = document.getElementById('canvass');
  const tripodElement = document.getElementById('tripod');
  const [flag, setFlag] = useState(false);

  // useEffect(()=>{
  //   let capsuleDistance = window.scrollY+ capsuleElement?.getBoundingClientRect()?.top;
  //   let tripodDistance = window.scrollY+ tripodElement?.getBoundingClientRect()?.top;
  //   setFlag((capsuleDistance+200)>tripodDistance);
  // },[capsuleElement, distance, tripodElement]);

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  const sliders = document.querySelectorAll(".slide-in");
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

  
  return (
    <div onWheel={(e)=> setDistance(Math.min(Math.max(distance+e.deltaY/5, 0),300))}>
        <Navbar />
        <div style={{height:'80svh'}}>
            <p className='intro'>Elevate Pharma Innovation <br></br> With Your Vision & Our Expertise in </p>
            <p className='mainIntro'>AI, AR & Robotics</p>

            <button className='eqBtn'>Enquire now</button>
            <div id='canvass' style={!flag? {position:'fixed'}:{position:'sticky'}} className='canvasContainer'>
              <Canvas camera={{ position: [0,0,-800], fov: 70}}>
                {/* <color attach="background" args={[0xe2f4df]} /> */}
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate/>
                <pointLight position={[0, 20, 10]} intensity={1.5} />
                <directionalLight intensity={2} position={[0.5, 0, 0.866]} />
                <spotLight intensity={2}/>
                <directionalLight intensity={2} position={[-6, 2, 2]} />
                <Suspense fallback={null}>
                    <Particles scale={40} distance={distance}/>
                    {/* <CapsulePill scale={1} distance={distance} /> */}
                    <PurpleCapsule scale={1} distance={distance} />
                    {/* <Model z={z} scale={0.3} setZ={setZ}/> */}
                </Suspense>
              </Canvas>
            </div>
        </div>
        <div>
          <div className='section'>
            <LeftSection />
            <RightSection />
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <img id='tripod' style={{width: '100%'}} src={tripod} alt="" />
          </div>
        </div>
        <BusinessCase />
        <SecondBusiness />
        <SingleProduct />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home;