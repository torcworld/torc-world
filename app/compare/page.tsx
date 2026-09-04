'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {artifacts,Artifact} from '@/lib/artifacts';
import styles from './compare.module.css';

const dims=[
  ['rl','RL','Relational Load','how many consequential relationships must remain active and mutually constrain one another'],
  ['ad','AD','Abstraction Depth','how far the artifact moves from concrete cases toward deeper structures and invariants'],
  ['cd','CD','Constraint Density','how tightly the construction must satisfy multiple interacting requirements at once'],
  ['id','ID','Inferential Distance','how non-routine the successful movement is from what is given to what is established'],
  ['ic','IC','Integrative Compression','how economically a large or heterogeneous field is organized without flattening crucial distinctions'],
  ['gr','GR','Generalization Reach','how far the demonstrated structure transfers beyond its originating case'],
] as const;
const torcOrder=['1','2','3a','3b','3c','G','GΩ'];
function cleanTorc(t?:string){return (t||'').replace(/^Level\s+/i,'')}
function rank(t?:string){const c=cleanTorc(t);return torcOrder.findIndex(x=>x.toLowerCase()===c.toLowerCase())}
function fmt(n?:number){return typeof n==='number'?n.toFixed(1):'—'}
function eligible(a:Artifact){return a.status==='evaluated'&&typeof a.cms==='number'}

