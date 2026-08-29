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
   <ul><li>Operational Order + boundary determination</li><li>Six-dimensional cognitive profile</li><li>Cognitive Magnitude Score + DIP</li><li>Core strengths and limiting structures</li><li>Written TORC analysis</li><li>One clarification question after delivery</li></ul>
   <a onClick={choose('evaluation')} href="?package=evaluation#submit">Choose Evaluation <span>→</span></a>
  </article>

  <article className={cls('development')} onClick={choose('development')} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ') setSelected('development')}}>
   <div className={styles.recommended}>RECOMMENDED</div>
   <div><span className={styles.package}>TORC Development</span><div className={styles.price}>€495</div><p className={styles.priceLead}>Find what is holding the work back — and what could make it structurally stronger.</p></div>
   <ul><li>Everything in TORC Evaluation</li><li>Operational-ceiling + next-Order diagnosis</li><li>Cognitive Magnitude development by dimension</li><li>False-depth and unsupported-complexity audit</li><li>Prioritized structural revision opportunities</li><li>Development questions answered in the report</li><li>One follow-up round after delivery</li></ul>
   <a onClick={choose('development')} href="?package=development#submit">Choose Development <span>→</span></a>
  </article>

  <article className={cls('cycle')} onClick={choose('cycle')} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ') setSelected('cycle')}}>
   <div><span className={styles.package}>TORC Development Cycle</span><div className={styles.price}>€895</div><p className={styles.priceLead}>Diagnose it. Develop it. Revise it. Then test the revised artifact again.</p></div>
   <ul><li>Everything in TORC Development</li><li>Deeper section / sequence-level diagnosis</li><li>Competing interpretations stress-tested</li><li>Extended revision priorities</li><li>One follow-up round during revision</li><li>One re-evaluation of the revised artifact</li><li>Before / after TORC comparison</li></ul>
   <a onClick={choose('cycle')} href="?package=cycle#submit">Choose Development Cycle <span>→</span></a>
  </article>
 </div>
}
