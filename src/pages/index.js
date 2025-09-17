import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HUD from '@/components/HUD';
import '../styles/globals.css';

const HubScene = dynamic(() => import('@/scenes/HubScene'), { ssr: false });

export default function Home() {
  return (
    <main className=\"w-screen h-screen bg-black text-white\">
      <HUD />
      <Suspense fallback={<div className=\"text-center mt-20\">Loading 3D...</div>}>
        <HubScene />
      </Suspense>
    </main>
  );
}