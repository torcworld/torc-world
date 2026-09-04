import Link from 'next/link';
import {artifacts,getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';
import styles from './war-peace.module.css';
import ArtifactAnalysis from '../components/ArtifactAnalysis';
import {featuredAnalyses} from './featuredAnalyses';

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
       <div><span>Cognitive Magnitude</span><strong>895</strong><small>Production CMS</small></div>
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
     <p className={styles.cmsIntro}>See how TORC’s <strong>Cognitive Magnitude Score (CMS)</strong> is carried across the artifact.</p>
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
         </div>
       </details>)}
     </div>
   </section>

   <article className={`${styles.essay} ${styles.essayAfterDimensions}`}>
     <section className={styles.boundary}>
       <h2>Why <details className={styles.orderTerm}><summary>G</summary><div className={styles.orderPopover}><b>{orderDefinitions.G.name}</b><p><strong>Formal.</strong> {orderDefinitions.G.formal}</p><p><strong>In plain language.</strong> {orderDefinitions.G.plain}</p><p><strong>Here.</strong> {orderDefinitions.G.artifact}</p></div></details>, not <details className={styles.orderTerm}><summary>3c</summary><div className={styles.orderPopover}><b>{orderDefinitions.c3.name}</b><p><strong>Formal.</strong> {orderDefinitions.c3.formal}</p><p><strong>In plain language.</strong> {orderDefinitions.c3.plain}</p><p><strong>Here.</strong> {orderDefinitions.c3.artifact}</p></div></details>?</h2>
       <p>Pierre and Andrei make 3c a serious alternative. Their earlier orientations toward agency, mortality and meaning break, and the novel does not simply restore them. But their transformations still leave a larger question unanswered: why do people so persistently mistake intention for control?</p>
       <p>Tolstoy answers by changing the status of the characters themselves. Napoleon, Kutuzov, Pierre and the rest cease to function only as agents inside events; they become evidence about how events are produced and then misunderstood. Orders become contributions rather than sufficient causes. Outcomes emerge from interactions no participant can represent in full. History then performs a final distortion: it compresses that distributed process back into the biography of a visible individual.</p>
       <p>This is where the novel crosses into G. It does not merely show consciousness discovering that reality exceeds it. <em>War and Peace</em> does not merely portray the limits of human agency. It explains why those limits exist—and why, afterward, we are tempted to erase them.</p>
       <Link className={`${styles.methodologyCta} ${styles.orderModelCta}`} href="/methodology#operational-order"><span>TORC classification model</span><strong>Explore the 7 Operational Orders</strong><span aria-hidden="true">→</span></Link>
     </section>
   </article>

   <section className={styles.exceptional}>
     <div className={styles.kicker}>What makes it exceptional</div>
     <h2>G is extraordinarily rare in narrative artifacts.</h2>
     <p>Tolstoy's deepest move is not to make the great man smaller. It is to explain how the great man becomes "great" as an explanatory object at all. Visibility, power and retrospective narration conspire to give a human face to causes that were never contained in one human being.</p>
     <p>Napoleon therefore remains at the center of the spectacle while losing his place at the center of the explanation. The novel's scale is not excess around that insight; it is the machinery required to demonstrate it across war, family, consciousness and history.</p>
   </section>
   <section className={styles.bottomCta}>
     <Link className={styles.submitButton} href="/evaluate-your-work#pricing">Submit your artifact →</Link>
     <div><span>TORC Development Analysis</span><h2>What is your artifact actually doing?</h2><p>Find the deepest operation already present in the work—and the structural boundary keeping it from becoming fully realized.</p></div>
   </section>
 </main>
}

