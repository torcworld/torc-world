'use client';

import {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './submit.module.css';

const packages = {
 evaluation: 'TORC Evaluation — €195',
 development: 'TORC Development — €595',
 cycle: 'TORC Development Cycle — €995',
} as const;

type PackageKey = keyof typeof packages;

function SubmissionForm(){
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [message,setMessage]=useState('');
 const [selectedPackage,setSelectedPackage]=useState<string>(packages.development);

 useEffect(()=>{
  const key=new URLSearchParams(window.location.search).get('package') as PackageKey | null;
  if(key && packages[key]) setSelectedPackage(packages[key]);
 },[]);

 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); setStatus('sending'); setMessage('');
  const form=e.currentTarget; const data=new FormData(form);
  const file=data.get('artifact');
  if(file instanceof File && file.size > 4 * 1024 * 1024){
   setStatus('error'); setMessage('Please upload a file smaller than 4 MB.'); return;
  }
  try{
   const res=await fetch('/api/artifact-submission',{method:'POST',body:data});
   const body=await res.json();
   if(!res.ok) throw new Error(body?.error||'Submission could not be sent.');
   setStatus('sent');
   setMessage('Artifact received. We’ll review the scope and reply before any evaluation begins.');
   form.reset(); setSelectedPackage(packages.development);
  }catch(err:any){
   setStatus('error'); setMessage(err?.message||'Submission could not be sent.');
  }
 }

 return <form className={styles.form} onSubmit={submit}>
  <div className={styles.two}><label>Your name<input name="name" required autoComplete="name"/></label><label>Email<input name="email" required type="email" autoComplete="email"/></label></div>
  <div className={styles.two}><label>Artifact title<input name="title" required/></label><label>Artifact type<select name="type" required defaultValue=""><option value="" disabled>Select type</option><option>Screenplay</option><option>Manuscript / novel</option><option>Essay / philosophy</option><option>Research / theory</option><option>Film / audiovisual work</option><option>Music</option><option>Game / formal system</option><option>Other</option></select></label></div>
  <label>Analysis<select name="package" required value={selectedPackage} onChange={e=>setSelectedPackage(e.target.value)}><option>{packages.evaluation}</option><option>{packages.development}</option><option>{packages.cycle}</option></select></label>
  <label className={styles.upload}>Upload artifact <span>PDF, DOCX, TXT or MD · max 4 MB</span><input name="artifact" type="file" required accept=".pdf,.doc,.docx,.txt,.md,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"/></label>
  <label>What do you most want TORC to answer? <span className={styles.optional}>Optional</span>
   <select name="focus" defaultValue="">
    <option value="">Choose a question or leave this open</option>
    <option>Something feels present in the work but not yet fully realized.</option>
    <option>The work loses force somewhere, but I cannot identify why.</option>
    <option>Several problems may be manifestations of the same deeper problem.</option>
    <option>What is the work actually doing beneath its surface?</option>
    <option>What existing material could be doing more?</option>
    <option>What should I protect rather than revise?</option>
    <option>Is a major revision I am considering structurally warranted?</option>
    <option>Does the ending change the meaning of what came before?</option>
    <option>Diagnose the artifact without a preferred outcome.</option>
    <option>Is there evidence of a higher-order possibility in the existing work?</option>
    <option>What Operational Order does the artifact actually reach — and why?</option>
    <option>I have a specific CMS or dimension question.</option>
    <option>I have another question.</option>
   </select>
  </label>
  <p className={styles.questionNote}><b>Evaluation</b> shows you what the work is actually doing, where it is strongest, and the central gap holding it back. <b>Development</b> turns that diagnosis into a concrete intervention strategy. <b>Development Cycle</b> adds revision support and an independent re-evaluation of the revised artifact.</p>
  <label>Anything specific you want TORC to examine? <span className={styles.optional}>Optional</span><textarea name="notes" rows={4} placeholder="Add context, a revision question, a passage you are unsure about, or simply tell us where the work feels unresolved."/></label>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',opacity:0}}/>
  <label className={styles.check}><input type="checkbox" name="permission" value="yes" required/><span>I own this work or have permission to submit it for evaluation.</span></label>
  <button className={styles.submitButton} disabled={status==='sending'}>{status==='sending'?'Sending…':'Submit artifact for review'}</button>
  <p className={styles.noCharge}>No payment is taken at submission. Scope and turnaround are confirmed first.</p>
  {message&&<p className={status==='sent'?styles.success:styles.error} role="status">{message}</p>}
 </form>
}

