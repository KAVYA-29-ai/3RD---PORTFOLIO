import React from 'react';
export default function About({linkedin}){
  return (
    <div id="about" className="card">
      <h2>About Me</h2>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <img src="/assets/profile.svg" alt="profile" style={{width:96,height:96,objectFit:'cover',borderRadius:12}}/>
        <div>
          <p><strong>Kavya Rajput</strong> — Full-stack developer focused on 3D web experiences (Three.js, React). I build immersive interfaces, performant UIs and delightful animations.</p>
          <p style={{marginTop:8,fontSize:13,opacity:0.9}}>Location: India • Interests: WebGL, UX, Design Systems</p>
          <div style={{marginTop:8}}>
            <a href={linkedin} target="_blank" rel="noreferrer" style={{padding:'8px 12px',background:'#0b1220',borderRadius:8,textDecoration:'none'}}>View LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
