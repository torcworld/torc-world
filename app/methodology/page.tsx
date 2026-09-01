import {magicMountain as m} from '@/lib/magicMountain';
import styles from './methodology.module.css';

const orders = [
 {key:'1',name:'Direct Consciousness',formal:'The artifact performs a direct, bounded cognitive operation without requiring recursive reorientation of consciousness.',plain:'The work solves, organizes, represents or executes something effectively within an accepted frame of reality.'},
 {key:'2',name:'Symbolic Consciousness',formal:'The artifact coordinates complex relations, systems or recursive structures while remaining within a stable orientation toward reality.',plain:'The work can be extremely complex, recursive and intelligent without making consciousness itself fundamentally problematic.'},
 {key:'3a',name:'External Recursive Consciousness',formal:'Consciousness recursively recognizes a fundamental contradiction or distortion in its relation to reality, while the governing source of that contradiction remains principally located in the external world, system or order.',plain:'Consciousness can see that something is fundamentally wrong, including how the external order shapes perception, thought or experience, but the deepest source of the problem still remains outside the self. The world, system or order is what is fractured. At 3b, that explanation becomes insufficient because consciousness itself is necessarily implicated in the fracture.'},
 {key:'3b',name:'Fractured Recursive Consciousness',formal:'The fracture implicates consciousness\'s own attempt to orient itself toward reality.',plain:'The work no longer gives consciousness a secure position outside the problem. The act of seeing, knowing or orienting is itself caught in the fracture.'},
 {key:'3c',name:'Integrated Recursive Consciousness',formal:'A self-implicating fracture is integrated into a coherent higher orientation without being erased, repaired away or falsely resolved.',plain:'The work finds a way of inhabiting the fracture. The contradiction remains real, but consciousness can orient through it rather than simply collapse inside it.'},
 {key:'G',name:'Generative Consciousness — Explanatory Relocation',formal:'The completed artifact changes the explanatory basis of an independently identifiable target through a generative structure that is meaningfully constrained by that target and makes lower Operational Orders insufficient.',plain:'The work does not merely describe, symbolize or deepen a problem. It discovers a structure that makes the problem itself newly explicable.'},
 {key:'GΩ',name:'Generative Consciousness — Successor-Baseline Necessity',formal:'The artifact satisfies G and, in addition, establishes the changed explanatory foundation as an unavoidable baseline constraint upon adequate successor inquiry in its native domain.',plain:'Later work may reject, revise or replace the original explanation, but it cannot simply ignore what was discovered and return to the old problem as though nothing changed.'}
];

export default function Methodology(){return <main className={styles.page}>
<section className={styles.hero}>
  <div className={styles.heroCopy}>
    <div className={styles.heroLabel}>TORC CLASSIFICATION SYSTEM</div>
    <h1>How the profile is read.</h1>
    <p>Operational Order identifies the cognitive operation actually achieved by the completed artifact. Cognitive Magnitude measures the scale and architecture demonstrated in achieving it.</p>
  </div>
  <aside className={styles.heroMark} aria-label="The TORC Demonstrated Intelligence Profile">
    <span>DEMONSTRATED INTELLIGENCE PROFILE</span>
    <b>ORDER</b><i>×</i><b>MAGNITUDE</b>
    <small>DIP</small>
  </aside>
</section>

<section className={styles.coordinateBand}>
  <article><span>01 / PRIMARY HIERARCHY</span><h2>Operational Order</h2><p>What kind of cognitive operation does the artifact demonstrably accomplish?</p></article>
  <article><span>02 / MAGNITUDE</span><h2>Cognitive Magnitude</h2><p>How much structured cognition is demonstrated in accomplishing that operation?</p></article>
</section>

<section className={styles.ordersSection} id="operational-order">
  <div className={styles.sectionHead}><div><span>OPERATIONAL ORDER</span><h2>Seven Orders</h2></div><p>Operational Order is hierarchical. A higher Order is a higher demonstrated operational accomplishment. CMS does not erase or flatten that distinction.</p></div>
  <div className={styles.orderSequence} aria-label="Operational Order sequence"><span>1</span><i>→</i><span>2</span><i>→</i><span>3a</span><i className={styles.levelThreeJoin}>—</i><span>3b</span><i className={styles.levelThreeJoin}>—</i><span>3c</span><i>→</i><span>G</span><i>→</i><span>GΩ</span></div>
  <div className={styles.orderList}>{orders.map((o,index)=><details className={`${styles.order} ${o.key==='G'||o.key==='GΩ'?styles.generative:''}`} key={o.key}>
    <summary><span className={styles.orderIndex}>{String(index+1).padStart(2,'0')}</span><b>{o.key}</b><strong>{o.name}</strong><em>Open definition</em></summary>
    <div><p><b>Formal definition.</b> {o.formal}</p><p><b>In plain language.</b> {o.plain}</p></div>
  </details>)}</div>
</section>

<section className={styles.dimensionsSection} id="dimensions">
  <div className={styles.sectionHead}><div><span>COGNITIVE MAGNITUDE</span><h2>Six Dimensions</h2></div><p>Magnitude is measured separately from Order. It describes the architecture and scale of cognition demonstrated by the artifact.</p></div>
  <div className={styles.dimensions}>{m.dimensions.map((d,index)=><div className={styles.methodDimension} id={d.key.toLowerCase()} key={d.key}><span>{String(index+1).padStart(2,'0')}</span><div className={styles.dimKey}>{d.key}</div><div><h3>{d.name}</h3><p className={styles.formalDefinition}><b>Formal definition.</b> {d.formalDefinition}</p><p><b>In plain language.</b> {d.definition}</p></div></div>)}</div>
</section>

<section className={styles.transparency}>
  <span>PUBLIC RESULT / PROPRIETARY PROCEDURE</span>
  <h2>The profile is the result. Not the procedure.</h2>
  <p>Public artifact pages present the final determination, the evidence needed to understand it, and meaningful uncertainty where relevant. The complete evaluation protocol, evaluator records, prompts, thresholds and adjudication procedures are proprietary and are not publicly disclosed.</p>
</section>
</main>}
