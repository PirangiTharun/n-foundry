import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import './Home.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from '../models/Capsule.jsx';
import { Suspense } from "react";
import {Model as CapsulePill} from '../models/CapsulePills.jsx';
import {Model as Particles} from '../models/Particles.jsx';

const Home = () => {
  const [distance, setDistance] = useState(0);
  return (
    <div onWheel={(e)=> setDistance(Math.min(Math.max(distance+e.deltaY/5, 0),300))}>
        <Navbar />
        <div>
            <p className='intro'>Elevate Pharma Innovation <br></br> With Your Vision & Our Expertise in </p>
            <p className='mainIntro'>AI, AR & Robotics</p>

            <button className='eqBtn'>Enquire now</button>
            <div style={{top:`${distance}px`}} className='canvasContainer'>
              <Canvas camera={{ position: [0,0,-800], fov: 70}}>
                {/* <color attach="background" args={[0xe2f4df]} /> */}
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate={false} />
                <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
                <directionalLight intensity={0.8} position={[-6, 2, 2]} />
                <Suspense fallback={null}>
                    <Particles scale={40} distance={distance}/>
                    <CapsulePill scale={1} distance={distance} />
                    {/* <Model z={z} scale={0.3} setZ={setZ}/> */}
                </Suspense>
              </Canvas>
            </div>
        </div>
    </div>
  )
}

export default Home;