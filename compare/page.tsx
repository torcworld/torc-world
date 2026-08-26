'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {artifacts,Artifact} from '@/lib/artifacts';

const dims=[
  ['rl','RL','Relational Load'],
  ['ad','AD','Abstraction Depth'],
  ['cd','CD','Constraint Density'],
  ['id','ID','Inferential Distance'],
  ['ic','IC','Integrative Compression'],
  ['gr','GR','Generalization Reach'],
] as const;

const torcOrder=['1','2','3a','3b','3c','G','GΩ','M'];
function torcRank(t?:string){
  if(!t)return -1;
  const clean=t.replace(/^Level\s+/i,'');
  return torcOrder.findIndex(x=>x.toLowerCase()===clean.toLowerCase());
}
function fmt(n?:number){return typeof n==='number'?n.toFixed(1):'—'}
function eligible(a:Artifact){return a.status==='evaluated' && typeof a.cms==='number'}

function ArtifactPicker({label,value,onChange}:{label:string;value:string;onChange:(slug:string)=>void}){
  const [query,setQuery]=useState('');
  const [open,setOpen]=useState(false);
  const selected=artifacts.find(a=>a.slug===value);
  const options=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return artifacts.filter(eligible).filter(a=>!q||`${a.title} ${a.creator} ${a.domain}`.toLowerCase().includes(q)).slice(0,12);
  },[query]);
  return <div className="comparePicker">
    <label>{label}</label>
    <button className="compareSelected" type="button" onClick={()=>setOpen(v=>!v)}>
      <span>{selected?selected.title:'Choose an artifact'}</span>
      <small>{selected?`${selected.creator} · ${selected.domain}`:'Search the evaluated archive'}</small>
    </button>
    {open&&<div className="compareDropdown">
      <input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Type a title, creator, or domain…" />
      <div className="compareOptions">
        {options.map(a=><button type="button" key={a.slug} onClick={()=>{onChange(a.slug);setOpen(false);setQuery('')}}>
          <span>{a.title}</span><small>{a.creator} · {a.domain} · {a.torc} | {a.cms}</small>
        </button>)}
        {!options.length&&<div className="compareEmpty">No evaluated artifact found.</div>}
      </div>
    </div>}
  </div>
}

