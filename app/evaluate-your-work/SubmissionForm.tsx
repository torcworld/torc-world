'use client';
import {FormEvent, useState} from 'react';
import styles from './submit.module.css';

const MAX_FILE_BYTES = 4 * 1024 * 1024;

export default function SubmissionForm(){
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [message,setMessage]=useState('');
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); setStatus('sending'); setMessage('');
  const form=e.currentTarget; const data=new FormData(form);
  const file=data.get('artifact');
  if(file instanceof File && file.size>MAX_FILE_BYTES){
   setStatus('error'); setMessage('The file is larger than 4 MB. Please use a smaller file or contact TORC directly.'); return;
  }
  try{
   const res=await fetch('/api/artifact-submission',{method:'POST',body:data});
   const body=await res.json().catch(()=>({}));
   if(!res.ok) throw new Error(body?.error||'Submission could not be sent.');
   setStatus('sent'); setMessage('Artifact received. A confirmation has been sent to your email. We’ll review the scope and reply before any evaluation begins.'); form.reset();
  }catch(err:any){setStatus('error');setMessage(err?.message||'Submission could not be sent.');}
 }
 return <form className={styles.form} onSubmit={submit}>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-10000px',width:'1px',height:'1px',opacity:0}} />
  <div className={styles.two}><label>Your name<input name="name" required autoComplete="name"/></label><label>Email<input name="email" required type="email" autoComplete="email"/></label></div>
  <div className={styles.two}><label>Artifact title<input name="title" required/></label><label>Artifact type<select name="type" required defaultValue=""><option value="" disabled>Select type</option><option>Screenplay</option><option>Manuscript / novel</option><option>Essay / philosophy</option><option>Research / theory</option><option>Film / audiovisual work</option><option>Music</option><option>Game / formal system</option><option>Other</option></select></label></div>
  <label>Analysis<select name="package" required defaultValue="TORC Development — €349 founding rate"><option>TORC Evaluation — €149</option><option>TORC Development — €349 founding rate</option><option>TORC Deep Analysis — from €695</option></select></label>
  <label className={styles.upload}>Upload artifact <span>PDF, DOCX, TXT or MD · max 4 MB</span><input name="artifact" type="file" required accept=".pdf,.doc,.docx,.txt,.md,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"/></label>
  <label>What do you most want to understand? <span className={styles.optional}>Optional</span><textarea name="notes" rows={5} placeholder="For example: I’m rewriting the ending and want to understand whether the work actually reaches the recursive operation it is aiming for."/></label>
  <label className={styles.check}><input type="checkbox" name="permission" value="yes" required/><span>I own this work or have permission to submit it for evaluation.</span></label>
  <button className={styles.submitButton} disabled={status==='sending'}>{status==='sending'?'Sending…':'Submit artifact for review'}</button>
  <p className={styles.noCharge}>No payment is taken at submission.</p>
  {message&&<p className={status==='sent'?styles.success:styles.error} role="status">{message}</p>}
 </form>
}
