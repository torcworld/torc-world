'use client';

import {useEffect, useState} from 'react';
import styles from './submit.module.css';

type PackageKey = 'evaluation' | 'development' | 'cycle';

export default function PricingCards(){
 const [selected,setSelected]=useState<PackageKey>('development');

 useEffect(()=>{
  const key=new URLSearchParams(window.location.search).get('package') as PackageKey | null;
  if(key==='evaluation'||key==='development'||key==='cycle') setSelected(key);
 },[]);

 const choose=(key:PackageKey)=>()=>setSelected(key);
 const cls=(key:PackageKey)=>`${styles.priceCard} ${selected===key?styles.selectedPriceCard:''}`;

 return <div className={styles.priceGrid}>
  <article className={cls('evaluation')} onClick={choose('evaluation')} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ') setSelected('evaluation')}}>
   <div><span className={styles.package}>TORC Evaluation</span><div className={styles.price}>€195</div><p className={styles.priceLead}>A rigorous diagnosis of what your artifact actually demonstrates.</p></div>
   <ul><li>Operational Order + boundary determination</li><li>Six-dimensional cognitive profile</li><li>Cognitive Magnitude Score + DIP</li><li>Governing operation</li><li>Core strengths and limiting structures</li><li>Written TORC analysis</li><li>One clarification question after delivery</li></ul>
   <a onClick={choose('evaluation')} href="?package=evaluation#submit">Choose Evaluation <span>→</span></a>
  </article>

  <article className={cls('development')} onClick={choose('development')} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ') setSelected('development')}}>
   <div className={styles.recommended}>RECOMMENDED</div>
   <div><span className={styles.package}>TORC Development</span><div className={styles.price}>€495</div><p className={styles.priceLead}>Find the strongest architecture already in the work — and where it is not yet fully realized.</p></div>
   <ul><li>Everything in TORC Evaluation</li><li>Current + latent architecture diagnosis</li><li>Precise development gap</li><li>Strongest competing / residual explanation</li><li>3–5 high-leverage structural interventions</li><li>Propagation: what each change makes the existing work do</li><li>“Do not change” preservation guidance</li><li>One follow-up round after delivery</li></ul>
   <a onClick={choose('development')} href="?package=development#submit">Choose Development <span>→</span></a>
  </article>

  <article className={cls('cycle')} onClick={choose('cycle')} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ') setSelected('cycle')}}>
   <div><span className={styles.package}>TORC Development Cycle</span><div className={styles.price}>€895</div><p className={styles.priceLead}>Diagnose. Develop. Revise. Then test what the revised artifact actually demonstrates.</p></div>
   <ul><li>Everything in TORC Development</li><li>Deeper sequence / chapter / section mapping</li><li>Revision priorities stress-tested against the diagnosis</li><li>One follow-up round during revision</li><li>One blind re-evaluation of the revised artifact</li><li>Before / after TORC comparison</li><li>What changed, what did not, and what still limits the work</li></ul>
   <a onClick={choose('cycle')} href="?package=cycle#submit">Choose Development Cycle <span>→</span></a>
  </article>
 </div>
}