function orderFinding(a:Artifact,b:Artifact){
 const ar=rank(a.torc),br=rank(b.torc);
 if(ar===br)return `Neither work wins by Order. Both require ${a.torc}; the comparison therefore turns on how differently that operation is sustained, constrained and distributed.`;
 const hi=ar>br?a:b,lo=ar>br?b:a;
 return `${hi.title} cannot be adequately explained at the Operational Order sufficient for ${lo.title}. That is the decisive hierarchy: ${hi.torc} is not “more” of ${lo.torc}; it requires a different governing operation.`;
}
function magnitudeFinding(a:Artifact,b:Artifact){
 const d=(a.cms||0)-(b.cms||0);
 if(Math.abs(d)<.5)return `Magnitude does not separate them: ${a.cms} versus ${b.cms}. Any meaningful difference has to be found in Order or in the distribution of cognitive load.`;
 const hi=d>0?a:b,lo=d>0?b:a;
 return `${hi.title} carries the larger demonstrated cognitive structure within its operation: CMS ${hi.cms} versus ${lo.cms}. That matters, but it does not override Operational Order.`;
}
function profile(a:Artifact,b:Artifact){
 const rows=dims.map(([k,short,name])=>({k,short,name,av:a[k] as number|undefined,bv:b[k] as number|undefined})).filter(x=>typeof x.av==='number'&&typeof x.bv==='number').map(x=>({...x,d:(x.av as number)-(x.bv as number)})).sort((x,y)=>Math.abs(y.d)-Math.abs(x.d));
 if(!rows.length)return {headline:'The dimensional evidence is incomplete.',body:'The published profiles do not yet support a reliable structural divergence claim.'};
 const x=rows[0]; if(Math.abs(x.d)<.05)return {headline:'The scores conceal an unusually similar architecture.',body:'The six dimensions are nearly tied. The important distinction is therefore the kind of operation performed, not a dramatic difference in measured magnitude.'};
 const hi=x.d>0?a:b,lo=x.d>0?b:a;
 return {headline:`The largest structural divergence is ${x.name}.`,body:`${hi.title} leads most clearly here. This is where the aggregate score stops being abstract: ${hi.title} carries materially more of the cognitive burden in ${x.name.toLowerCase()} than ${lo.title}.`};
}
function verdict(a:Artifact,b:Artifact){
 const ar=rank(a.torc),br=rank(b.torc),d=(a.cms||0)-(b.cms||0);
 if(ar===br&&Math.abs(d)<.5)return `These works are unusually close. TORC finds no hierarchy in Operational Order and effectively no separation in Cognitive Magnitude.`;
 if(ar===br){const hi=d>0?a:b,lo=d>0?b:a;return `${hi.title} is the stronger realization of the same Operational Order. The kind of cognition is shared, but its demonstrated magnitude is greater.`;}
 const oh=ar>br?a:b,ol=ar>br?b:a;
 if((ar>br&&d>0)||(br>ar&&d<0))return `${oh.title} separates decisively. It requires the higher Operational Order and also demonstrates the greater Cognitive Magnitude. The hierarchy and magnitude point in the same direction.`;
 const mh=d>0?a:b;
 return `The result splits. ${oh.title} has the higher Operational Order; ${mh.title} has the greater Cognitive Magnitude. Order determines the hierarchy; Magnitude describes the scale within it.`;
}
function dimText(a:Artifact,b:Artifact,name:string,definition:string,av?:number,bv?:number){
 if(typeof av!=='number'||typeof bv!=='number')return `The published ${name} evidence is incomplete.`;
 const d=av-bv;if(Math.abs(d)<.05)return `No meaningful separation on ${name}. Both works carry essentially the same load here.`;
 const hi=d>0?a:b,lo=d>0?b:a,hv=d>0?av:bv,lv=d>0?bv:av;
 return `${hi.title} leads ${fmt(hv)} to ${fmt(lv)}. In TORC this dimension tracks ${definition}. The difference therefore identifies a specific structural advantage, not merely a larger total score.`;
}
function Picker({label,value,onChange}:{label:string;value:string;onChange:(s:string)=>void}){
 const [q,setQ]=useState('');const [open,setOpen]=useState(false);const selected=artifacts.find(a=>a.slug===value);
 const options=useMemo(()=>{const x=q.trim().toLowerCase();return artifacts.filter(eligible).filter(a=>!x||`${a.title} ${a.creator} ${a.domain}`.toLowerCase().includes(x)).slice(0,14)},[q]);
 return <div className={styles.picker}><label>{label}</label><button type="button" className={styles.selected} onClick={()=>setOpen(v=>!v)}><strong>{selected?selected.title:'Choose an artifact'}</strong><small>{selected?`${selected.creator} · ${selected.domain}`:'Search the evaluated archive'}</small></button>{open&&<div className={styles.dropdown}><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Title, creator, or domain…"/><div>{options.map(a=><button type="button" key={a.slug} onClick={()=>{onChange(a.slug);setOpen(false);setQ('')}}><strong>{a.title}</strong><small>{a.creator} · {a.torc} · {a.cms}</small></button>)}</div></div>}</div>
}
export default function Compare(){
 const evaluated=artifacts.filter(eligible);const [left,setLeft]=useState('the-white-ribbon');const [right,setRight]=useState('the-lobster');
 useEffect(()=>{const p=new URLSearchParams(window.location.search),a=p.get('a')||'',b=p.get('b')||'';if(evaluated.some(x=>x.slug===a))setLeft(a);if(evaluated.some(x=>x.slug===b))setRight(b)},[]);
 useEffect(()=>{const p=new URLSearchParams();if(left)p.set('a',left);if(right)p.set('b',right);window.history.replaceState(null,'',p.toString()?`/compare?${p}`:'/compare')},[left,right]);
 const A=artifacts.find(a=>a.slug===left),B=artifacts.find(a=>a.slug===right),ready=A&&B&&eligible(A)&&eligible(B);
 const result=useMemo(()=>ready?{order:orderFinding(A,B),mag:magnitudeFinding(A,B),profile:profile(A,B),verdict:verdict(A,B)}:null,[ready,A,B]);
 return <main className={styles.page}>
   <header className={styles.hero}><div className={styles.eyebrow}>TORC COMPARATIVE ANALYSIS</div><h1>What actually separates them?</h1><p>Two evaluated works. One hierarchy of operation. Six dimensions of magnitude. The point is not to declare a winner — it is to identify the structural difference that matters.</p></header>
   <section className={styles.controls}><Picker label="Artifact A" value={left} onChange={setLeft}/><button className={styles.swap} type="button" onClick={()=>{setLeft(right);setRight(left)}} aria-label="Swap artifacts">⇄</button><Picker label="Artifact B" value={right} onChange={setRight}/></section>
   {!ready&&<section className={styles.empty}><span>COMPARE ARTIFACTS</span><h2>Choose two evaluated works.</h2><p>The comparison will distinguish Operational Order from Cognitive Magnitude and show where the two architectures actually diverge.</p></section>}
   {ready&&result&&<>
     <section className={styles.scoreboard}>
       <article><span>{A.domain}</span><h2>{A.title}</h2><p>{A.creator}</p><div><b>{A.torc}</b><small>Operational Order</small><b>{A.cms}</b><small>Cognitive Magnitude</small></div><Link href={`/artifact/${A.slug}`}>Open analysis →</Link></article>
       <div className={styles.vs}>VS</div>
       <article><span>{B.domain}</span><h2>{B.title}</h2><p>{B.creator}</p><div><b>{B.torc}</b><small>Operational Order</small><b>{B.cms}</b><small>Cognitive Magnitude</small></div><Link href={`/artifact/${B.slug}`}>Open analysis →</Link></article>
     </section>
     <section className={styles.verdict}><span>TORC COMPARATIVE VERDICT</span><h2>{result.verdict}</h2></section>
     <section className={styles.findings}>
       <article><span>01 · THE DECISIVE DIFFERENCE</span><h3>Operational Order</h3><p>{result.order}</p></article>
       <article><span>02 · THE SCALE OF THE OPERATION</span><h3>Cognitive Magnitude</h3><p>{result.mag}</p></article>
       <article><span>03 · WHAT THE TOTALS CONCEAL</span><h3>{result.profile.headline}</h3><p>{result.profile.body}</p></article>
     </section>
     <section className={styles.dimensions}><div className={styles.sectionHead}><span>THE EVIDENCE</span><h2>Where the architectures diverge.</h2><p>Open any dimension to see what the numerical difference means structurally.</p></div><div className={styles.table}><div className={`${styles.row} ${styles.head}`}><span>Dimension</span><b>{A.title}</b><b>{B.title}</b><b>Δ</b></div>{dims.map(([k,short,name,definition])=>{const av=A[k] as number|undefined,bv=B[k] as number|undefined,d=(av??0)-(bv??0);return <details key={k}><summary className={styles.row}><span><strong>{short}</strong><small>{name}</small></span><b>{fmt(av)}</b><b>{fmt(bv)}</b><b>{Math.abs(d)<.05?'—':`${d>0?'+':''}${d.toFixed(1)}`}</b></summary><p>{dimText(A,B,name,definition,av,bv)}</p></details>})}</div></section>
     <section className={styles.revisit}><div><span>RETURN TO THE EVIDENCE</span><h2>Reopen either full analysis.</h2><p>The comparison identifies the difference. The individual evaluations show the evidence from which each classification was made.</p></div><div><Link href={`/artifact/${A.slug}`}>{A.title}<small>Open full analysis →</small></Link><Link href={`/artifact/${B.slug}`}>{B.title}<small>Open full analysis →</small></Link></div></section>
   </>}
 </main>
}
