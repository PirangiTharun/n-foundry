import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import './Home.css';
import { Canvas, useThree} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from '../models/Capsule.jsx';
import { Suspense } from "react";
import {Model as CapsulePill} from '../models/CapsulePills.jsx';

const Home = () => {
  const [x, setX] = useState(400);
  const [y, setY] = useState(400);
  const [z, setZ] = useState(400);
  // console.log(z, "z in home");
  return (
    <div>
        <Navbar />
        <div>
            <p className='intro'>Elevate Pharma Innovation <br></br> With Your Vision & Our Expertise in </p>
            <p className='mainIntro'>AI, AR & Robotics</p>

            <button className='eqBtn'>Enquire now</button>
            <div style={{height: '40vh', width: 'inherit'}}>
              <Canvas onMouseEnter={()=>setZ(z+50)} onMouseLeave={()=>setZ(z-50)}  camera={{ position: [z, z, z], fov: 35}}>
                {/* <color attach="background" args={[0xe2f4df]} /> */}
                <ambientLight />
                <OrbitControls autoRotate />
                <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
                <directionalLight intensity={0.8} position={[-6, 2, 2]} />
                <Suspense fallback={null}>
                  <Model z={z} setZ={setZ}/>
                  {/* <CapsulePill /> */}
                </Suspense>
              </Canvas>
            </div>
        </div>
    </div>
  )
}

export default Home;