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
       <p><em>War and Peace</em> begins in a world that seems to have obvious centers of power. Emperors decide. Generals command. Armies move. Historians later arrange the consequences around the names of the people who appeared to control them.</p>
       <p>Tolstoy spends the novel making that picture harder and harder to believe.</p>
       <p>Napoleon gives orders, but an order enters a reality already crowded with distance, timing, terrain, fear, misunderstanding, resistance, competing decisions and events already in motion. From far away a battle can look like the execution of a plan. From inside it, the plan fragments into thousands of local actions that no commander sees in full and no commander owns.</p>
       <p>Kutuzov is important for almost the opposite reason. His intelligence lies partly in recognizing the limits of command. He does not become a better master of history than Napoleon; he understands more clearly that history has no single master.</p>
       <p>The same pressure reaches into private life. Pierre, Andrei, Natasha and the families around them act with real intentions, but those intentions pass into social structures, other people, accident, mortality and consequences they could not have represented in advance. Tolstoy is not running a philosophical argument beside the human story. The human story is where the argument keeps becoming visible.</p>
       <p>This is what makes the scale of <em>War and Peace</em> cognitively necessary rather than merely impressive. Its enormous field of characters, institutions, battles and private lives allows the novel to test the same problem at different scales: how much of what happens can actually be explained by what somebody intended to happen?</p>
       <p>Again and again, the answer is: less than the stories we tell afterward suggest. Historical narration cleans up distributed events. It finds a visible agent, assigns that agent causal authority and turns an outcome produced by innumerable conditions into a story with a protagonist.</p>
       <p>Napoleon therefore becomes more than a powerful man who overestimates his power. He becomes evidence of a deeper error in human explanation: mistaking the most visible agent for the sufficient cause.</p>
     </section>

     <section className={styles.boundary}>
       <div className={styles.kicker}>The boundary</div>
       <h2>Why G, not 3c?</h2>
       <p>A serious 3c reading of <em>War and Peace</em> is possible because the novel contains profound transformations in consciousness. Pierre and Andrei lose ways of understanding agency, mortality, meaning and themselves; the novel does not simply repair those fractures by restoring their earlier certainty.</p>
       <p>But that does not fully describe what the completed novel does. Tolstoy also asks why human beings so consistently misunderstand the forces producing the world around them. The failures of individual control become evidence for a larger account of historical causation: outcomes emerge through distributed actions, constraints, circumstances and interactions that exceed every participant.</p>
       <p>That is why TORC places the novel at G. <em>War and Peace</em> does not stop with consciousness confronting the limits of its orientation to reality. It constructs an explanation for why individual intention and historical outcome come apart in the first place.</p>
     </section>
   </article>

   <section className={styles.cmsSection}>
     <div className={styles.kicker}>Cognitive Magnitude</div>
     <div className={styles.cmsTitle}><h2>915</h2><div><span>Observed range</span><strong>900–922</strong></div></div>
     <p className={styles.cmsIntro}>The CMS reflects the scale and architecture of the cognition demonstrated by the completed artifact. In <em>War and Peace</em>, the exceptional magnitude comes from the number, distance and interdependence of structures the novel coordinates without losing the distinctions between them.</p>
     <div className={styles.dimensions}>
       {dimensions.map(d=><details className={styles.dimension} key={d.key}>
         <summary><span className={styles.dimKey}>{d.key}</span><span className={styles.dimName}><b>{d.name}</b><small>Definition + artifact analysis</small></span><strong>{d.score}</strong><span className={styles.info} aria-hidden="true">i</span></summary>
         <div className={styles.dimBody}>
           <p><b>Formal definition.</b> {d.formal}</p>
           <p><b>In plain language.</b> {d.plain}</p>
           <p><b>Why <em>War and Peace</em> scores {d.score}.</b> {d.artifact}</p>
           <p className={styles.methodLink}><Link href="/methodology#dimensions">Full dimension methodology →</Link></p>
         </div>
       </details>)}
     </div>
     <p className={styles.range}>Published CMS <strong>915</strong> · observed evaluation range <strong>900–922</strong></p>
   </section>

   <section className={styles.exceptional}>
     <div className={styles.kicker}>What makes it exceptional</div>
     <h2>G is extraordinarily rare in narrative artifacts.</h2>
     <p><em>War and Peace</em> reaches it because Tolstoy does more than portray the limits of human agency. He makes those limits intelligible. The novel takes a world apparently organized by powerful individuals and reveals a deeper architecture of intention, constraint, circumstance, collective action and retrospective interpretation.</p>
     <p>The apparent makers of history remain inside history, but they can no longer explain it. Tolstoy does not leave that insight beside the story. He makes the novel demonstrate it.</p>
     <div className={styles.finalVerdict}><span>TORC determination</span><strong>G · 915</strong><p><em>War and Peace</em> does not merely portray the limits of human agency. It explains why those limits exist.</p></div>
   </section>

   <section className={styles.bottomCta}>
     <div><span>TORC Development Analysis</span><h2>What is your artifact actually doing?</h2><p>Where is its deepest operation already working—and what is keeping the rest of the artifact from reaching it?</p></div>
     <Link className="button primary" href="/evaluate-your-work">Submit your artifact →</Link>
   </section>
 </main>
}

export default async function ArtifactPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const a=getArtifact(slug); if(!a)notFound();
 return <WarAndPeaceAnalysis a={a}/>;
}
