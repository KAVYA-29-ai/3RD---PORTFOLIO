import React from 'react';
import certs from '../data/certificates.json';
import { motion } from 'framer-motion';

export default function CertificatesSection(){
  return (
    <div id="certs" className="card">
      <h2>Certificates</h2>
      <div className="project-grid">
        {certs.map(c=>(
          <motion.div key={c.id} className="card" whileHover={{scale:1.02}}>
            <img src={'/assets/'+c.image} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} alt={c.title}/>
            <h4 style={{marginTop:8}}>{c.title}</h4>
            <div style={{fontSize:12,opacity:0.8}}>{c.issuer} • {c.year}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
