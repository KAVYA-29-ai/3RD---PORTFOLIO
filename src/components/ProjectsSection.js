import React from 'react';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';

export default function ProjectsSection({onSelect}){
  return (
    <div id="projects" className="card">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p=>(
          <motion.div key={p.id} className="card" style={{cursor:'pointer'}} whileHover={{scale:1.02}} onClick={()=>onSelect(p)}>
            <img src={'/assets/'+p.image} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} alt={p.title}/>
            <h3 style={{marginTop:8}}>{p.title}</h3>
            <p style={{fontSize:13,opacity:0.85}}>{p.short}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
