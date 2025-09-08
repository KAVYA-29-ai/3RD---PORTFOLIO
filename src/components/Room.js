import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import ProjectCard from './ProjectCard';
import * as THREE from 'three';

export default function Room({ projects, onSelect }) {
  const group = useRef();
  const instancedMesh = useRef();

  // Rotation animation
  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += 0.02 * dt;
  });

  // Geometry and material for InstancedMesh
  const geometry = new THREE.BoxGeometry(1, 1, 0.5); // example box for each project
  const material = new THREE.MeshStandardMaterial({ color: '#8b5cf6' });

  // Set positions of all instances
  useEffect(() => {
    if (!instancedMesh.current) return;
    projects.forEach((p, i) => {
      const matrix = new THREE.Matrix4();
      matrix.setPosition((i - 2) * 2.0, 0.6 - (i % 2) * 0.7, -i * 0.6);
      instancedMesh.current.setMatrixAt(i, matrix);
    });
    instancedMesh.current.instanceMatrix.needsUpdate = true;
  }, [projects]);

  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      {/* InstancedMesh for performance */}
      <instancedMesh
        ref={instancedMesh}
        args={[geometry, material, projects.length]}
      />

      {/* Individual clickable ProjectCards */}
      {projects.map((p, i) => (
        <ProjectCard
          key={p.id}
          position={[(i - 2) * 2.0, 0.6 - (i % 2) * 0.7, -i * 0.6]}
          data={p}
          onClick={() => onSelect(p)}
        />
      ))}

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#050814" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
}
