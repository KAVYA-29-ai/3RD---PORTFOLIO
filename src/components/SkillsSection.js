import React, {useEffect} from 'react';
import skills from '../data/skills.json';

export default function SkillsSection(){
  useEffect(()=>{
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach((f,idx)=>{ setTimeout(()=> f.style.width = f.dataset.pct + '%', 150 + idx*150) });
  },[]);
  return (
    <div id="skills" className="card">
      <h2>Skills</h2>
      {skills.map(s=>(
        <div key={s.id} style={{marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:6}}>
            <div>{s.name}</div><div>{s.level}%</div>
          </div>
          <div className="skill-bar"><div className="skill-fill" data-pct={s.level} style={{width:0}}></div></div>
        </div>
      ))}
    </div>
  );
}
