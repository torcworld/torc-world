import Link from 'next/link';
import {getArtifact} from '@/lib/artifacts';
import styles from './gatsby.module.css';

const dimensions = [
  {key:'RL',name:'Relational Load',score:'7.4',formal:'Quantity, heterogeneity, interdependence, and coordination of necessary relations.',plain:'How many meaningful relationships must the artifact maintain and coordinate simultaneously? Not simply how many components it contains, but how many genuinely influence and constrain one another.',artifact:'The novel coordinates Gatsby, Daisy, Tom, Nick, Myrtle and Wilson through money, marriage, class, geography, desire and consequence. The network is dense and consequential, but it remains compact enough that its principal relations can still be separated and followed without destroying the whole.'},
  {key:'AD',name:'Abstraction Depth',score:'7.4',formal:'Controlled distance through abstraction layers while preserving relevant distinctions.',plain:'How far can the artifact move beyond the concrete case toward deeper or more general structures while preserving the relationships that made the concrete case meaningful?',artifact:'Gatsby’s private attempt to recover Daisy expands into a structure about self-invention, class, desire, memory and the American promise of beginning again. The abstraction is substantial, but the novel keeps returning those ideas to the same symbolic and social field rather than constructing a deeper explanatory architecture beneath it.'},
  {key:'CD',name:'Constraint Density',score:'7.6',formal:'Density of heterogeneous, interacting, simultaneously binding conditions.',plain:'How many interconnected requirements must the artifact satisfy at once, and how strongly do those requirements restrict what can successfully happen or be explained?',artifact:'The novel tightly coordinates chronology, Nick’s retrospective narration, class position, romantic history, geography, recurring objects and the fatal sequence linking Gatsby’s dream to Myrtle’s death. Its construction is disciplined, though it does not approach the extreme multi-domain constraint density of TORC’s highest-magnitude artifacts.'},
  {key:'ID',name:'Inferential Distance',score:'6.9',formal:'Distance between available premises/conditions and the non-obvious successful solution or relation derived from them.',plain:'How large and non-routine is the reasoning movement from what is immediately available to the deeper relation or explanation the artifact establishes?',artifact:'The reader reconstructs Gatsby from rumor, performance, testimony and Nick’s changing judgment, and must connect the personal tragedy to larger structures of class and temporal desire. The movement is sophisticated but comparatively legible: the novel progressively supplies the symbolic relations needed to make its governing pattern intelligible.'},
  {key:'IC',name:'Integrative Compression',score:'8.2',formal:'How economically a structure coordinates and preserves a substantially larger body of information and relations.',plain:'How much diverse complexity can the artifact organize through a smaller underlying architecture without flattening the differences that matter?',artifact:'This is the novel’s strongest dimension. A remarkably small set of characters, places and recurring objects carries class, money, desire, self-invention, memory, violence and historical longing. The green light can move from one man’s desire to a much larger structure of receding futurity without ceasing to belong to Gatsby’s particular story.'},
  {key:'GR',name:'Generalization Reach',score:'6.8',formal:'How far the demonstrated structure remains applicable across materially heterogeneous problem-spaces.',plain:'How far can the same underlying structure travel into substantially different cases or domains while preserving the relationships that make it work?',artifact:'The architecture travels well to other forms of status aspiration, romantic idealization, self-invention and nostalgia. Its reach is real, but it remains strongly dependent on a recognizable social-symbolic problem-space rather than establishing a mechanism that transfers across radically different domains.'}
];

const orderDefinitions = {
  L2:{name:'2 — Symbolic Consciousness',formal:'The completed artifact organizes meaning through symbolic, relational, thematic or systemic representation while a stable orientation toward the represented reality remains sufficient to account for the governing operation.',plain:'The work can be deep, complex and highly integrated while still making its meaning through a world we can interpret from a stable position.',artifact:'The green light, East and West Egg, Gatsby’s mansion, Daisy’s voice, cars, money and the attempted recovery of the past form one tightly coordinated symbolic system. That system is sufficient to explain the novel’s governing achievement.'},
  b3:{name:'3b — Fractured Consciousness',formal:'The fracture implicates consciousness’s own attempt to orient itself toward reality.',plain:'The work no longer gives consciousness a secure position outside the problem. Seeing, knowing or orienting becomes caught inside the fracture.',artifact:'Gatsby himself approaches this territory: his representation of Daisy and the past begins to govern his relation to reality. But the completed novel keeps that fracture legible from a stable position rather than making it the governing operation of the artifact.'}
};

