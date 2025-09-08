import React from 'react';
import { motion } from 'framer-motion';

export default function InfoOverlay({project,onClose}){
  return (
    <div className="info-overlay" onClick={onClose}>
      <motion.div className="info-card" initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.35}} onClick={(e)=>e.stopPropagation()}>
        <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <img src={'/assets/'+project.image} style={{width:320,height:200,objectFit:'cover',borderRadius:8}} alt="proj"/>
          <div style={{flex:1}}>
            <h2>{project.title}</h2>
            <p>{project.long}</p>
            <p style={{marginTop:8,fontStyle:'italic'}}><strong>Tech:</strong> {project.tech.join(', ')}</p>
            <div style={{marginTop:12}}>
              <a href={project.link} target="_blank" rel="noreferrer" style={{padding:'8px 12px',background:'#0b1220',borderRadius:8,textDecoration:'none'}}>Visit</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