export default function Compare(){
  const evaluated=artifacts.filter(eligible);
  const [left,setLeft]=useState('');
  const [right,setRight]=useState('');

  useEffect(()=>{
    const p=new URLSearchParams(window.location.search);
    const a=p.get('a')||'';
    const b=p.get('b')||'';
    if(evaluated.some(x=>x.slug===a))setLeft(a);
    if(evaluated.some(x=>x.slug===b))setRight(b);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    const p=new URLSearchParams();
    if(left)p.set('a',left);
    if(right)p.set('b',right);
    const q=p.toString();
    window.history.replaceState(null,'',q?`/compare?${q}`:'/compare');
  },[left,right]);

  const A=artifacts.find(a=>a.slug===left);
  const B=artifacts.find(a=>a.slug===right);
  const ready=A&&B&&eligible(A)&&eligible(B);

  const summary=useMemo(()=>{
    if(!ready)return '';
    const cmsDiff=(A.cms||0)-(B.cms||0);
    const tr=torcRank(A.torc)-torcRank(B.torc);
    const wins=dims.map(([k,short,name])=>({short,name,d:(A[k]||0)-(B[k]||0)}));
    const aWins=wins.filter(x=>x.d>0.049).sort((x,y)=>y.d-x.d);
    const bWins=wins.filter(x=>x.d<-0.049).sort((x,y)=>x.d-y.d);
    let s='';
    if(tr>0)s+=`${A.title} has the higher Operational Order (${A.torc} vs ${B.torc}). `;
    else if(tr<0)s+=`${B.title} has the higher Operational Order (${B.torc} vs ${A.torc}). `;
    else s+=`Both artifacts share the same Operational Order (${A.torc}). `;
    if(Math.abs(cmsDiff)<0.5)s+=`Their CMS scores are effectively tied at ${A.cms} and ${B.cms}. `;
    else s+=`${cmsDiff>0?A.title:B.title} has the higher CMS by ${Math.abs(cmsDiff)} points (${A.cms} vs ${B.cms}). `;
    if(aWins.length)s+=`${A.title} is strongest relative to ${B.title} in ${aWins.slice(0,2).map(x=>x.short).join(' and ')}. `;
    if(bWins.length)s+=`${B.title} is strongest relative to ${A.title} in ${bWins.slice(0,2).map(x=>x.short).join(' and ')}.`;
    return s;
  },[ready,A,B]);

  return <main>
    <header className="page-title">
      <div className="eyebrow">Side by side</div>
      <h1>Compare artifacts</h1>
      <p className="lede">Choose any two evaluated artifacts and compare Operational Order, CMS, and the complete six-dimensional architecture.</p>
    </header>

    <section className="compareControls">
      <ArtifactPicker label="Artifact A" value={left} onChange={setLeft}/>
      <button className="compareSwap" type="button" onClick={()=>{setLeft(right);setRight(left)}} aria-label="Swap artifacts">⇄</button>
      <ArtifactPicker label="Artifact B" value={right} onChange={setRight}/>
    </section>

    {!ready&&<section className="section compareIntro">
      <div className="eyebrow">How it works</div>
      <h2>Select two artifacts above.</h2>
      <p>The comparison is calculated instantly from the published TORC/DIP records. No new AI evaluation is run and there is no additional cost.</p>
      <p className="small">{evaluated.length} evaluated artifacts are currently available for comparison.</p>
    </section>}

    {ready&&<>
      <section className="compareHeadline">
        <div><div className="meta">{A.domain}</div><h2>{A.title}</h2><p>{A.creator}</p><div className="bigDip">{A.torc} <i>|</i> {A.cms}</div></div>
        <div className="compareVs">VS</div>
        <div><div className="meta">{B.domain}</div><h2>{B.title}</h2><p>{B.creator}</p><div className="bigDip">{B.torc} <i>|</i> {B.cms}</div></div>
      </section>

      <section className="section compareSummary">
        <div className="eyebrow">Automatic comparison</div>
        <p className="manifesto">{summary}</p>
      </section>

      <section className="section">
        <div className="eyebrow">Capacity Architecture</div>
        <h2>Dimension by dimension</h2>
        <div className="compareTable">
          <div className="compareRow compareRowHead"><span>Dimension</span><b>{A.title}</b><b>{B.title}</b><b>Difference</b></div>
          {dims.map(([k,short,name])=>{
            const av=A[k] as number|undefined,bv=B[k] as number|undefined;
            const d=(av??0)-(bv??0);
            return <div className="compareRow" key={k}>
              <span><strong>{short}</strong><small>{name}</small></span>
              <b>{fmt(av)}</b><b>{fmt(bv)}</b>
              <b className={Math.abs(d)<0.05?'compareTie':d>0?'compareAhead':'compareBehind'}>
                {Math.abs(d)<0.05?'—':`${d>0?'+':''}${d.toFixed(1)}`}
              </b>
            </div>
          })}
        </div>
        <p className="small compareNote">A positive difference means Artifact A scores higher on that dimension; a negative difference means Artifact B scores higher. These are architectural differences, not a declaration of an overall “winner.”</p>
      </section>

      <section className="section compareLinks">
        <div><div className="eyebrow">Inspect the evidence</div><h2>Open the full evaluations</h2></div>
        <div className="buttons">
          <Link className="button" href={`/artifact/${A.slug}`}>{A.title} →</Link>
          <Link className="button" href={`/artifact/${B.slug}`}>{B.title} →</Link>
        </div>
      </section>
    </>}
  </main>
}