export default function GreatGatsbyPage(){
 const a=getArtifact('the-great-gatsby');
 if(!a)return null;
 return <main className={styles.page}>
   <header className={styles.hero}>
     <div className="eyebrow">{a.domain} · {a.year} · TORC analysis</div>
     <h1>{a.title}</h1>
     <p className={styles.creator}>{a.creator}</p>
     <div className={styles.verdictGrid}>
       <div><span>Operational Order</span><strong>2</strong><small>Symbolic consciousness</small></div>
       <div><span>Cognitive Magnitude</span><strong>763</strong><small>Pooled CMS estimate</small></div>
     </div>
   </header>

   <article className={styles.essay}>
     <section>
       <div className={styles.kicker}>Analysis</div>
       <h2>The novel never loses the position from which Gatsby can be understood.</h2>
       <p>That is the structural fact behind its Level 2 determination. Fitzgerald builds an unusually dense representational system around Gatsby’s attempt to convert desire into reality: wealth becomes identity, geography becomes class, objects become promises, and the present is forced to carry an image of the past. The novel deepens that system relentlessly, but it does not make the reader’s own orientation toward reality collapse with Gatsby’s.</p>
       <p>Gatsby’s central error therefore becomes more legible as the novel proceeds, not less. He does not merely want Daisy in the present. He needs the present to certify a representation he has constructed of the past. The mansion, the parties, the shirts and the green light acquire their force because they belong to that same attempt: material reality is organized as evidence that the imagined history can still be made true.</p>
       <p>Fitzgerald’s achievement is the precision with which a small symbolic field carries an increasingly large structure. East Egg and West Egg organize class; Daisy’s voice binds desire to money; the valley of ashes gives consequence a geography; the green light compresses distance, futurity and retrospective longing into a single object. The novel does not discover a new explanatory mechanism beneath these representations. It makes the representations themselves extraordinarily efficient.</p>
     </section>
   </article>

   <section className={styles.cmsSection}>
     <div className={styles.kicker}>Cognitive architecture</div>
     <h2 className={styles.dimensionsTitle}>The six-dimensional model</h2>
     <p className={styles.cmsIntro}>See how TORC’s Cognitive Magnitude Score (CMS) is carried across the artifact.</p>
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
           <p><b>Why <em>The Great Gatsby</em> scores {d.score}.</b> {d.artifact}</p>
         </div>
       </details>)}
     </div>
   </section>

   <article className={`${styles.essay} ${styles.essayAfterDimensions}`}>
     <section className={styles.boundary}>
       <h2>Why Level 2, not Level 3?</h2>
       <p>The strongest Level 3 pressure is not 3a but <details className={styles.orderTerm}><summary>3b</summary><div className={styles.orderPopover}><b>{orderDefinitions.b3.name}</b><p><strong>Formal.</strong> {orderDefinitions.b3.formal}</p><p><strong>In plain language.</strong> {orderDefinitions.b3.plain}</p><p><strong>Here.</strong> {orderDefinitions.b3.artifact}</p></div></details>. Gatsby does not simply misread an external world. He constructs a representation of Daisy, himself and the past so powerful that reality is required to conform to it. His problem therefore approaches a fracture in consciousness’s own relation to what is real.</p>
       <p>But Gatsby’s fracture is not the governing fracture of the completed novel. Fitzgerald preserves the position from which Gatsby can be understood. The reader can see the impossible demand built into his project: Daisy must not merely choose him now; she must erase the intervening years so that the present certifies the story he has constructed about the past. As reality refuses, the contradiction becomes clearer rather than destabilizing the novel’s own orientation.</p>
       <p>That distinction keeps the artifact at Level 2. Its governing achievement is an unusually compressed symbolic architecture in which money becomes voice, geography becomes class, a light becomes futurity, and romantic desire becomes a structure of self-invention and retrospective longing. The novel represents a fractured consciousness with extraordinary precision; it does not require that fracture as the operation by which the completed artifact itself knows its world.</p>
       <Link className={`${styles.methodologyCta} ${styles.orderModelCta}`} href="/methodology#operational-order"><span>TORC classification model</span><strong>Explore the 7 Operational Orders</strong><span aria-hidden="true">→</span></Link>
     </section>
   </article>

   <section className={styles.exceptional}>
     <div className={styles.kicker}>What makes it exceptional</div>
     <h2>Very little in the novel is allowed to mean only one thing.</h2>
     <p>Its achievement is compression. Gatsby’s dream is simultaneously romantic, economic, social and temporal without those meanings having to be explained in separate systems. Fitzgerald keeps folding them back into the same small field of objects and relations.</p>
     <p>That economy is also the limit TORC identifies. The novel intensifies and perfects its representation of desire; it does not cross into a different cognitive operation. Its final enlargement—from Gatsby’s private longing to the recurring human movement toward a receding future—completes the symbolic structure rather than breaking beyond it.</p>
   </section>

   <section className={styles.bottomCta}>
     <Link className={styles.submitButton} href="/evaluate-your-work#pricing">Submit your artifact →</Link>
     <div><span>TORC Development Analysis</span><h2>What is your artifact actually doing?</h2><p>Find the deepest operation already present in the work—and the structural boundary keeping it from becoming fully realized.</p></div>
   </section>
 </main>
}
