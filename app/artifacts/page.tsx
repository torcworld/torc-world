'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {artifacts,Artifact} from '@/lib/artifacts';
import styles from './artifacts-v4.module.css';

const domains=['All',...Array.from(new Set(artifacts.map(a=>a.domain)))];
const torcOrder=['GΩ','G','3c','3b','3a','2','1'];
function rank(t?:string){if(!t)return 99; const n=t.toLowerCase().replace('level ',''); const i=torcOrder.map(x=>x.toLowerCase()).indexOf(n); return i<0?98:i}
function hash(s:string,seed:number){let h=seed|0;for(let i=0;i<s.length;i++)h=((h<<5)-h+s.charCodeAt(i))|0;return h>>>0}

function eligible(a:Artifact){return a.status==='evaluated' && typeof a.cms==='number'}
function InlineArtifactPicker({label,value,onChange}:{label:string;value:string;onChange:(slug:string)=>void}){
 const [pickerQuery,setPickerQuery]=useState('');
 const [open,setOpen]=useState(false);
 const selected=artifacts.find(a=>a.slug===value);
 const options=useMemo(()=>{
   const q=pickerQuery.trim().toLowerCase();
   return artifacts.filter(eligible).filter(a=>!q||`${a.title} ${a.creator} ${a.domain}`.toLowerCase().includes(q)).slice(0,10);
 },[pickerQuery]);
 return <div className={styles.inlinePicker}>
   <label>{label}</label>
   <button className={styles.inlineSelected} type="button" onClick={()=>setOpen(v=>!v)}>
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
 const pageSize=30;
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
 const goToPage=(n:number)=>{setPageNumber(Math.max(1,Math.min(totalPages,n)));window.scrollTo({top:0,behavior:'smooth'});};
 return <main><header className={styles.artifactHeader}><div className={styles.artifactHeading}><h1>Artifacts</h1><div className="eyebrow">Curated TORC analyses</div></div></header>
 <div className={styles.exploreIntro}>Explore published TORC analyses.</div>
 <section className={`artifactTools ${styles.artifactToolsStrong}`}>
   <label className={`artifactSearch ${styles.controlLabel} ${styles.searchControl}`}><span>Search</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search artifact, creator, medium, Operational Order…"/></label>
   <label className={styles.controlLabel}><span>Medium</span><select value={domain} onChange={e=>setDomain(e.target.value)}>{domains.map(d=><option key={d}>{d}</option>)}</select></label>
   <label className={styles.controlLabel}><span>Operational Order</span><select value={torc} onChange={e=>setTorc(e.target.value)}>{torcs.map(t=><option key={t}>{t}</option>)}</select></label>
 </section>
 <div className="artifactToolbar"><span>{rows.length} artifacts found · page {currentPage} of {totalPages}</span>{sort==='explore'&&<button onClick={()=>setSeed(s=>s+7919)}>Shuffle again</button>}</div>
 <div className="table artifactTable"><div className={`row header ${styles.tableHeader}`}><button onClick={()=>setSort(sort==='title-asc'?'title-desc':'title-asc')}>Artifact ↕</button><span>Medium</span><button onClick={()=>setSort(sort==='torc-desc'?'torc-asc':'torc-desc')}>Operational Order ↕</button><button onClick={()=>setSort(sort==='cms-desc'?'cms-asc':'cms-desc')}>Cognitive Magnitude Score ↕</button><span>Status</span></div>{visibleRows.map(a=><Link className="row" key={a.slug} href={`/artifact/${a.slug}`}><span><b>{a.title}</b><br/><span className="small">{a.creator} · {a.year}</span></span><span>{a.domain}</span><span className="score">{a.status==='evaluated'?a.torc:'—'}</span><span className="score">{a.status==='evaluated'?(a.cms??'—'):'—'}</span><span className={a.status==='evaluated'?'status done':'status'}>{a.status==='evaluated'?'Published':'Evaluation in progress'}</span></Link>)}</div>
 <nav className={styles.pagination} aria-label="Artifact pages">
   <button disabled={currentPage===1} onClick={()=>goToPage(currentPage-1)}>← Previous</button>
   <div className={styles.pageNumbers}>{Array.from({length:totalPages},(_,i)=>i+1).map(n=><button key={n} className={n===currentPage?styles.activePage:''} aria-current={n===currentPage?'page':undefined} onClick={()=>goToPage(n)}>{n}</button>)}</div>
   <button disabled={currentPage===totalPages} onClick={()=>goToPage(currentPage+1)}>Next →</button>
 </nav>
 <section className={styles.inlineCompare}><div className={styles.inlineCompareHead}><div className="eyebrow">Compare artifacts</div><h2>Put two TORC profiles side by side.</h2></div><div className={styles.inlineCompareControls}><InlineArtifactPicker label="Artifact A" value={compareLeft} onChange={setCompareLeft}/><button className={styles.inlineSwap} type="button" onClick={()=>{setCompareLeft(compareRight);setCompareRight(compareLeft)}} aria-label="Swap artifacts">⇄</button><InlineArtifactPicker label="Artifact B" value={compareRight} onChange={setCompareRight}/></div>{compareLeft&&compareRight&&<div className={styles.inlineCompareAction}><Link className="button" href={`/compare?a=${compareLeft}&b=${compareRight}`}>Compare selected artifacts →</Link></div>}</section>
 </main>
}