import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import pcapsule from "../gltfs/pill new colours .gltf";

export function Model(props) {
  const { nodes, materials } = useGLTF(pcapsule);
  return (
    <group position={[0,-200,0]} rotateOnAxis {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube.geometry}
        material={materials["Material.003"]}
        // rotation={[Math.PI / 2, 0, 0]}
        // scale={0.01}
        position={[props.distance/4,0,0]}
        rotation={[0,0,-props.distance/400]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube001.geometry}
        material={materials["Material.004"]}
        // rotation={[Math.PI / 2, 0, 0]}
        // scale={0.01}
        position={[-props.distance/4,0,0]}
        rotation={[0,0,props.distance/400]}
      />
    </group>
  );
}

useGLTF.preload(pcapsule);