type PackageKey = 'evaluation' | 'development' | 'cycle';

const details = {
 evaluation: {
  phase:'SEE',
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

function PricingCards(){
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

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <h1><span>Your work may not need more.</span><span>It may need what is already there to do more.</span></h1>
   <p className={styles.heroTagline}>Find what your work actually does — and what is preventing its strongest architecture from becoming necessary.</p>
  </header>

  <section className={styles.process} aria-label="TORC development process">
   <div className={styles.processStep}>
    <h3>Diagnose</h3>
    <p><b>What is actually here?</b> Establish the governing architecture of the work as it exists — not what it intends to be.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Find the gap</h3>
    <p><b>What still explains too much?</b> Locate where a simpler explanation remains sufficient, or where a stronger warranted architecture remains unrealized.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Intervene</h3>
    <p><b>What is the smallest change that matters?</b> Find high-leverage interventions that make more of the existing work necessary.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Test again</h3>
    <p><b>Did the work actually change?</b> A revised artifact receives no credit for following the advice. The change has to be demonstrated by the work.</p>
   </div>
  </section>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}>
    <h2>Choose how far you want to go.</h2>
    <p className={styles.pricingIntro}>Start with diagnosis, move into development, or close the loop by testing the revised work again.</p>
   </div>
   <PricingCards />
  </section>

  <section className={styles.principle} aria-label="TORC Development Principle">
   <span>THE TORC DEVELOPMENT PRINCIPLE</span>
   <h2>The best intervention makes more of the existing artifact necessary.</h2>
   <p>Several apparently different problems can be consequences of one deeper structural limitation. TORC looks for the smallest intervention capable of changing the function of material throughout the work — not the largest pile of notes.</p>
   <p className={styles.principleClose}>That is structural leverage.</p>
  </section>

  <section className={styles.creditBand}>
   <div>
    <span>NEW TO TORC?</span>
    <h2>Start with Evaluation. Continue without paying twice.</h2>
   </div>
   <p>Upgrade to TORC Development within 30 days and your €195 Evaluation fee is credited in full. Let the diagnosis show you whether TORC sees something useful in your work before committing to a deeper engagement.</p>
  </section>

  <section id="submit" className={styles.submitSection}>
   <div className={styles.submitIntro}>
    <span>START WITH YOUR WORK</span>
    <h2>Submit your artifact.</h2>
    <p>Tell us what you made and what you want to understand. You do not need to know your TORC classification or arrive with a preferred outcome.</p>
    <div className={styles.submitTrust}>
     <div><b>01</b><span>Private by default</span></div>
     <div><b>02</b><span>No payment at submission</span></div>
     <div><b>03</b><span>Scope confirmed first</span></div>
    </div>
   </div>
   <SubmissionForm />

   {/* 2026-09-03: Submission & Privacy trust disclosure */}
   <div className={styles.privacyTrust}>
    <span className={styles.privacyEyebrow}>YOUR WORK REMAINS YOURS</span>
    <p className={styles.privacySummary}>Submitted artifacts are used only to perform your TORC analysis and are deleted after completion.</p>
    <details className={styles.privacyDetails}>
     <summary>Submission &amp; Privacy <span aria-hidden="true">→</span></summary>
     <div className={styles.privacyBody}>
      <h3>Submission &amp; Privacy</h3>
      <p>Your work remains yours. Submitting an artifact to TORC does not transfer any ownership, copyright, or other intellectual-property rights to TORC.</p>
      <p>Submitted materials are used only for the purpose of providing the TORC service you requested. TORC does not publish, sell, distribute, or use submitted work for promotional purposes without your explicit permission.</p>
      <p>Access to submitted materials is limited to what is necessary to perform the requested analysis. Submitted files are deleted from TORC&apos;s working records after the requested service has been completed and delivered.</p>
      <p>Where third-party technical services are required to receive, store, transmit, or process a submission, they may process data only as part of providing those services.</p>
      <p>TORC analyses, classifications, and recommendations are evaluative judgments. They do not affect the creator&apos;s ownership of the underlying work.</p>
      <p>If you would like your submitted material deleted earlier, you may contact TORC at <a href="mailto:contact@torc.world">contact@torc.world</a>.</p>
     </div>
    </details>
   </div>
  </section>
 </main>
}
