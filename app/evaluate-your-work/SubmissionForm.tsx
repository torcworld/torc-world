'use client';

import {FormEvent, useEffect, useState} from 'react';
import styles from './submit.module.css';

const packages = {
 evaluation: 'TORC Evaluation — €195',
 development: 'TORC Development — €595',
 cycle: 'TORC Development Cycle — €995',
} as const;

type PackageKey = keyof typeof packages;

const diagnosticQuestions = [
 'Something feels present in the work but not yet fully realized.',
 'The work loses force somewhere, but I cannot identify why.',
 'Several problems may be manifestations of the same deeper problem.',
 'What is the work actually doing beneath its surface?',
 'Diagnose the artifact without a preferred outcome.',
 'Explain in depth why the artifact reaches its Operational Order.',
 'I have a specific CMS or dimension question.',
] as const;

const developmentQuestions = [
 ...diagnosticQuestions,
 'What existing material could be doing more?',
 'What should I protect rather than revise?',
 'Is a major revision I am considering structurally warranted?',
 'Does the ending change the meaning of what came before?',
 'Is there evidence of a higher-order possibility in the existing work?',
] as const;

const cycleQuestions = [
 ...developmentQuestions,
 'What should I test in the next revision?',
 'What changed structurally after revision?',
 'Did the revised artifact actually improve its demonstrated architecture?',
] as const;

export default function SubmissionForm(){
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [message,setMessage]=useState('');
 const [selectedPackage,setSelectedPackage]=useState<string>(packages.development);
 const [focus,setFocus]=useState('');

 const focusQuestions =
  selectedPackage===packages.evaluation ? diagnosticQuestions :
  selectedPackage===packages.cycle ? cycleQuestions :
  developmentQuestions;

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
   form.reset(); setSelectedPackage(packages.development); setFocus('');
  }catch(err:any){
   setStatus('error'); setMessage(err?.message||'Submission could not be sent.');
  }
 }

 return <form className={styles.form} onSubmit={submit}>
  <div className={styles.two}><label>Your name<input name="name" required autoComplete="name"/></label><label>Email<input name="email" required type="email" autoComplete="email"/></label></div>
  <div className={styles.two}><label>Artifact title<input name="title" required/></label><label>Artifact type<select name="type" required defaultValue=""><option value="" disabled>Select type</option><option>Screenplay</option><option>Manuscript / novel</option><option>Essay / philosophy</option><option>Research / theory</option><option>Film / audiovisual work</option><option>Music</option><option>Game / formal system</option><option>Other</option></select></label></div>
  <label>Analysis<select name="package" required value={selectedPackage} onChange={e=>{setSelectedPackage(e.target.value);setFocus('');}}><option>{packages.evaluation}</option><option>{packages.development}</option><option>{packages.cycle}</option></select></label>
  <label className={styles.upload}>Upload artifact <span>PDF, DOCX, TXT or MD · max 4 MB</span><input name="artifact" type="file" required accept=".pdf,.doc,.docx,.txt,.md,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"/></label>
  <label>What do you most want TORC to answer? <span className={styles.optional}>Optional</span>
   <select name="focus" value={focus} onChange={e=>setFocus(e.target.value)}>
    <option value="">Choose a question or leave this open</option>
    {focusQuestions.map(question=><option key={question}>{question}</option>)}
    <option>I have another question.</option>
   </select>
  </label>
  <p className={styles.questionNote}><b>Evaluation</b> shows you what the work is actually doing, where it is strongest, and the central gap holding it back. <b>Development</b> turns that diagnosis into a concrete intervention strategy. <b>Development Cycle</b> adds revision support and an independent re-evaluation of the revised artifact.</p>
  <label>Anything specific you want TORC to examine? <span className={styles.optional}>Optional</span><textarea name="notes" rows={4} placeholder="Add context, a revision question, a passage you are unsure about, or simply tell us where the work feels unresolved."/></label>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',opacity:0}}/>
  <label className={styles.check}><input type="checkbox" name="permission" value="yes" required/><span>I own this work or have permission to submit it for evaluation.</span></label>
  <button className={styles.submitButton} disabled={status==='sending'}>{status==='sending'?'Sending…':'Submit artifact for review'}</button>
  <p className={styles.noCharge}>No payment is taken until your artifact is accepted. Scope and turnaround are confirmed first.</p>
  {message&&<p className={status==='sent'?styles.success:styles.error} role="status">{message}</p>}
 </form>
}
