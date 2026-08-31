'use client';

import {useEffect, useRef, useState} from 'react';
import styles from './submit.module.css';

type PackageKey = 'evaluation' | 'development' | 'cycle';

const details = {
 evaluation: {
  name:'TORC Evaluation', price:'€195', question:'What is actually here?',
  lead:'A rigorous diagnosis of the architecture your work actually demonstrates — its governing operation, structural strengths and current limits.',
  best:'Understanding the work precisely before deciding whether or how to revise it.',
  intro:'TORC evaluates the artifact as it exists. Operational Order, cognitive profile and magnitude are consequences of the diagnosis — not targets imposed in advance.',
  items:['Operational Order + boundary determination','Six-dimensional cognitive architecture','Cognitive Magnitude Score + Demonstrated Intelligence Profile','Governing operation','Strongest serious alternative determination','Core structural strengths and limiting structures','Written TORC Evaluation Report','One post-delivery clarification exchange'],
  cta:'Choose Evaluation'
 },
 development: {
  name:'TORC Development', price:'€595', question:'What is not yet fully realized?',
  lead:'Find the strongest architecture already warranted by the work, what still explains too much of it, and the smallest interventions capable of affecting the whole.',
  best:'Turning structural diagnosis into a precise, minimum-intervention revision strategy.',
  intro:'Development begins with the work as it actually exists. Where genuinely warranted, TORC identifies a stronger architecture already supported by existing material, locates the Development Gap, and designs interventions around structural leverage — not classification chasing.',
  items:['Everything in TORC Evaluation','Current Architecture diagnosis','Latent Architecture diagnosis, where genuinely warranted','The central Development Gap','The strongest residual explanation — what still explains too much of the work','3–5 high-leverage structural interventions','Propagation analysis: what each intervention makes existing material do differently','Minimum-intervention priorities','“Do Not Change” preservation guidance','Risks and trade-offs attached to major interventions','Practical revision priorities','One follow-up development round'],
  cta:'Choose Development'
 },
 cycle: {
  name:'TORC Development Cycle', price:'€995', question:'Did the revision actually work?',
  lead:'Diagnose, develop and revise — then test the new artifact again without assuming the recommendations succeeded.',
  best:'Serious revision where you want independent before/after verification, not just development advice.',
  intro:'The Cycle closes the loop. The revised artifact is evaluated again as an artifact in its own right. Following TORC advice earns no credit: the work has to demonstrate the predicted structural change.',
  items:['Everything in TORC Development','Deeper sequence, chapter or section mapping where useful','Revision priorities stress-tested against the diagnosis','One development consultation during revision','Blind TORC re-evaluation of the revised artifact','New committed Demonstrated Intelligence Profile','Before / after architectural comparison','Which predicted effects actually propagated','What remained unchanged and which residual explanation survives','Any new weaknesses introduced by revision','Final development diagnosis'],
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
    <div><span>{active.name}</span><h3>{active.question}</h3></div>
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
     {selected==='development'&&<p className={styles.detailNote}><b>The objective is not a higher TORC classification.</b> It is to more fully realize the strongest architecture the work itself already warrants.</p>}
     {selected==='evaluation'&&<p className={styles.detailNote}>If you continue to Development within 30 days, the €195 Evaluation fee is credited in full.</p>}
     {selected==='cycle'&&<p className={styles.detailNote}>The re-evaluation does not reward the artifact for following TORC advice. The revised work has to demonstrate the change.</p>}
    </aside>
   </div>
   <a className={styles.detailCta} href={`?package=${selected}#submit`}>{active.cta} — {active.price} <span>→</span></a>
  </div>
 </>
}
