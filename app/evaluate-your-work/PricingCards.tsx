'use client';

import {useEffect, useRef, useState} from 'react';
import styles from './submit.module.css';

type PackageKey = 'evaluation' | 'development' | 'cycle';

const details = {
 evaluation: {
  phase:'DIAGNOSE',
  name:'TORC Evaluation',
  price:'€195',
  question:'What have I actually built?',
  lead:'See the governing architecture of your work, what it already does unusually well, and the central limitation preventing that architecture from becoming fully necessary.',
  best:'Understanding the work at a structural level before deciding whether or how to revise it.',
  intro:'You may already know what your work is about. The Evaluation shows you what it is actually doing. TORC diagnoses the completed artifact as it exists: the architecture carrying it, the strongest structural achievements already present, and the central gap limiting fuller realization. The classification and scores matter, but they are coordinates of the diagnosis — not the product itself.',
  items:[
   'Governing architecture of the completed work',
   'What the work is actually doing beneath its apparent themes or surface structure',
   'The strongest structural achievements already present',
   'The central Development Gap',
   'The highest-leverage development question raised by that gap',
   'Higher-order potential, where genuinely supported by the work',
   'Operational Order + concise boundary determination',
   'Six-dimensional Cognitive Architecture',
   'Cognitive Magnitude Score + Demonstrated Intelligence Profile',
   'Written TORC Evaluation Report',
   'One post-delivery clarification exchange'
  ],
  cta:'Choose Evaluation'
 },
 development: {
  phase:'INTERVENE',
  name:'TORC Development',
  price:'€595',
  question:'What should change — and where?',
  lead:'Turn the diagnosis into a minimum-intervention revision strategy: identify the strongest latent architecture genuinely supported by the work and the few changes capable of affecting the whole.',
  best:'Creators who want to know not only what the structural problem is, but where and how to intervene.',
  intro:'Development begins with the work as it actually exists. It maps the Current Architecture, identifies a Latent Architecture only where the existing material genuinely warrants one, and then looks for structural leverage: the smallest changes capable of altering the function of material throughout the artifact. The objective is not a higher TORC classification. It is a stronger realization of the work itself.',
  items:[
   'Everything in TORC Evaluation',
   'Full Current Architecture diagnosis',
   'Latent Architecture diagnosis, where genuinely warranted',
   'Detailed Development Gap analysis',
   'The strongest residual explanation — what still explains too much of the work',
   '1–3 governing interventions, expressed through 3–5 priority applications',
   'Propagation analysis: what each intervention changes elsewhere',
   'Minimum-intervention priorities',
   '“Do Not Change” preservation guidance',
   'Risks and trade-offs attached to major interventions',
   'Practical revision priorities',
   'One follow-up development round'
  ],
  cta:'Choose Development'
 },
 cycle: {
  phase:'VERIFY',
  name:'TORC Development Cycle',
  price:'€995',
  question:'Did the revision actually work?',
  lead:'Diagnose and develop the work, then test the revised artifact again without assuming the recommendations succeeded.',
  best:'Serious revision where you want independent before/after verification rather than development advice alone.',
  intro:'The Cycle closes the loop. After Development, the revised artifact is evaluated again as an artifact in its own right. Following TORC advice earns no credit. The new work has to demonstrate the predicted structural change — and the re-evaluation records what propagated, what remained unchanged, and what new weaknesses may have appeared.',
  items:[
   'Everything in TORC Evaluation and Development',
   'Blind TORC re-evaluation of the revised artifact',
   'New committed Demonstrated Intelligence Profile',
   'Before / after architectural comparison',
   'Central Structural Constraint verification',
   'Development Objective verification',
   'Intervention and propagation audit',
   'Preservation and collateral-damage audit',
   'Unexpected gains and losses introduced by revision',
   'TORC self-correction audit, where materially warranted',
   'Committed Cycle Verdict + current-state diagnosis'
  ],
  cta:'Choose Development Cycle'
 }
} as const;

