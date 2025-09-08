import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import ProjectCard from './ProjectCard';
import { SoftShadows } from '@react-three/drei';
import * as THREE from 'three';
import { BatchedMesh } from 'three/examples/jsm/objects/BatchedMesh.js';

export default function Room({ projects, onSelect }) {
  const group = useRef();
  const batched = useRef();

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += 0.02 * dt;
  });

  // Initialize matrices for BatchedMesh once
  useEffect(() => {
    if (!batched.current) return;
    projects.forEach((p, i) => {
      const matrix = new THREE.Matrix4();
      matrix.setPosition((i - 2) * 2.0, 0.6 - (i % 2) * 0.7, -i * 0.6);
      batched.current.setMatrixAt(i, matrix);
    });
    batched.current.instanceMatrix.needsUpdate = true;
  }, [projects]);

  // Geometry and material for BatchedMesh (simple boxes for example)
  const geometry = new THREE.BoxGeometry(1, 1, 0.5);
  const material = new THREE.MeshStandardMaterial({ color: '#8b5cf6' });

  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      {/* BatchedMesh for performance */}
      <BatchedMesh ref={batched} geometry={geometry} material={material} count={projects.length} />

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
