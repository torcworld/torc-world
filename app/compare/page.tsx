'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {artifacts,Artifact} from '@/lib/artifacts';
import styles from './compare.module.css';

const dims=[
  ['rl','RL','Relational Load','How many consequential relationships must remain active and mutually constrain one another in the artifact.'],
  ['ad','AD','Abstraction Depth','How far the artifact moves from concrete cases toward deeper structures, invariants, and relations among representations.'],
  ['cd','CD','Constraint Density','How tightly the successful construction must satisfy multiple interacting requirements at the same time.'],
  ['id','ID','Inferential Distance','How non-routine the successful transition is from what is given to what the artifact ultimately establishes or constructs.'],
  ['ic','IC','Integrative Compression','How economically the artifact organizes a large or heterogeneous field while preserving the distinctions that matter.'],
  ['gr','GR','Generalization Reach','How far the demonstrated structure transfers beyond its originating case without being reinvented ad hoc.'],
] as const;

const orderInfo:Record<string,{name:string;short:string}>={
  '1':{name:'Direct Consciousness',short:'Cognition operates primarily on represented particulars and their relations.'},
  '2':{name:'Symbolic Consciousness',short:'Particulars acquire additional significance through an organizing symbolic, formal, conceptual, or otherwise abstract structure.'},
  '3a':{name:'Corrective Recursive Consciousness',short:'The framework through which reality is represented becomes part of the problem, and the discovered distortion remains in principle correctable.'},
  '3b':{name:'Fractured Recursive Consciousness',short:'Consciousness confronts a contradiction in its relation to existence that improved representation alone cannot repair.'},
  '3c':{name:'Integrated Recursive Consciousness',short:'The contradiction remains real, but consciousness develops a coherent orientation capable of containing it without eliminating it.'},
  'G':{name:'Generative Consciousness',short:'The artifact relocates what explains an independently identifiable target by disclosing a generative structure or mechanism.'},
  'GΩ':{name:'Generative Consciousness — Successor-Baseline Necessity',short:'The explanatory relocation becomes a non-optional baseline that adequate successor inquiry must reckon with.'},
};

