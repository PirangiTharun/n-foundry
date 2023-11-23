import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import capsule from  '../gltfs/Capsule.gltf';

export function Model(props) {
  const { nodes, materials } = useGLTF(capsule);
  const [flag, setFlag] = useState(false);
  const [distance, setDistance] = useState(1);
  // console.log(z);
  return (
    <group {...props} dispose={null}>
      <mesh
        onWheel={(e)=>{
          setDistance(distance+e.deltaY/1000);
        }}
        // scale={distance}
        castShadow
        receiveShadow
        geometry={nodes.Roundcube.geometry}
        material={materials.Material}
      />
      <mesh
        onWheel={(e)=>{
          setDistance(distance+e.deltaY/1000);
        }}
        // scale={distance}
        rotateX={distance*10}
        castShadow
        receiveShadow
        geometry={nodes.Roundcube001.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload(capsule);