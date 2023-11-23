/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import capsulepills from "../gltfs/Capsule pills.gltf";

export function Model(props) {
  const { nodes, materials } = useGLTF(capsulepills);

  return (
    <group position={[0,-200,0]} rotateOnAxis {...props} dispose={null}>
      <mesh
        // this is greeen shit
        position={[props.distance/4,0,0]}
        rotation={[0,0,-props.distance/400]}
        castShadow
        receiveShadow
        geometry={nodes.Roundcube.geometry}
        material={materials.Material}
      />
      <mesh
        // this is white shit
        position={[-props.distance/4,0,0]}
        rotation={[0,0,props.distance/400]}
        castShadow
        receiveShadow
        geometry={nodes.Roundcube001.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload(capsulepills);