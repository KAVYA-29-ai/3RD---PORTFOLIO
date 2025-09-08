import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './components/Room';
import ProjectsSection from './components/ProjectsSection';
import About from './components/About';
import Team from './components/Team';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import InfoOverlay from './components/InfoOverlay';
import projects from './data/projects.json';

export default function App(){
  const [selected, setSelected] = useState(null);
  return (
    <div className="app">
      <header className="topbar">
        <h1>Kavya Rajput</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#team">Team</a>
          <a href="#certs">Certificates</a>
        </nav>
      </header>

      <main>
        <section className="stage">
          <Canvas camera={{ position: [0, 1.6, 6], fov: 48 }}>
            <color attach="background" args={['#061224']} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10,10,10]} intensity={0.5} />
            <Room projects={projects} onSelect={(p)=>setSelected(p)} />
            <OrbitControls enablePan={false} />
          </Canvas>
        </section>

        <section className="content">
          <div className="left">
            <About linkedin="https://www.linkedin.com/in/kavya-rajput-431055370/" />
            <SkillsSection />
            <CertificatesSection />
          </div>
          <div className="right">
            <ProjectsSection onSelect={(p)=>setSelected(p)} />
            <Team />
          </div>
        </section>
      </main>

      <footer className="footer">Made with ❤️ — <a href="https://www.linkedin.com/in/kavya-rajput-431055370/" target="_blank" rel="noreferrer">LinkedIn</a></footer>

      {selected && <InfoOverlay project={selected} onClose={()=>setSelected(null)} />}
    </div>
  );
}
