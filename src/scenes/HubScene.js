import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRouter } from 'next/router';
import * as THREE from 'three';

export default function HubScene() {
  const router = useRouter();

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />

      <mesh position={[-3, 0, 0]} onClick={() => router.push('/certificates')}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color=\"cyan\" emissive=\"blue\" />
      </mesh>

      <mesh position={[3, 0, 0]} onClick={() => router.push('/projects')}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color=\"magenta\" emissive=\"purple\" />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}