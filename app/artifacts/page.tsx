'use client';
import Link from 'next/link';
import {useEffect,useMemo,useRef,useState} from 'react';
import {artifacts,Artifact} from '@/lib/artifacts';
import styles from './artifacts-v4.module.css';

const domains=['All','Literature','Philosophy & Theory','Science & Formal Systems','Cinema','Music','Chess','Art'];
const torcOrder=['GΩ','G','3c','3b','3a','2','1'];
function rank(t?:string){if(!t)return 99; const n=t.toLowerCase().replace('level ',''); const i=torcOrder.map(x=>x.toLowerCase()).indexOf(n); return i<0?98:i}
function hash(s:string,seed:number){let h=seed|0;for(let i=0;i<s.length;i++)h=((h<<5)-h+s.charCodeAt(i))|0;return h>>>0}

function eligible(a:Artifact){return a.status==='evaluated' && typeof a.cms==='number'}
function orderClass(t?:string){return 'order'+String(t||'na').replace('Ω','Omega').replace(/[^a-zA-Z0-9]/g,'')}
function InlineArtifactPicker({label,value,onChange}:{label:string;value:string;onChange:(slug:string)=>void}){
 const [pickerQuery,setPickerQuery]=useState('');
 const [open,setOpen]=useState(false);
 const selected=artifacts.find(a=>a.slug===value);
 const options=useMemo(()=>{
   const q=pickerQuery.trim().toLowerCase();
   return artifacts.filter(eligible).filter(a=>!q||`${a.title} ${a.creator} ${a.domain}`.toLowerCase().includes(q)).slice(0,40);
 },[pickerQuery]);
 return <div className={styles.inlinePicker}>
   <label>{label}</label>
   <button className={styles.inlineSelected} type="button" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
     <span>{selected?selected.title:'Choose an artifact'}</span>
     <small>{selected?`${selected.creator} · ${selected.domain}`:'Search the evaluated archive'}</small>
   </button>
   {open&&<div className={styles.inlineDropdown}>
     <input autoFocus value={pickerQuery} onChange={e=>setPickerQuery(e.target.value)} placeholder="Type a title or creator…" />
     <div className={styles.inlineOptions}>
       {options.map(a=><button type="button" key={a.slug} onClick={()=>{onChange(a.slug);setOpen(false);setPickerQuery('')}}><span>{a.title}</span><small>{a.creator} · {a.torc} | {a.cms}</small></button>)}
       {!options.length&&<div className={styles.inlineEmpty}>No evaluated artifact found.</div>}
     </div>
   </div>}
 </div>
}

