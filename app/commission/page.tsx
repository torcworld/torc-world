'use client';
import Link from 'next/link';
import {FormEvent,useMemo,useState} from 'react';
import {artifacts} from '@/lib/artifacts';

const types=['Book / Literature','Film','Music / Album / Song','Philosophy / Theory','Science / Formal System','Visual Art','Game','Architecture','Other'];

export default function Commission(){
 const [title,setTitle]=useState('');
 const [creator,setCreator]=useState('');
 const [year,setYear]=useState('');
 const [type,setType]=useState(types[0]);
 const [notes,setNotes]=useState('');
 const [name,setName]=useState('');
 const [anonymous,setAnonymous]=useState(false);
 const [email,setEmail]=useState('');
 const [agree,setAgree]=useState(false);
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState('');

 const duplicate=useMemo(()=>{
   const q=title.trim().toLowerCase();
   if(!q)return undefined;
   return artifacts.find(a=>a.title.toLowerCase()===q);
 },[title]);

 async function submit(e:FormEvent){
   e.preventDefault(); setError('');
   if(duplicate){setError('This artifact is already in the TORC archive or evaluation queue.');return}
   if(!agree){setError('Please confirm the commission terms.');return}
   setBusy(true);
   try{
     const res=await fetch('/api/commission',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({title,creator,year,type,notes,name:anonymous?'Anonymous':name,email,anonymous})});
     const data=await res.json();
     if(!res.ok)throw new Error(data.error||'Could not start checkout.');
     window.location.href=data.url;
   }catch(err:any){setError(err?.message||'Could not start checkout.');setBusy(false)}
 }
 return <main>
   <header className="page-title"><div className="eyebrow">Expand the TORC archive</div><h1>Commission an artifact.</h1><p className="lede">Choose a known public artifact that is not yet in the archive. For <b>$9.99</b>, it enters the TORC evaluation queue and, once completed, receives the same independent evaluation methodology as the rest of the archive.</p></header>

   <section className="commissionIntro">
    <div className="commissionPrice"><span>Public artifact commission</span><b>$9.99</b><small>One artifact · one public TORC/DIP evaluation</small></div>
    <div className="commissionPrinciple"><b>You choose what gets evaluated. You do not influence the result.</b><p>Payment determines queue inclusion only. It never affects TORC classification, CMS, dimensional scores, evaluator reasoning, publication language, or whether the result is flattering.</p></div>
   </section>

   <section className="section commissionLayout">
    <form className="commissionForm" onSubmit={submit}>
      <div className="eyebrow">Artifact details</div>
      <label><span>Artifact title *</span><input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Pulp Fiction"/></label>
      {duplicate&&<div className="formAlert">Already listed: <Link href={`/artifact/${duplicate.slug}`}><b>{duplicate.title}</b> →</Link></div>}
      <div className="formPair">
       <label><span>Creator / artist / director *</span><input required value={creator} onChange={e=>setCreator(e.target.value)} placeholder="e.g. Quentin Tarantino"/></label>
       <label><span>Year</span><input value={year} onChange={e=>setYear(e.target.value)} placeholder="1994"/></label>
      </div>
      <label><span>Artifact type *</span><select value={type} onChange={e=>setType(e.target.value)}>{types.map(t=><option key={t}>{t}</option>)}</select></label>
      <label><span>Identification notes <i>optional</i></span><textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Use this only if the exact artifact could be ambiguous — edition, version, performance, etc."/></label>

      <div className="formDivider"/>
      <div className="eyebrow">Commissioner credit</div>
      <p className="formHelp">When the evaluation is published, you can be permanently credited on the artifact page as the person who commissioned its addition to the TORC Archive.</p>
      <label className={anonymous?'disabledField':''}><span>Display name</span><input disabled={anonymous} value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. J. Johnson"/></label>
      <label className="checkRow"><input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)}/><span>Publish my commission anonymously</span></label>
      <label><span>Email *</span><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="For payment receipt and fulfillment contact"/></label>

      <div className="formDivider"/>
      <label className="checkRow termsCheck"><input required type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)}/><span>I understand that the commissioned evaluation will be public, that payment does not influence the result, and that TORC may decline/refund requests that are duplicate, impossible to identify, unlawful to process, or outside the archive's scope.</span></label>
      {error&&<div className="formAlert error">{error}</div>}
      <button className="button primary checkoutButton" disabled={busy||!!duplicate}>{busy?'Opening secure checkout…':'Continue to secure checkout — $9.99'}</button>
      <p className="checkoutFine">Payment is handled by Stripe Checkout. TORC.world does not receive or store your card number.</p>
    </form>

    <aside className="commissionAside">
      <div><div className="eyebrow">What happens next</div><ol><li>You commission the artifact.</li><li>It enters the evaluation queue.</li><li>TORC applies the same independent methodology used throughout the archive.</li><li>The final evaluation becomes public.</li><li>If selected, your commissioner credit remains on the artifact page.</li></ol></div>
      <div><div className="eyebrow">Public artifacts only</div><p>This commission form is for already-known, externally identifiable artifacts. Do not upload unpublished manuscripts, private screenplays, confidential work, or copyrighted source files here.</p><Link href="/evaluate-your-work">Want your own work evaluated? →</Link></div>
      <div><div className="eyebrow">No score shopping</div><p>A low, disputed, or unexpected TORC/DIP result is still the result. Commissioning buys the evaluation process and archive addition—not a particular outcome.</p></div>
    </aside>
   </section>
 </main>
}