function OdysseyFallback(){return <ArtifactAnalysis
 domain='Film' year='1968' title='2001: A Space Odyssey' creator='Stanley Kubrick'
 order='2' orderName='Symbolic consciousness' cms={843} range='Median across 10 evaluations'
 headline='Cosmic scale does not make an artifact generative.'
 analysis={[
  'Few films produce stronger signals of higher-order cognition. The monolith links evolutionary discontinuities; HAL turns technology into an apparent problem of cognition; the Star Gate pushes representation toward its limit. TORC nevertheless stops at Level 2 because those signals remain sufficiently explained by an extraordinarily sophisticated symbolic architecture.',
  'The monolith is the crucial test. Inside the film it appears to generate transformations in intelligence and evolutionary status. But generativity inside a constructed world is not yet G. The artifact does not expose an independently constrained mechanism that must survive contact with evidence outside the ontology the film itself stipulates.',
  'HAL creates genuine local recursive pressure, but that pressure does not govern the completed film. The larger architecture remains a represented sequence of intelligence, tool use, technological dependence and transformation.'
 ]}
 dimensions={[
  {key:'RL',name:'Relational Load',score:'8.4',artifact:'Tool use, violence, evolution, artificial intelligence, monolith encounters and human transformation remain strongly interdependent across enormous temporal distance.'},
  {key:'AD',name:'Abstraction Depth',score:'8.6',artifact:'Concrete images repeatedly support high-level relations among intelligence, technology, evolution and transcendence without explicit conceptual exposition.'},
  {key:'CD',name:'Constraint Density',score:'8.6',artifact:'Visual rhythm, sound, causal sequencing, technological detail and symbolic recurrence tightly constrain the film’s sparse construction.'},
  {key:'ID',name:'Inferential Distance',score:'8.3',artifact:'The viewer must infer large conceptual relations from minimal exposition, but recurring structure keeps those relations recoverable.'},
  {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'A few images and transitions carry enormous historical and conceptual load; the bone-to-spacecraft cut is an extreme local example.'},
  {key:'GR',name:'Generalization Reach',score:'7.7',artifact:'The structure travels well to questions of tools, intelligence and transformation, while remaining substantially dependent on the film’s constructed cosmology.'}
 ]}
 boundaryTitle='Why Level 2, not 3b—or G?'
 boundary={[
  '3b would require the governing contradiction to implicate consciousness’s own attempt to orient itself toward reality. HAL approaches that territory locally, but the completed film remains intelligible without making recursive self-implication its governing operation.',
  'G fails for a different reason. The film gives the monolith causal power, but that power is largely stipulated by the fictional world. A fictional mechanism can organize meaning brilliantly without becoming a constrained explanatory mechanism for an independently identifiable target.'
 ]}
 exceptionalTitle='It is one of TORC’s clearest demonstrations that magnitude and Order are different things.'
 exceptional={[
  'A CMS in the mid-800s alongside Level 2 is not a contradiction. It is exactly what the two-coordinate model is designed to reveal.',
  '2001 does not need a higher Operational Order to be cognitively enormous.'
 ]}
/>}

const orderNames:Record<string,string>={
 '1':'Direct consciousness','2':'Symbolic consciousness','3a':'Corrective recursive consciousness','3b':'Fractured recursive consciousness','3c':'Integrated recursive consciousness','G':'Generative consciousness','GΩ':'Generative consciousness — successor-baseline necessity'
};
function GenericArtifact({a}:{a:NonNullable<ReturnType<typeof getArtifact>>}){
 const featured=featuredAnalyses[a.slug];
 if(featured){
  return <ArtifactAnalysis domain={a.domain} year={a.year} title={a.title} creator={a.creator} order={a.torc??'—'} orderName={orderNames[a.torc??'']??'Operational Order'} cms={a.cms ?? 0} range='Production CMS'
   headline={featured.headline} analysis={featured.analysis} dimensions={featured.dimensions}
   boundaryTitle={featured.boundaryTitle} boundary={featured.boundary}
   exceptionalTitle={featured.exceptionalTitle} exceptional={featured.exceptional}/>;
 }
 return <ArtifactAnalysis domain={a.domain} year={a.year} title={a.title} creator={a.creator} order={a.torc??'—'} orderName={orderNames[a.torc??'']??'Operational Order'} cms={a.cms ?? 0} range='Corpus determination'
 headline={`TORC resolves the completed artifact at ${a.torc}.`}
 analysis={[
  `The corpus determination for ${a.title} is ${a.torc}, with a Cognitive Magnitude Score of ${a.cms}. Operational Order and magnitude were determined independently under the TORC protocol.`,
  'This public corpus entry records the stabilized determination. A fuller artifact-specific analysis can be added without changing the underlying corpus result.'
 ]}
 boundaryTitle={`Why ${a.torc}?`}
 boundary={[
  'TORC assigns the lowest Operational Order sufficient to explain the governing operation of the completed artifact. The corpus determination shown here is the stabilized result of that evaluation process.'
 ]}
 exceptionalTitle='Order and magnitude remain separate.'
 exceptional={[
  `A CMS of ${a.cms} describes demonstrated cognitive magnitude; it does not raise or lower the artifact’s Operational Order of ${a.torc}.`
 ]}/>;
}
export default function ArtifactPage({params}:{params:{slug:string}}){
 const {slug}=params;
 if(slug==='2001-a-space-odyssey') return <OdysseyFallback/>;
 const a=getArtifact(slug); if(!a)notFound();
 if(slug==='war-and-peace') return <WarAndPeaceAnalysis a={a}/>;
 return <GenericArtifact a={a}/>;
}