export default function PricingCards(){
 const [selected,setSelected]=useState<PackageKey>('development');
 const detailRef=useRef<HTMLDivElement>(null);

 useEffect(()=>{
  const key=new URLSearchParams(window.location.search).get('package') as PackageKey | null;
  if(key==='evaluation'||key==='development'||key==='cycle') setSelected(key);
 },[]);

 const selectAndReveal=(key:PackageKey)=>{
  setSelected(key);
  requestAnimationFrame(()=>{
   requestAnimationFrame(()=>detailRef.current?.scrollIntoView({behavior:'smooth',block:'start'}));
  });
 };
 const choose=(key:PackageKey)=>()=>selectAndReveal(key);
 const cls=(key:PackageKey)=>`${styles.priceCard} ${selected===key?styles.selectedPriceCard:''}`;
 const active=details[selected];

 return <>
  <div className={styles.priceGrid}>
   {(Object.keys(details) as PackageKey[]).map(key=>{
    const item=details[key];
    return <article key={key} className={cls(key)} onClick={choose(key)} role="button" tabIndex={0} aria-pressed={selected===key} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectAndReveal(key)}}}>
     {key==='development'&&<div className={styles.recommended}>RECOMMENDED</div>}
     <div>
      <span className={styles.phase}>{item.phase}</span>
      <span className={styles.package}>{item.name}</span>
      <div className={styles.price}>{item.price}</div>
      <h3 className={styles.cardQuestion}>{item.question}</h3>
      <p className={styles.priceLead}>{item.lead}</p>
     </div>
     <div>
      <p className={styles.cardBest}><b>Best for:</b> {item.best}</p>
      <button type="button" className={styles.exploreButton} onClick={e=>{e.stopPropagation();selectAndReveal(key)}}>{`Explore ${key==='cycle'?'Cycle':key[0].toUpperCase()+key.slice(1)}`} <span>{selected===key?'↓':'→'}</span></button>
     </div>
    </article>
   })}
  </div>

  <div ref={detailRef} className={styles.packageDetail} aria-live="polite">
   <div className={styles.detailHeader}>
    <div><span>{active.phase} · {active.name}</span><h3>{active.question}</h3></div>
    <strong>{active.price}</strong>
   </div>
   <p className={styles.detailIntro}>{active.intro}</p>
   <div className={styles.detailColumns}>
    <div>
     <h4>What you receive</h4>
     <ul>{active.items.map(item=><li key={item}>{item}</li>)}</ul>
    </div>
    <aside>
     <span>BEST FOR</span>
     <p>{active.best}</p>
     {selected==='evaluation'&&<>
      <p className={styles.detailNote}><b>Complete diagnosis, not a teaser.</b> The Evaluation tells you what is structurally happening and why it matters. It stops before a full repair map: exact cuts, rewrites and intervention design belong to Development.</p>
      <p className={styles.detailNote}>Continue to Development within 30 days and your full €195 Evaluation fee is credited toward the €595 Development package.</p>
     </>}
     {selected==='development'&&<>
      <p className={styles.detailNote}><b>The objective is not a higher TORC classification.</b> It is to more fully realize the strongest architecture the work itself already warrants.</p>
      <p className={styles.detailNote}><b>Already completed a TORC Evaluation?</b> Continue to Development within 30 days and your full €195 fee is credited. <b>You pay €400 to upgrade.</b></p>
     </>}
     {selected==='cycle'&&<>
      <p className={styles.detailNote}><b>Advice is not evidence.</b> The re-evaluation does not reward the artifact for following TORC recommendations. The revised work has to demonstrate the change.</p>
      <p className={styles.detailNote}><b>Already completed TORC Development?</b> Continue to the Cycle within 30 days and your full €595 fee is credited. <b>You pay €400 to upgrade.</b></p>
     </>}
    </aside>
   </div>
   {selected==='development'&&
    <div className={styles.upgradeCreditPanel}>
     <span>CONTINUE TO VERIFY</span>
     <div>
      <h4>Going on to the TORC Development Cycle?</h4>
      <p>Continue within 30 days and your full €595 Development fee is credited toward the €995 Cycle. <b>You pay €400 to upgrade.</b></p>
     </div>
    </div>
   }
   <a className={styles.detailCta} href={`?package=${selected}#submit`}>{active.cta} — {active.price} <span>→</span></a>
  </div>
 </>
}
