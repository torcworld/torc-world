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
function cmsContext(diff:number){
  const d=Math.abs(diff);
  if(d<0.5)return 'Their Cognitive Magnitude Scores are effectively tied.';
  if(d<=30)return `The ${d}-point CMS difference is small. Their overall demonstrated magnitude is broadly similar even if their architectures differ.`;
  if(d<=75)return `The ${d}-point CMS difference is noticeable, but it remains a magnitude difference—not a verdict on quality and not an Operational Order bonus.`;
  return `The ${d}-point CMS difference is substantial. It describes demonstrated cognitive magnitude, not which artifact is the better work.`;
}
function boundaryIntro(a:Artifact,b:Artifact){
  const ar=torcRank(a.torc), br=torcRank(b.torc);
  const ac=cleanTorc(a.torc), bc=cleanTorc(b.torc);
  if(ar===br)return `Both artifacts occupy ${a.torc}: ${orderInfo[ac]?.name||a.torc}. The useful comparison is therefore not a hierarchy. It is how two artifacts can perform the same kind of operation through different cognitive architectures.`;
  const high=ar>br?a:b, low=ar>br?b:a;
  const hc=cleanTorc(high.torc), lc=cleanTorc(low.torc);
  if((hc==='3c'&&lc==='3b'))return `The decisive boundary is 3b → 3c. Both artifacts are recursive. At 3b the fracture remains irreducible; at 3c the contradiction remains real but the completed artifact establishes a coherent orientation capable of containing it.`;
  if((hc==='3b'&&lc==='3a'))return `The decisive boundary is 3a → 3b. At 3a the framework producing distortion becomes available to correction. At 3b the contradiction survives correction because it reaches the relation between consciousness and existence itself.`;
  if((hc==='3a'&&lc==='2'))return `The decisive boundary is Level 2 → 3a. Level 2 organizes represented reality through symbolic or abstract structure. At 3a the adequacy of that organizing framework itself becomes part of the artifact's governing problem.`;
  if((hc==='G'&&['3a','3b','3c'].includes(lc)))return `This comparison crosses the Generative threshold. Level 3 reorganizes the subject's relation to reality. G reorganizes the explanation of reality: the artifact changes what must be invoked to explain an independently identifiable target.`;
  if((hc==='GΩ'&&lc==='G'))return `The decisive boundary is G → GΩ. Both artifacts relocate explanation. GΩ adds successor-baseline necessity: later adequate inquiry may revise or reject the relocation, but it cannot simply proceed as though the old explanatory baseline remained untouched.`;
  if(hc==='GΩ'&&['1','2','3a','3b','3c'].includes(lc))return `${high.title} crosses both the generative threshold and the successor-baseline threshold. ${low.title} does not need explanatory relocation to account for its governing operation. That is a categorical difference in what the artifacts do—not a claim that one is better art, more important, or more enjoyable.`;
  return `${high.title} occupies ${high.torc} while ${low.title} occupies ${low.torc}. The point is not that one sits ${Math.abs(ar-br)} “steps above” the other. Operational Order identifies the lowest sufficient account of each artifact's governing cognitive operation.`;
}
function decisiveDifference(a:Artifact,b:Artifact){
  const ar=torcRank(a.torc), br=torcRank(b.torc);
  if(ar===br){
    return `The interesting difference is architectural, not categorical. ${a.title} and ${b.title} reach the same Operational Order, so the comparison asks where each carries its cognitive load rather than which one “wins.”`;
  }
  const high=ar>br?a:b, low=ar>br?b:a;
  return `${low.title} remains adequately explained at ${low.torc}; ${high.title} does not. The comparison is valuable precisely at that point of insufficiency: what must be added to explain the governing operation of ${high.title} that is unnecessary for ${low.title}?`;
}
function architectureInsight(a:Artifact,b:Artifact){
  const scored=dims.map(([k,short,name])=>({k,short,name,av:a[k] as number|undefined,bv:b[k] as number|undefined})).filter(x=>typeof x.av==='number'&&typeof x.bv==='number');
  if(!scored.length)return 'The published dimensional profiles are not yet complete enough for a structural comparison.';
  const aWins=scored.filter(x=>(x.av as number)>(x.bv as number)+.05).sort((x,y)=>((y.av as number)-(y.bv as number))-((x.av as number)-(x.bv as number)));
  const bWins=scored.filter(x=>(x.bv as number)>(x.av as number)+.05).sort((x,y)=>((y.bv as number)-(y.av as number))-((x.bv as number)-(x.av as number)));
  if(aWins.length&&bWins.length)return `${a.title}'s clearest relative advantage is ${aWins[0].name}; ${b.title}'s is ${bWins[0].name}. That crossover is exactly why CMS should not be read as a single ladder of “better” artifacts.`;
  const leader=aWins.length?a:b, wins=aWins.length?aWins:bWins;
  return `${leader.title} scores higher across most directly comparable dimensions, with the largest separation in ${wins[0]?.name||'the profile'}. Even here, the profile describes magnitude architecture rather than artistic or intellectual worth.`;
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
    const cmsDiff=(A.cms||0)-(B.cms||0);
    const tr=torcRank(A.torc)-torcRank(B.torc);
    const orderLine=tr===0
      ?`Both artifacts share the same Operational Order (${A.torc}).`
      :`${tr>0?A.title:B.title} has the higher Operational Order (${tr>0?A.torc:B.torc} versus ${tr>0?B.torc:A.torc}).`;
    const cmsLine=Math.abs(cmsDiff)<0.5
      ?`Their CMS scores are effectively tied at ${A.cms} and ${B.cms}.`
      :`${cmsDiff>0?A.title:B.title} has the higher CMS by ${Math.abs(cmsDiff)} points (${A.cms} versus ${B.cms}).`;
    return {cmsDiff,orderLine,cmsLine,boundary:boundaryIntro(A,B),decisive:decisiveDifference(A,B),architecture:architectureInsight(A,B)};
  },[ready,A,B]);

  return <main>
    <header className="page-title">
      <div className="eyebrow">TORC diagnostic comparison</div>
      <h1>Compare two artifacts. Find the difference that matters.</h1>
      <p className="lede">TORC comparison does not determine which artifact is better. It identifies where their demonstrated cognitive operations diverge—and where magnitude and Operational Order refuse to collapse into the same ranking.</p>
    </header>

    <section className="compareControls">
      <ArtifactPicker label="Artifact A" value={left} onChange={setLeft}/>
      <button className="compareSwap" type="button" onClick={()=>{setLeft(right);setRight(left)}} aria-label="Swap artifacts">⇄</button>
      <ArtifactPicker label="Artifact B" value={right} onChange={setRight}/>
    </section>

    {!ready&&<section className="section compareIntro">
      <div className="eyebrow">Not a winner picker</div>
      <h2>Put two cognitive architectures under the same instrument.</h2>
      <p>Cross-medium comparisons are allowed on purpose. The question is not whether a novel is “better” than a film or a theorem “better” than a scripture. The question is what changes when the same TORC model has to explain what each completed artifact actually does.</p>
      <p className="small">{evaluated.length} evaluated artifacts are currently available for comparison.</p>
    </section>}

    {ready&&result&&<>
      <section className="compareHeadline">
        <div><div className="meta">{A.domain}</div><h2>{A.title}</h2><p>{A.creator}</p><div className="bigDip">{A.torc} <i>|</i> {A.cms}</div></div>
        <div className="compareVs">VS</div>
        <div><div className="meta">{B.domain}</div><h2>{B.title}</h2><p>{B.creator}</p><div className="bigDip">{B.torc} <i>|</i> {B.cms}</div></div>
      </section>

      <section className={`section ${styles.resultSection}`}>
        <div className="eyebrow">The decisive difference</div>
        <p className={styles.decisive}>{result.decisive}</p>
        <div className={styles.resultLines}>
          <p><b>{result.orderLine}</b></p>
          <p>{result.cmsLine} {cmsContext(result.cmsDiff)}</p>
        </div>
        <div className={styles.orderLesson}>
          <div className="eyebrow">Order boundary</div><h2>Why {A.torc} and {B.torc} are not the same operation</h2>
          <p>{result.boundary}</p>
          <div className={styles.artifactOrderGrid}>
            <article>
              <div className="meta">{A.torc} · {orderInfo[cleanTorc(A.torc)]?.name}</div>
              <h3>{A.title}</h3>
              <p>{A.summary}</p>
              {A.why&&<p className={styles.evidence}><b>Why this Order:</b> {A.why}</p>}
            </article>
            <article>
              <div className="meta">{B.torc} · {orderInfo[cleanTorc(B.torc)]?.name}</div>
              <h3>{B.title}</h3>
              <p>{B.summary}</p>
              {B.why&&<p className={styles.evidence}><b>Why this Order:</b> {B.why}</p>}
            </article>
          </div>
          <p className={styles.orderVsMagnitude}><b>Order is not magnitude.</b> A higher Operational Order identifies a categorically different cognitive operation. CMS separately estimates how much cognitive magnitude is demonstrated in performing the operation.</p>
        </div>
      </section>

      <section className={`section compareLinks ${styles.evaluationLinks}`}>
        <div><div className="eyebrow">Inspect the evidence</div><h2>Open the full evaluations</h2><p>Read the consensus rationale, boundary analysis, and evaluator reports behind each published profile.</p></div>
        <div className="buttons">
          <Link className="button" href={`/artifact/${A.slug}`}>{A.title} →</Link>
          <Link className="button" href={`/artifact/${B.slug}`}>{B.title} →</Link>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Cognitive architecture</div>
        <h2>Dimension by dimension</h2>
        <p className={styles.dimensionIntro}>These six dimensions describe the architecture of Cognitive Magnitude. They can cross even when one artifact occupies a higher Operational Order.</p>
        <p className={styles.architectureInsight}>{result.architecture}</p>
        <div className="compareTable">
          <div className="compareRow compareRowHead"><span>Dimension</span><b>{A.title}</b><b>{B.title}</b><b>Difference</b></div>
          {dims.map(([k,short,name,definition])=>{
            const av=A[k] as number|undefined,bv=B[k] as number|undefined;
            const d=(av??0)-(bv??0);
            return <div className="compareRow" key={k}>
              <span className={styles.dimensionName}><strong>{short}</strong><small>{name}</small><details className={styles.dimHelp}><summary title={definition} aria-label={`What ${name} means`}>i</summary><div>{definition}</div></details></span>
              <b>{fmt(av)}</b><b>{fmt(bv)}</b>
              <b className={Math.abs(d)<0.05?'compareTie':d>0?'compareAhead':'compareBehind'}>
                {Math.abs(d)<0.05?'—':`${d>0?'+':''}${d.toFixed(1)}`}
              </b>
            </div>
          })}
        </div>
        <p className="small compareNote">A positive difference means Artifact A scores higher on that dimension; a negative difference means Artifact B scores higher. Dimensional advantages describe cognitive architecture, not an overall winner.</p>
      </section>
    </>}
  </main>
}
