import Link from 'next/link';
import {artifacts,getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';
import styles from './war-peace.module.css';

export function generateStaticParams(){return artifacts.map(a=>({slug:a.slug}))}

const dimensionCopy:Record<string,{name:string,score:string,text:string}> = {
  RL:{name:'Relational Load',score:'9.8',text:'Private lives, families, armies, politics and historical scale remain consequential to one another. The achievement is not the number of relationships, but how long distant parts of the novel continue to matter to each other.'},
  AD:{name:'Abstraction Depth',score:'9.0',text:'Concrete experience repeatedly opens into questions of agency, causation, freedom and necessity, then returns to change how the events themselves are understood.'},
  CD:{name:'Constraint Density',score:'9.1',text:'Intentions collide with terrain, timing, institutions, incomplete knowledge, other intentions and chance. Action matters, but almost never on terms set by the actor alone.'},
  ID:{name:'Inferential Distance',score:'9.1',text:'The reader must move far beyond visible decisions and famous names to grasp the distributed structure producing the outcomes history later attributes to individuals.'},
  IC:{name:'Integrative Compression',score:'9.4',text:'Agency, causation, necessity and interpretation organize an enormous field of war, family, love, death, politics and historical argument without flattening their differences.'},
  GR:{name:'Generalization & Transfer',score:'8.4',text:'The structure travels beyond Napoleon and 1812. It becomes a broader challenge to how people assign causes, credit, blame and historical importance.'}
};

function WarAndPeaceAnalysis({a}:{a:ReturnType<typeof getArtifact>}){
 if(!a)return null;
 const dims=['RL','AD','CD','ID','IC','GR'];
 return <main className={styles.page}>
   <header className={styles.hero}>
     <div className="eyebrow">{a.domain} · {a.year} · TORC analysis</div>
     <h1>{a.title}</h1>
     <p className={styles.creator}>{a.creator}</p>
     <p className={styles.hook}>The novel begins with people who appear to make history. It gradually makes those people insufficient to explain history.</p>
     <div className={styles.verdictGrid}>
       <div><span>Operational Order</span><strong>G</strong><small>Generative cognition</small></div>
       <div><span>Cognitive Magnitude</span><strong>915</strong><small>Observed range 900–922</small></div>
     </div>
   </header>

   <section className={styles.section}>
     <div className={styles.kicker}>The determination</div>
     <h2>History gets bigger as its heroes get smaller.</h2>
     <p className={styles.lead}>Napoleon commands. Generals plan. Soldiers obey, improvise, panic, misunderstand and survive. Yet the more Tolstoy shows us, the less believable it becomes that any one of them can explain what happens.</p>
     <p><em>War and Peace</em> does not merely argue that powerful people have less control than they imagine. It builds a world in which historical outcomes emerge from thousands of constrained actions, local motives, collisions and circumstances that no single mind possesses.</p>
     <blockquote>Napoleon remains at the center of the spectacle while losing his position at the center of the explanation.</blockquote>
   </section>

   <section className={styles.section}>
     <div className={styles.kicker}>Where the cognition lives</div>
     <h2>The novel keeps taking control away from the people who seem to have it.</h2>
     <div className={styles.points}>
       <article><b>01</b><h3>Command is not causation.</h3><p>Orders enter events already in motion. They arrive late, meet resistance, collide with other decisions or become irrelevant. The distance between deciding and causing keeps widening.</p></article>
       <article><b>02</b><h3>Kutuzov sees the limit.</h3><p>His intelligence lies partly in recognizing what cannot be commanded. The better he understands events, the less plausible history looks as the product of exceptional individuals imposing their will.</p></article>
       <article><b>03</b><h3>The battlefield destroys the clean story.</h3><p>From a distance, battle can later look like strategy. From inside it, Tolstoy gives us terrain, fear, timing, confusion, momentum and innumerable local actions that no commander owns.</p></article>
       <article><b>04</b><h3>Private life obeys the same pressure.</h3><p>Pierre, Andrei, Natasha and others discover that intention does not guarantee outcome. Their crises give the historical problem a human scale rather than sitting beside it as a separate theme.</p></article>
       <article><b>05</b><h3>History tidies the mess afterward.</h3><p>Once an event is complete, it can be narrated as though somebody made it happen. Tolstoy keeps exposing the gap between that retrospective story and the distributed reality the novel has shown.</p></article>
     </div>
   </section>

   <section className={`${styles.section} ${styles.boundary}`}>
     <div className={styles.kicker}>The boundary</div>
     <h2>Why G — not 3c.</h2>
     <p><em>War and Peace</em> contains formidable 3c cognition. Pierre and Andrei undergo deep fractures in agency, mortality, meaning and their relation to reality. But those transformations do not exhaust the completed novel.</p>
     <p>The larger structure asks something more radical: <strong>what actually makes events happen?</strong> Tolstoy turns the characters' failures of control into evidence about the machinery of history itself. The novel does not only show consciousness learning to live with its limits. It builds an account of why those limits exist.</p>
     <div className={styles.callout}><span>TORC conclusion</span><strong>3c is powerfully present. G explains the completed artifact.</strong></div>
   </section>

   <section className={styles.section}>
     <div className={styles.kicker}>Cognitive Magnitude</div>
     <div className={styles.cmsTitle}><h2>915</h2><div><span>Observed range</span><strong>900–922</strong></div></div>
     <p className={styles.lead}>The magnitude is not a reward for length. It reflects how much consequential cognitive architecture the novel sustains at once—and how tightly those structures continue to constrain and illuminate one another.</p>
     <div className={styles.dimensions}>{dims.map(k=>{const d=dimensionCopy[k];return <article key={k}><div className={styles.dimHead}><b>{k}</b><strong>{d.score}</strong></div><h3>{d.name}</h3><p>{d.text}</p></article>})}</div>
     <p className={styles.range}>Published CMS: <strong>915</strong> · Observed evaluation range: <strong>900–922</strong>. The published profile is TORC's final determination; internal evaluator records and complete protocol procedures are not published.</p>
   </section>

   <section className={`${styles.section} ${styles.finalSection}`}>
     <div className={styles.kicker}>What makes it exceptional</div>
     <h2>G is extraordinarily rare in narrative artifacts.</h2>
     <p className={styles.lead}><em>War and Peace</em> reaches it because Tolstoy does more than portray people discovering the limits of agency. He makes their inability to command reality intelligible.</p>
     <p>Orders become contributions rather than causes. Battles emerge from actions no commander possesses. Individual intentions remain real, but their consequences pass through circumstances, institutions, competing intentions, incomplete knowledge and chance. History happens—but nobody authors it.</p>
     <p>That turns Napoleon into more than a powerful man who overestimates his power. He becomes evidence of a deeper human error: <strong>mistaking the most visible agent for the sufficient cause.</strong></p>
     <blockquote className={styles.finalQuote}>Tolstoy doesn't leave that insight beside the story. He makes the novel prove it.</blockquote>
     <div className={styles.finalVerdict}><span>TORC determination</span><strong>G · 915</strong><p><em>War and Peace</em> does not merely portray the limits of human agency. It explains why those limits exist.</p></div>
   </section>

   <div className={styles.bottomCta}><div><span>TORC Development Analysis</span><strong>What is your artifact actually doing?</strong></div><Link className="button primary" href="/evaluate-your-work">Submit your artifact →</Link></div>
 </main>
}

export default async function ArtifactPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const a=getArtifact(slug); if(!a)notFound();
 return <WarAndPeaceAnalysis a={a}/>;
}

export {WarAndPeaceAnalysis};
