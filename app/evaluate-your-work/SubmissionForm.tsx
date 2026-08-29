'use client';

import {FormEvent, useEffect, useState} from 'react';
import styles from './submit.module.css';

const packages = {
 evaluation: 'TORC Evaluation — €195',
 development: 'TORC Development — €495',
 cycle: 'TORC Development Cycle — €895',
} as const;

type PackageKey = keyof typeof packages;

export default function SubmissionForm(){
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
    <option>What Operational Order does my artifact actually reach — and why?</option>
    <option>What specifically prevents the work from reaching the next Operational Order?</option>
    <option>Where does the work create genuine depth, and where does it only appear deep?</option>
    <option>Which dimensions most limit its Cognitive Magnitude?</option>
    <option>How can I increase relational load without simply adding more material?</option>
    <option>How can I deepen abstraction without making it empty or obscure?</option>
    <option>Where does the work introduce structure that it fails to integrate?</option>
    <option>Are the work’s contradictions genuinely recursive or merely unresolved?</option>
    <option>Does the ending reorganize the artifact, or only conclude it?</option>
    <option>Which structural changes would produce the greatest cognitive gain?</option>
    <option>What could be removed without reducing what the artifact demonstrates?</option>
    <option>I have another question.</option>
   </select>
  </label>
  <p className={styles.questionNote}><b>Evaluation</b> diagnoses the artifact and includes one clarification after delivery. <b>Development</b> uses your questions as part of the development diagnosis and includes one follow-up round. <b>Development Cycle</b> adds revision support and one re-evaluation of the revised artifact.</p>
  <label>Anything specific you want TORC to examine? <span className={styles.optional}>Optional</span><textarea name="notes" rows={4} placeholder="Add context, a revision question, a passage you are unsure about, or the operation you are trying to achieve."/></label>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',opacity:0}}/>
  <label className={styles.check}><input type="checkbox" name="permission" value="yes" required/><span>I own this work or have permission to submit it for evaluation.</span></label>
  <button className={styles.submitButton} disabled={status==='sending'}>{status==='sending'?'Sending…':'Submit artifact for review'}</button>
  <p className={styles.noCharge}>No payment is taken at submission. Scope and turnaround are confirmed first.</p>
  {message&&<p className={status==='sent'?styles.success:styles.error} role="status">{message}</p>}
 </form>
}
