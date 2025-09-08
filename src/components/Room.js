import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import ProjectCard from './ProjectCard';
import { SoftShadows } from '@react-three/drei';

export default function Room({projects,onSelect}){
  const group = useRef();
  useFrame((state,dt)=>{
    if(!group.current) return;
    group.current.rotation.y += 0.02*dt;
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5,5,5]} intensity={0.6} />
      {projects.map((p,i)=>(
        <ProjectCard key={p.id} position={[ (i-2)*2.0, 0.6 - (i%2)*0.7, -i*0.6 ]} data={p} onClick={()=>onSelect(p)} />
      ))}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.2,0]}>
        <planeGeometry args={[30,30]} />
        <meshStandardMaterial color="#050814" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
}
