import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function ProjectCard({position=[0,0,0],data,onClick}){
  const ref = useRef();
  const tex = useTexture('/assets/' + (data.image || 'project1.svg'));
  useFrame((s,dt)=>{
    if(!ref.current) return;
    ref.current.rotation.y += 0.3*dt;
    ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime + data.id)*0.05;
  });
  return (
    <group ref={ref} position={position}>
      <mesh onClick={onClick}>
        <boxGeometry args={[1.8,1.1,0.08]} />
        <meshStandardMaterial map={tex} metalness={0.2} roughness={0.6} />
      </mesh>
      <Html center position={[0,-0.9,0]}>
        <div style={{width:220,background:'rgba(0,0,0,0.6)',padding:8,borderRadius:8,textAlign:'center'}}>
          <strong style={{fontSize:13}}>{data.title}</strong>
        </div>
      </Html>
    </group>
  );
}
