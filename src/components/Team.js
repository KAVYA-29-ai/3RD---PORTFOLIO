import React from 'react';
import team from '../data/team.json';
import { motion } from 'framer-motion';

export default function Team(){
  return (
    <div id="team" className="card">
      <h2>Team</h2>
      <div className="team-grid">
        {team.map(m=>(
          <motion.div key={m.id} className="card" style={{textAlign:'center',cursor:'default'}} whileHover={{scale:1.03}}>
            <img src={'/assets/'+m.image} style={{width:100,height:100,objectFit:'cover',borderRadius:12,display:'block',margin:'0 auto 8px'}} alt={m.name}/>
            <strong>{m.name}</strong>
            <div style={{fontSize:13,opacity:0.8}}>{m.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
