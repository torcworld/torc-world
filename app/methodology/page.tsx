import {magicMountain as m} from '@/lib/magicMountain';
import styles from './methodology.module.css';

const modes = [
 {
  key:'M1',name:'Encounter',headline:'Cognition organizes reality through direct relations.',
  body:'At M1, the governing achievement is accomplished through represented agents, objects, events, motives, causes, properties and consequences themselves. The artifact may be extremely complex, intelligent or subtle. What matters is that it does not require an additional representational structure to perform its governing cognitive work.',
  plain:'The artifact thinks through what happens, what relates to what, and what follows from what—without needing a model of those relations to do the essential work.'
 },
 {
  key:'M2',name:'Mapping',headline:'Cognition operates through constructed representations of reality.',
  body:'At M2, a model, theory, symbolic structure, conceptual framework, formal system, taxonomy, procedure or other representation becomes necessary to the governing achievement. Reality is no longer organized only through direct relations. Cognition constructs something through which those relations can be mapped, compared, classified, explained or transformed.',
  plain:'The artifact does not merely encounter a world. It builds a way of seeing or organizing that world and then thinks through that structure.',
  note:'A new theory, model, ontology or symbolic system can demonstrate enormous intelligence while remaining M2.'
 },
 {
  key:'M3',name:'Implication',headline:'What representation does becomes part of the reality that must subsequently be understood.',
  body:'At M3, cognition does more than operate through a representation. The consequences of representing become material that the artifact itself must subsequently organize. The act of interpretation, narration, modeling, observation or representation can no longer remain completely outside the reality being organized.',
  plain:'The artifact can no longer simply look through the window. What the looking has done has become part of the scene.',
  note:'Self-reference, recursion, unreliable narration or metafiction do not automatically establish M3. The operation of representation must actually become consequential to the governing achievement.'
 },
 {
  key:'G',name:'Generative Architecture',headline:'Cognition reorganizes the relation by which representation obtains operative standing.',
  body:'G is not simply more recursion, greater abstraction or a deeper version of M3. In G, a representational relation that previously helped determine what could function as source, evidence, knowledge, authority, orientation, interpretation, rule or warrant becomes materially implicated in producing, sustaining, defeating or transforming that standing. The completed artifact then operates through the reorganized relation.',
  plain:'The artifact does not merely discover something new within an existing cognitive space. It changes something about how that space determines what gets to count, stand or function within it.',
  note:'That change must perform indispensable work in the completed artifact. Merely representing or theorizing such a transformation is not enough.'
 }
];

export default function Methodology(){return <main className={styles.page}>
<section className={styles.hero}>
 <div className={styles.heroCopy}>
  <div className={styles.heroLabel}>TORC METHODOLOGY</div>
  <h1>Two questions. Two kinds of evidence.</h1>
  <p><b>Operational Mode</b> identifies how cognition organizes represented reality in the governing achievement of the completed artifact.</p>
  <p><b>Cognitive Magnitude</b> describes the scale and architecture of the cognition demonstrated in achieving it.</p>
  <p>A further distinction identifies <b>G — Generative architecture</b>: cases in which cognition does not merely operate within an available representational relation, but reorganizes the relation by which representation obtains operative standing.</p>
 </div>
 <aside className={styles.heroMark} aria-label="The TORC Demonstrated Intelligence Profile">
  <span>DEMONSTRATED INTELLIGENCE PROFILE</span><b>MODE</b><i>×</i><b>MAGNITUDE</b><small>DIP</small>
 </aside>
</section>

<section className={styles.coordinateBand}>
 <article><span>01 / OPERATIONAL ARCHITECTURE</span><h2>Operational Mode</h2><p>What kind of cognitive operation does the artifact demonstrably perform?</p></article>
 <article><span>02 / MAGNITUDE</span><h2>Cognitive Magnitude</h2><p>How much structured cognition is demonstrated in accomplishing that operation?</p></article>
</section>

<section className={styles.ordersSection} id="operational-architecture">
 <div className={styles.sectionHead}><div><span>OPERATIONAL ARCHITECTURE</span><h2>Three Modes + Generative Architecture</h2></div><p>M1, M2 and M3 describe different governing relations between cognition, representation and represented reality. They are not rankings of intelligence, artistic quality, importance or difficulty. An artifact can demonstrate enormous Cognitive Magnitude at any Mode.</p></div>
 <div className={styles.modeSequence}><span>M1</span><i>→</i><span>M2</span><i>→</i><span>M3</span><b>+ G · GENERATIVE ARCHITECTURE</b></div>
 <div className={styles.modeList}>{modes.map((o,index)=><article className={`${styles.modeCard} ${o.key==='G'?styles.generativeMode:''}`} key={o.key}>
  <div className={styles.modeNumber}>{String(index+1).padStart(2,'0')}</div>
  <div className={styles.modeCopy}><h2>{o.key} · {o.name}</h2><h3>{o.headline}</h3><p>{o.body}</p><p><b>In plain language:</b><br/>{o.plain}</p>{o.note?<p>{o.note}</p>:null}</div>
 </article>)}</div>
</section>

<section className={styles.modeMagnitude}>
 <span>MODE IS NOT MAGNITUDE</span><h2>Different architecture. Separate measurement.</h2>
 <p>Operational Mode does not measure how intelligent, difficult, profound, original or important an artifact is.</p>
 <p>Cognitive Magnitude does not determine its Mode.</p>
 <p>A very large M2 artifact can demonstrate substantially greater Cognitive Magnitude than a smaller M3 or G artifact.</p>
 <p>TORC therefore reports the two coordinates separately.</p>
 <div><b>Mode asks:</b> <i>How is the cognition operating?</i><br/><b>Magnitude asks:</b> <i>How much cognitive architecture is being demonstrated?</i></div>
</section>

<section className={styles.dimensionsSection} id="dimensions">
 <div className={styles.sectionHead}><div><span>COGNITIVE MAGNITUDE</span><h2>Six Dimensions</h2></div><p>Magnitude describes the architecture and scale of cognition demonstrated by the artifact.</p></div>
 <div className={styles.dimensions}>{m.dimensions.map((d,index)=><div className={styles.methodDimension} id={d.key.toLowerCase()} key={d.key}><span>{String(index+1).padStart(2,'0')}</span><div className={styles.dimKey}>{d.key}</div><div><h3>{d.name}</h3><p className={styles.formalDefinition}><b>Formal definition.</b> {d.formalDefinition}</p><p><b>In plain language.</b> {d.definition}</p></div></div>)}</div>
</section>

<section className={styles.transparency}>
 <span>PUBLIC RESULT / PROPRIETARY PROCEDURE</span>
 <h2>The profile is the result. Not the procedure.</h2>
 <p>Public artifact pages present the final Operational Classification, Cognitive Magnitude profile, the evidence needed to understand the determination, and the structural boundary that separates it from its strongest alternative.</p>
 <p>The complete evaluation protocol, evaluator records, prompts, calibration procedures and adjudication procedures are proprietary and are not publicly disclosed.</p>
</section>

<section className={styles.nextRoutes}>
 <a href="/artifacts"><span>SEE TORC APPLIED</span><strong>Explore the artifact archive</strong><b>→</b></a>
 <a href="/theory/book"><span>READ THE UNDERLYING THEORY</span><strong>The Age of False Depth</strong><b>→</b></a>
</section>
</main>}
