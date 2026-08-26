'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {artifacts} from '@/lib/artifacts';
import styles from './artifacts.module.css';

const domains=['All','Literature','Philosophy & Theory','Science & Formal Systems','Cinema','Music','Chess','Art'];
const torcOrder=['M','GΩ','G','3c','3b','3a','2','1'];
function rank(t?:string){if(!t)return 99; const n=t.toLowerCase().replace('level ',''); const i=torcOrder.map(x=>x.toLowerCase()).indexOf(n); return i<0?98:i}
function hash(s:string,seed:number){let h=seed|0;for(let i=0;i<s.length;i++)h=((h<<5)-h+s.charCodeAt(i))|0;return h>>>0}

export default function Artifacts(){
 const [domain,setDomain]=useState('All');
 const [torc,setTorc]=useState('All');
 const [query,setQuery]=useState('');
 const [sort,setSort]=useState('explore');
 const [seed,setSeed]=useState(17);
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
 return <main><header className={styles.artifactHeader}><div className={styles.artifactHeading}><h1>Artifacts</h1><div className="eyebrow">Evaluated objects · growing database</div></div><div className={styles.headerCta}><div><b>Want your own artifact analyzed?</b><span>Independent TORC evaluation for original work.</span></div><Link className="button primary" href="/evaluate-your-work">Have your artifact evaluated</Link></div></header>
 <div className={styles.exploreIntro}>Explore the TORC database.</div>
 <section className="artifactTools">
   <label className="artifactSearch"><span>Search</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search artifact, creator, medium, Operational Order…"/></label>
   <label><span>Sort</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="explore">Explore — randomized</option><option value="cms-desc">Cognitive Magnitude Score — highest first</option><option value="cms-asc">Cognitive Magnitude Score — lowest first</option><option value="torc-desc">Operational Order — high to low</option><option value="torc-asc">Operational Order — low to high</option><option value="title-asc">Artifact — A to Z</option><option value="title-desc">Artifact — Z to A</option><option value="creator-asc">Creator — A to Z</option><option value="date-new">Date — newest first</option><option value="date-old">Date — oldest first</option></select></label>
   <label><span>Medium</span><select value={domain} onChange={e=>setDomain(e.target.value)}>{domains.map(d=><option key={d}>{d}</option>)}</select></label>
   <label><span>Operational Order</span><select value={torc} onChange={e=>setTorc(e.target.value)}>{torcs.map(t=><option key={t}>{t}</option>)}</select></label>
 </section>
 <div className="artifactToolbar"><span>{rows.length} artifacts shown</span>{sort==='explore'&&<button onClick={()=>setSeed(s=>s+7919)}>Shuffle again</button>}</div>
 <div className="table artifactTable"><div className="row header"><button onClick={()=>setSort(sort==='title-asc'?'title-desc':'title-asc')}>Artifact ↕</button><span>Medium</span><button onClick={()=>setSort(sort==='torc-desc'?'torc-asc':'torc-desc')}>Operational Order ↕</button><button onClick={()=>setSort(sort==='cms-desc'?'cms-asc':'cms-desc')}>Cognitive Magnitude Score ↕</button><span>Status</span></div>{rows.map(a=><Link className="row" key={a.slug} href={`/artifact/${a.slug}`}><span><b>{a.title}</b><br/><span className="small">{a.creator} · {a.year}</span></span><span>{a.domain}</span><span className="score">{a.status==='evaluated'?a.torc:'—'}</span><span className="score">{a.status==='evaluated'?a.cms:'—'}</span><span className={a.status==='evaluated'?'status done':'status'}>{a.status==='evaluated'?'Published':'Evaluation in progress'}</span></Link>)}</div>
 <section className={styles.compareFooter}><div><div className="eyebrow">Archive tool</div><h2>Compare two artifacts</h2><p>Place two published TORC profiles side by side and examine how their Operational Order and cognitive magnitude differ.</p></div><Link className="button" href="/compare">Compare artifacts →</Link></section>
 </main>
}