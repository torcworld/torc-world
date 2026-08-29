import Link from 'next/link';
import {artifacts,getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';
import styles from './war-peace.module.css';

export function generateStaticParams(){return artifacts.map(a=>({slug:a.slug}))}

const dimensions = [
  {key:'RL',name:'Relational Load',score:'9.8',formal:'Quantity, heterogeneity, interdependence, and coordination of necessary relations.',plain:'How many meaningful relationships must the artifact maintain and coordinate simultaneously? Not simply how many components it contains, but how many genuinely influence and constrain one another.',artifact:'War and Peace coordinates private lives, families, social systems, armies, political power, battlefield events and historical explanation across enormous distances of time and scale. These relations do not merely coexist: changes in one level alter how another can be understood.'},
  {key:'AD',name:'Abstraction Depth',score:'9.0',formal:'Controlled distance through abstraction layers while preserving relevant distinctions.',plain:'How far can the artifact move beyond the concrete case toward deeper or more general structures while preserving the relationships that made the concrete case meaningful?',artifact:'Particular experiences repeatedly open into questions of agency, causation, freedom, necessity and history. Crucially, the abstraction does not abandon lived experience; it returns to change how battles, decisions, deaths and private choices are understood.'},
  {key:'CD',name:'Constraint Density',score:'9.1',formal:'Density of heterogeneous, interacting, simultaneously binding conditions.',plain:'How many interconnected requirements must the artifact satisfy at once, and how strongly do those requirements restrict what can successfully happen or be explained?',artifact:'Intention is continually constrained by terrain, timing, institutions, incomplete knowledge, other intentions, physical circumstance, prior events and chance. Tolstoy has to preserve individual action while demonstrating why individual action is insufficient as a complete explanation.'},
  {key:'ID',name:'Inferential Distance',score:'9.1',formal:'Distance between available premises/conditions and the non-obvious successful solution or relation derived from them.',plain:'How large and non-routine is the reasoning movement from what is immediately available to the deeper relation or explanation the artifact establishes?',artifact:'The novel asks the reader to move far beyond visible decisions, famous names and conventional historical stories. What first looks like command, victory or personal choice must be reconstructed as part of a distributed causal field.'},
  {key:'IC',name:'Integrative Compression',score:'9.4',formal:'How economically a structure coordinates and preserves a substantially larger body of information and relations.',plain:'How much diverse complexity can the artifact organize through a smaller underlying architecture without flattening the differences that matter?',artifact:'Agency, causation, necessity, intention and interpretation organize an extraordinary range of material: war, family, love, death, politics, private consciousness and historical argument. The same underlying problem holds these domains together without making them interchangeable.'},
  {key:'GR',name:'Generalization Reach',score:'8.4',formal:'How far the demonstrated structure remains applicable across materially heterogeneous problem-spaces.',plain:'How far can the same underlying structure travel into substantially different cases or domains while preserving the relationships that make it work?',artifact:'The novel’s account reaches beyond Napoleon, Kutuzov or 1812. Its structure applies across military, political, interpersonal and historical scales and challenges a broader human habit: assigning complex outcomes to the most visible agent.'}
];

const orderDefinitions = {
  G:{name:'G — Generative Cognition',formal:'The completed artifact changes the explanatory basis of an independently identifiable target by establishing a generative structure that is meaningfully constrained by that target, making lower Operational Orders insufficient.',plain:'The work does not merely describe, symbolize or deepen a problem. It discovers a structure that makes the problem itself newly explicable.',artifact:'War and Peace makes individual intention insufficient as an explanation of history and demonstrates a larger causal structure: distributed action, constraint, circumstance and retrospective interpretation.'},
  c3:{name:'3c — Integrated Consciousness',formal:'A fundamental fracture in consciousness\'s relation to reality is integrated into a coherent higher orientation without the fracture being erased.',plain:'The work reaches a way of living or orienting through a fracture that cannot simply be solved or undone.',artifact:'Pierre and Andrei make 3c a serious alternative: their earlier orientations collapse and are not simply restored. But those transformations do not by themselves explain the novel\'s larger account of historical causation.'}
};

export function WarAndPeaceAnalysis({a}:{a:ReturnType<typeof getArtifact>}){
 if(!a)return null;
 return <main className={styles.page}>
   <header className={styles.hero}>
     <div className="eyebrow">{a.domain} · {a.year} · TORC analysis</div>
     <h1>{a.title}</h1>
     <p className={styles.creator}>{a.creator}</p>
     <div className={styles.verdictGrid}>
       <div><span>Operational Order</span><strong>G</strong><small>Generative cognition</small></div>
       <div><span>Cognitive Magnitude</span><strong>915</strong><small>Observed range 900–922</small></div>
     </div>
   </header>

   <article className={styles.essay}>
     <section>
       <div className={styles.kicker}>Analysis</div>
       <h2>History gets bigger as its heroes get smaller.</h2>
       <p><em>War and Peace</em> begins with the familiar grammar of history: emperors decide, generals command, armies move, and the event is later named after the people who appeared to control it. Tolstoy dismantles that grammar from inside the event. An order enters a world already occupied by distance, timing, terrain, fear, incomplete knowledge, resistance, competing intentions and actions already underway. From far away, Borodino can look authored. From inside it, authorship dissolves.</p>
       <p>That makes Napoleon more than a man who overestimates his power. He becomes a demonstration of how history manufactures the illusion of authorship: distributed events are retrospectively compressed around their most visible participant. Kutuzov forms the inverse. The more accurately he understands what produces events, the less causal sovereignty he attributes to himself. Tolstoy reverses the usual relation between power and understanding.</p>
       <p>The private lives obey the same architecture. Pierre, Andrei and Natasha act, choose and interpret, but reality returns consequences no intention contains. The domestic and historical plots are therefore not parallel subjects. They are different scales of the same problem: human beings participate in causes they cannot individually possess. The novel's protagonists remain dramatically indispensable while becoming increasingly insufficient as explanations of the world they inhabit.</p>
     </section>
   </article>
   <section className={styles.cmsSection}>
     <div className={styles.kicker}>Cognitive architecture</div>
     <h2 className={styles.dimensionsTitle}>The six-dimensional model</h2>
     <p className={styles.cmsIntro}>TORC's six dimensions show where the artifact's cognitive magnitude is actually carried. Select any dimension to open its definition and the evidence specific to <em>War and Peace</em>.</p>
     <div className={styles.dimensions}>
       {dimensions.map(d=><details className={styles.dimension} key={d.key}>
         <summary>
           <span className={styles.dimKey}>{d.key}</span>
           <span className={styles.dimName}><b>{d.name}</b><small>Definition + artifact analysis</small></span>
           <span className={styles.bar} aria-hidden="true"><span style={{width:`${Number(d.score)*10}%`}} /></span>
           <strong>{d.score}</strong>
         </summary>
         <div className={styles.dimBody}>
           <p><b>Formal definition.</b> {d.formal}</p>
           <p><b>In plain language.</b> {d.plain}</p>
           <p><b>Why <em>War and Peace</em> scores {d.score}.</b> {d.artifact}</p>
           <p className={styles.methodLink}><Link href="/methodology#dimensions">Full dimension methodology →</Link></p>
         </div>
       </details>)}
     </div>
     <Link className={styles.methodologyCta} href="/methodology#dimensions"><span>Explore the model</span><strong>Full Dimension Methodology</strong><span aria-hidden="true">→</span></Link>
   </section>

   <article className={`${styles.essay} ${styles.essayAfterDimensions}`}>
     <section className={styles.boundary}>
       <Link className={`${styles.methodologyCta} ${styles.orderModelCta}`} href="/methodology#operational-order"><span>TORC classification model</span><strong>Explore the Seven Cognitive Orders</strong><span aria-hidden="true">→</span></Link>
       <h2>Why <details className={styles.orderTerm}><summary>G</summary><div className={styles.orderPopover}><b>{orderDefinitions.G.name}</b><p><strong>Formal.</strong> {orderDefinitions.G.formal}</p><p><strong>In plain language.</strong> {orderDefinitions.G.plain}</p><p><strong>Here.</strong> {orderDefinitions.G.artifact}</p></div></details>, not <details className={styles.orderTerm}><summary>3c</summary><div className={styles.orderPopover}><b>{orderDefinitions.c3.name}</b><p><strong>Formal.</strong> {orderDefinitions.c3.formal}</p><p><strong>In plain language.</strong> {orderDefinitions.c3.plain}</p><p><strong>Here.</strong> {orderDefinitions.c3.artifact}</p></div></details>?</h2>
       <p>Pierre and Andrei make 3c a serious alternative. Their earlier orientations toward agency, mortality and meaning break, and the novel does not simply restore them. But their transformations still leave a larger question unanswered: why do people so persistently mistake intention for control?</p>
       <p>Tolstoy answers by changing the status of the characters themselves. Napoleon, Kutuzov, Pierre and the rest cease to function only as agents inside events; they become evidence about how events are produced and then misunderstood. Orders become contributions rather than sufficient causes. Outcomes emerge from interactions no participant can represent in full. History then performs a final distortion: it compresses that distributed process back into the biography of a visible individual.</p>
       <p>This is where the novel crosses into G. It does not merely show consciousness discovering that reality exceeds it. <em>War and Peace</em> does not merely portray the limits of human agency. It explains why those limits exist—and why, afterward, we are tempted to erase them.</p>
     </section>
   </article>

   <section className={styles.exceptional}>
     <div className={styles.kicker}>What makes it exceptional</div>
     <h2>G is extraordinarily rare in narrative artifacts.</h2>
     <p>Tolstoy's deepest move is not to make the great man smaller. It is to explain how the great man becomes "great" as an explanatory object at all. Visibility, power and retrospective narration conspire to give a human face to causes that were never contained in one human being.</p>
     <p>Napoleon therefore remains at the center of the spectacle while losing his place at the center of the explanation. The novel's scale is not excess around that insight; it is the machinery required to demonstrate it across war, family, consciousness and history.</p>
   </section>
   <section className={styles.bottomCta}>
     <Link className={styles.submitButton} href="/evaluate-your-work">Submit your artifact →</Link>
     <div><span>TORC Development Analysis</span><h2>What is your artifact actually doing?</h2><p>Find the deepest operation already present in the work—and the structural boundary keeping it from becoming fully realized.</p></div>
   </section>
 </main>
}

export default async function ArtifactPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const a=getArtifact(slug); if(!a)notFound();
 return <WarAndPeaceAnalysis a={a}/>;
}