export default function Artifacts(){
 const [domain,setDomain]=useState('All');
 const [torc,setTorc]=useState('All');
 const [query,setQuery]=useState('');
 const [sort,setSort]=useState('explore');
 const [seed,setSeed]=useState(17);
 const [pageNumber,setPageNumber]=useState(1);
 const [compareLeft,setCompareLeft]=useState('');
 const [compareRight,setCompareRight]=useState('');
 const corpusRef=useRef<HTMLElement>(null);
 const pageSize=20;
 useEffect(()=>setSeed(Math.floor(Math.random()*1000000000)),[]);
 const torcs=useMemo(()=>['All',...Array.from(new Set(artifacts.filter(a=>a.status==='evaluated'&&a.torc).map(a=>String(a.torc)))).sort((a,b)=>rank(a)-rank(b))],[ ]);
 const rows=useMemo(()=>{
   const q=query.trim().toLowerCase();
   let r=artifacts.filter(a=>(domain==='All'||a.domain===domain)&&(torc==='All'||String(a.torc)===torc)&&(!q||[a.title,a.creator,a.domain,a.torc,String(a.cms??'')].join(' ').toLowerCase().includes(q)));
   return [...r].sort((a,b)=>{
     if(sort==='explore') return hash(a.slug,seed)-hash(b.slug,seed);
     if(sort==='cms-desc') return (b.cms??-1)-(a.cms??-1);
     if(sort==='cms-asc') return (a.cms??99999)-(b.cms??99999);
     if(sort==='torc-desc') return rank(a.torc)-rank(b.torc)||(b.cms??-1)-(a.cms??-1);
     if(sort==='torc-asc') return rank(b.torc)-rank(a.torc)||(a.cms??99999)-(b.cms??99999);
     if(sort==='title-asc') return a.title.localeCompare(b.title);
     if(sort==='title-desc') return b.title.localeCompare(a.title);
     if(sort==='medium-asc') return a.domain.localeCompare(b.domain)||a.title.localeCompare(b.title);
     if(sort==='medium-desc') return b.domain.localeCompare(a.domain)||a.title.localeCompare(b.title);
     if(sort==='creator-asc') return a.creator.localeCompare(b.creator)||a.title.localeCompare(b.title);
     if(sort==='date-new') return Number(b.year)-Number(a.year);
     if(sort==='date-old') return Number(a.year)-Number(b.year);
     return 0;
   });
 },[domain,torc,query,sort,seed]);
 const totalPages=Math.max(1,Math.ceil(rows.length/pageSize));
 const currentPage=Math.min(pageNumber,totalPages);
 const visibleRows=rows.slice((currentPage-1)*pageSize,currentPage*pageSize);
 useEffect(()=>setPageNumber(1),[domain,torc,query,sort,seed]);
 const goToPage=(n:number)=>{
   setPageNumber(Math.max(1,Math.min(totalPages,n)));
   requestAnimationFrame(()=>corpusRef.current?.scrollIntoView({behavior:'smooth',block:'start'}));
 };
 return <main className={styles.artifactsPage}><header className={styles.artifactHeader}><div className={styles.artifactHeading}><h1>Artifacts</h1><div className="eyebrow">Curated TORC analyses</div></div><div className={styles.artifactHeroMark} aria-hidden="true"><span>THE TORC CORPUS</span><i></i><b>DIAGNOSED ARTIFACTS</b></div></header>
 <section className={`artifactTools ${styles.artifactToolsStrong}`}>
   <label className={`artifactSearch ${styles.controlLabel}`}><span>Search</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search artifact, creator, medium, Operational Order…"/></label>
   <label className={styles.controlLabel}><span>Sort</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="explore">Explore — randomized</option><option value="cms-desc">Cognitive Magnitude Score — highest first</option><option value="cms-asc">Cognitive Magnitude Score — lowest first</option><option value="torc-desc">Operational Order — high to low</option><option value="torc-asc">Operational Order — low to high</option><option value="title-asc">Artifact — A to Z</option><option value="title-desc">Artifact — Z to A</option><option value="creator-asc">Creator — A to Z</option><option value="date-new">Date — newest first</option><option value="date-old">Date — oldest first</option></select></label>
   <label className={styles.controlLabel}><span>Medium</span><select value={domain} onChange={e=>setDomain(e.target.value)}>{domains.map(d=><option key={d}>{d}</option>)}</select></label>
   <label className={styles.controlLabel}><span>Operational Order</span><select value={torc} onChange={e=>setTorc(e.target.value)}>{torcs.map(t=><option key={t}>{t}</option>)}</select></label>
 </section>
 <section ref={corpusRef} className={styles.corpusSurface}>
 <div className="artifactToolbar"><span>{rows.length} artifacts found · page {currentPage} of {totalPages}</span>{sort==='explore'&&<button onClick={()=>setSeed(s=>s+7919)}>Shuffle again</button>}</div>
 <div className={styles.archiveLedger}>
  <div className={styles.ledgerHead}><span>Artifact</span><span>Operational Order</span><span>Cognitive Magnitude</span><span></span></div>
  {visibleRows.map(a=><Link className={styles.ledgerRow} key={a.slug} href={`/artifact/${a.slug}`}>
    <span className={`${styles.orderFlag} ${styles[orderClass(a.torc)]}`}>{a.status==='evaluated'?a.torc:'—'}</span>
    <span className={styles.ledgerIdentity}><b>{a.title}</b><small>{a.creator} · {a.year} · {a.domain}</small></span>
    <span className={styles.ledgerOrder}>{a.status==='evaluated'?a.torc:'—'}</span>
    <span className={styles.ledgerCms}>{a.status==='evaluated'?a.cms:'—'}</span>
    <span className={styles.openEvaluation}>Open evaluation <i>→</i></span>
  </Link>)}
 </div> <nav className={styles.pagination} aria-label="Artifact pages">
   <button disabled={currentPage===1} onClick={()=>goToPage(currentPage-1)}>← Previous</button>
   <div className={styles.pageNumbers}>{Array.from({length:totalPages},(_,i)=>i+1).map(n=><button key={n} className={n===currentPage?styles.activePage:''} aria-current={n===currentPage?'page':undefined} onClick={()=>goToPage(n)}>{n}</button>)}</div>
   <button disabled={currentPage===totalPages} onClick={()=>goToPage(currentPage+1)}>Next →</button>
 </nav>
 <section className={styles.inlineCompare}><div className={styles.inlineCompareHead}><div className="eyebrow">Compare Artifacts</div><h2>Put two TORC profiles side by side.</h2></div><div className={styles.inlineCompareControls}><InlineArtifactPicker label="Artifact A" value={compareLeft} onChange={setCompareLeft}/><button className={styles.inlineSwap} type="button" onClick={()=>{setCompareLeft(compareRight);setCompareRight(compareLeft)}} aria-label="Swap artifacts">⇄</button><InlineArtifactPicker label="Artifact B" value={compareRight} onChange={setCompareRight}/></div>{compareLeft&&compareRight&&<div className={styles.inlineCompareAction}><Link className="button" href={`/compare?a=${compareLeft}&b=${compareRight}`}>Compare selected artifacts →</Link></div>}</section>
 <div className={styles.compareBottomStrip} aria-hidden="true" />
 </section>
 </main>
}