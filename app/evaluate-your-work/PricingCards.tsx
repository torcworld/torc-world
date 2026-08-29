'use client';

import {useEffect, useState} from 'react';
import styles from './submit.module.css';

type PackageKey = 'evaluation' | 'development' | 'deep';

export default function PricingCards(){
 const [selected,setSelected]=useState<PackageKey>('development');

 useEffect(()=>{
  const key=new URLSearchParams(window.location.search).get('package') as PackageKey | null;
  if(key==='evaluation'||key==='development'||key==='deep') setSelected(key);
 },[]);

 const choose=(key:PackageKey)=>()=>setSelected(key);
 const cls=(key:PackageKey)=>`${styles.priceCard} ${selected===key?styles.selectedPriceCard:''}`;

 return <div className={styles.priceGrid}>
  <article className={cls('evaluation')}>
   <div><span className={styles.package}>TORC Evaluation</span><div className={styles.price}>€149</div><p className={styles.priceLead}>A complete TORC profile of the artifact as it stands.</p></div>
   <ul><li>Operational Order</li><li>Six-dimensional cognitive profile</li><li>Cognitive Magnitude Score + DIP</li><li>Boundary analysis</li><li>Principal strengths and limitations</li></ul>
   <a onClick={choose('evaluation')} href="?package=evaluation#submit">Choose Evaluation <span>→</span></a>
  </article>

  <article className={cls('development')}>
   <div className={styles.recommended}>RECOMMENDED · FOUNDING RATE</div>
   <div><span className={styles.package}>TORC Development</span><div className={styles.price}>€349 <small>standard €495</small></div><p className={styles.priceLead}>Where the work stops — and what could make it structurally stronger.</p></div>
   <ul><li>Everything in TORC Evaluation</li><li>Operational-ceiling diagnosis</li><li>Next-Order boundary analysis</li><li>Cognitive Magnitude development</li><li>False-depth audit</li><li>Prioritized structural opportunities</li></ul>
   <a onClick={choose('development')} href="?package=development#submit">Choose Development <span>→</span></a>
  </article>

  <article className={cls('deep')}>
   <div><span className={styles.package}>TORC Deep Analysis</span><div className={styles.price}>from €695</div><p className={styles.priceLead}>A deeper examination of the artifact as a complete cognitive architecture.</p></div>
   <ul><li>Everything in TORC Development</li><li>Section / sequence-level analysis</li><li>Competing interpretations tested</li><li>Order × Magnitude interaction</li><li>Extended revision priorities</li><li>Substantial final report</li></ul>
   <a onClick={choose('deep')} href="?package=deep#submit">Choose Deep Analysis <span>→</span></a>
  </article>
 </div>
}