const torcOrder=['1','2','3a','3b','3c','G','GΩ'];
function cleanTorc(t?:string){return (t||'').replace(/^Level\s+/i,'')}
function torcRank(t?:string){
  const clean=cleanTorc(t);
  return torcOrder.findIndex(x=>x.toLowerCase()===clean.toLowerCase());
}
function fmt(n?:number){return typeof n==='number'?n.toFixed(1):'—'}
function eligible(a:Artifact){return a.status==='evaluated' && typeof a.cms==='number'}
function magnitudeSentence(a:Artifact,b:Artifact){
  const diff=(a.cms||0)-(b.cms||0);
  if(Math.abs(diff)<0.5)return `Their Cognitive Magnitude is effectively tied: ${a.cms} versus ${b.cms}. The distinction therefore lies in Operational Order and in how that magnitude is distributed across the six dimensions.`;
  const high=diff>0?a:b, low=diff>0?b:a;
  const d=Math.abs(diff);
  if(d<=30)return `${high.title} also records the higher Cognitive Magnitude, ${high.cms} versus ${low.cms}. The difference is modest in aggregate, so the more revealing question is where the two profiles carry their cognitive load.`;
  if(d<=75)return `${high.title} also demonstrates greater Cognitive Magnitude: ${high.cms} versus ${low.cms}. The separation is meaningful, though the dimensional profile shows where that additional magnitude actually resides.`;
  return `The difference in Cognitive Magnitude is substantial as well: ${high.cms} versus ${low.cms}. ${high.title} sustains the larger demonstrated cognitive structure across TORC's magnitude architecture.`;
}
function orderAnalysis(a:Artifact,b:Artifact){
  const ar=torcRank(a.torc), br=torcRank(b.torc);
  if(ar===br)return `Both artifacts occupy ${a.torc}. Neither requires a higher Operational Order than the other; what separates them is how strongly, densely, and extensively that shared operation is realized.`;
  const high=ar>br?a:b, low=ar>br?b:a;
  const hc=cleanTorc(high.torc), lc=cleanTorc(low.torc);
  if(hc==='G'&&['1','2','3a','3b','3c'].includes(lc))return `${low.title} remains sufficiently explained by ${low.torc}: its governing cognitive work can be accounted for without explanatory relocation. ${high.title} goes further. Its completed operation makes the prior explanatory basis insufficient and changes what must be invoked to explain its target. One artifact works within a representational structure; the other changes the explanatory basis through which part of reality is represented.`;
  if(hc==='GΩ'&&lc==='G')return `Both artifacts perform explanatory relocation, but ${high.title} goes further. Its relocated foundation becomes a successor-baseline constraint: adequate later inquiry may revise or replace it, but cannot simply return to the previous explanatory basis as though the relocation had never occurred.`;
  if(hc==='GΩ')return `${low.title} remains sufficiently explained at ${low.torc}. ${high.title} crosses the generative threshold and the successor-baseline threshold: it not only relocates explanation, but establishes a foundation that adequate successor inquiry must reckon with.`;
  if(hc==='3c'&&lc==='3b')return `Both artifacts are recursive, but ${high.title} integrates what ${low.title} leaves fractured. At 3b the contradiction remains irreducible; at 3c it remains real while the completed artifact establishes a coherent orientation capable of containing it.`;
  if(hc==='3b'&&lc==='3a')return `${low.title} makes the distorting framework available to correction. ${high.title} reaches a deeper fracture: the contradiction survives correction because it belongs to the relation between consciousness and existence itself.`;
  if(hc==='3a'&&lc==='2')return `${low.title} organizes represented reality through symbolic or abstract structure. ${high.title} makes the adequacy of that organizing framework itself part of the governing problem. That recursive turn is what separates Level 2 from 3a.`;
  return `${high.title} demonstrates the higher Operational Order: ${high.torc} versus ${low.torc}. The lower Order remains sufficient for ${low.title}; explaining the governing operation of ${high.title} requires the additional representational operation identified by ${high.torc}.`;
}
function determination(a:Artifact,b:Artifact){
  const ar=torcRank(a.torc), br=torcRank(b.torc), cd=(a.cms||0)-(b.cms||0);
  if(ar===br&&Math.abs(cd)<0.5)return `The result is unusually close: both artifacts demonstrate ${a.torc} and essentially equal Cognitive Magnitude.`;
  if(ar===br){const h=cd>0?a:b,l=cd>0?b:a;return `The Operational Order is the same, but ${h.title} demonstrates greater Cognitive Magnitude — ${h.cms} versus ${l.cms}.`;}
  const oh=ar>br?a:b, ol=ar>br?b:a;
  if((ar>br&&cd>0)||(br>ar&&cd<0))return `The result is decisive: ${oh.title} demonstrates both a higher Operational Order and greater Cognitive Magnitude — ${oh.torc} versus ${ol.torc}, with a CMS of ${oh.cms} versus ${ol.cms}.`;
  const mh=cd>0?a:b, ml=cd>0?b:a;
  return `The two coordinates split: ${oh.title} demonstrates the higher Operational Order (${oh.torc} versus ${ol.torc}), while ${mh.title} demonstrates greater Cognitive Magnitude (${mh.cms} versus ${ml.cms}).`;
}
function architectureInsight(a:Artifact,b:Artifact){
  const scored=dims.map(([k,short,name])=>({k,short,name,av:a[k] as number|undefined,bv:b[k] as number|undefined})).filter(x=>typeof x.av==='number'&&typeof x.bv==='number');
  if(!scored.length)return 'The published dimensional profiles are not yet complete enough for a structural comparison.';
  const gaps=scored.map(x=>({...x,d:(x.av as number)-(x.bv as number)})).sort((x,y)=>Math.abs(y.d)-Math.abs(x.d));
  const top=gaps[0]; if(!top||Math.abs(top.d)<.05)return 'The six-dimensional profiles are nearly identical despite the artifacts being distinct constructions.';
  const leader=top.d>0?a:b;
  return `The largest dimensional separation is ${top.name}, where ${leader.title} carries the stronger profile. The table below shows how the aggregate CMS difference is built rather than treating the score as a black box.`;
}
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

  const result=useMemo(()=>{
    if(!ready)return null;
    return {order:orderAnalysis(A,B),magnitude:magnitudeSentence(A,B),determination:determination(A,B),architecture:architectureInsight(A,B)};
  },[ready,A,B]);

  return <main className={ready?styles.readyPage:undefined}>
    {!ready&&<>
      <header className={`page-title ${styles.comparePageTitle}`}>
        <div className="eyebrow">Compare two artifacts</div>
        <h1>What separates them?</h1>
      </header>

      <section className="compareControls">
        <ArtifactPicker label="Artifact A" value={left} onChange={setLeft}/>
        <button className="compareSwap" type="button" onClick={()=>{setLeft(right);setRight(left)}} aria-label="Swap artifacts">⇄</button>
        <ArtifactPicker label="Artifact B" value={right} onChange={setRight}/>
      </section>
      <div className={styles.emptyState}>Choose two evaluated artifacts above.</div>
    </>}

    {ready&&result&&<>
      <section className={`compareHeadline compareResultBand ${styles.scoreBand}`}>
        <div><div className="meta">{A.domain}</div><h2>{A.title}</h2><p>{A.creator}</p><div className="bigDip">{A.torc} <i>|</i> {A.cms}</div></div>
        <div className="compareVs">VS</div>
        <div><div className="meta">{B.domain}</div><h2>{B.title}</h2><p>{B.creator}</p><div className="bigDip">{B.torc} <i>|</i> {B.cms}</div></div>
      </section>

      <section className={styles.resultSection}>
        <div className="eyebrow">What separates them?</div>
        <div className={`compareAnalysisPanel ${styles.analysisBody}`}>
          <p>{torcRank(A.torc)===torcRank(B.torc)?`Both artifacts demonstrate ${A.torc}.`:`${torcRank(A.torc)>torcRank(B.torc)?A.title:B.title} demonstrates a higher Operational Order.`} {result.order}</p>
          <p>{result.magnitude}</p>
          <p className={styles.determination}>{result.determination}</p>
        </div>
      </section>

      <section className={`compareFullAnalysisGrid ${styles.analysisLinks}`}>
        <Link href={`/artifact/${A.slug}`}><span>Read full analysis</span><b>{A.title}</b><i>→</i></Link>
        <Link href={`/artifact/${B.slug}`}><span>Read full analysis</span><b>{B.title}</b><i>→</i></Link>
      </section>

      <details className={styles.dimensionDetails}>
        <summary>Compare the six CMS dimensions <span>+</span></summary>
        <div className={styles.dimensionInner}>
          <div className="eyebrow">Cognitive Magnitude</div>
          <h2>Dimension by dimension</h2>
          <p className={styles.architectureInsight}>{result.architecture}</p>
          <div className="compareTable">
            <div className="compareRow compareRowHead"><span>Dimension</span><b>{A.title}</b><b>{B.title}</b><b>Difference</b></div>
            {dims.map(([k,short,name,definition])=>{
              const av=A[k] as number|undefined,bv=B[k] as number|undefined;
              const d=(av??0)-(bv??0);
              return <div className="compareRow" key={k}>
                <span className={styles.dimensionName}><strong>{short}</strong><small>{name}</small><details className={styles.dimHelp}><summary title={definition} aria-label={`What ${name} means`}>i</summary><div>{definition}</div></details></span>
                <b>{fmt(av)}</b><b>{fmt(bv)}</b>
                <b className={Math.abs(d)<0.05?'compareTie':d>0?'compareAhead':'compareBehind'}>{Math.abs(d)<0.05?'—':`${d>0?'+':''}${d.toFixed(1)}`}</b>
              </div>
            })}
          </div>
        </div>
      </details>
    </>}
  </main>
}
