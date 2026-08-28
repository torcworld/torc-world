import Link from 'next/link';
import {artifacts,getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';
import styles from './war-peace.module.css';

export function generateStaticParams(){return artifacts.map(a=>({slug:a.slug}))}

const dimensionCopy:Record<string,{name:string,score:string,text:string}> = {
  RL:{name:'Relational Load',score:'9.8',text:'Private lives, families, battlefields, political power and historical scale remain consequential to one another. Pull the layers apart and the novel loses part of what it is doing.'},
  AD:{name:'Abstraction Depth',score:'9.0',text:'The book repeatedly moves from lived events to questions about agency, causation, freedom and the stories later used to explain what happened.'},
  CD:{name:'Constraint Density',score:'9.1',text:'Personal motives, military conditions, social position, geography, timing and chance continually restrict what any character can actually make happen.'},
  ID:{name:'Inferential Distance',score:'9.1',text:'The novel asks the reader to cross a long distance from visible decisions and famous names to a much less intuitive account of how large events emerge.'},
  IC:{name:'Integrative Compression',score:'9.4',text:'A relatively small set of ideas about agency and causation reorganizes an enormous field of characters, wars, relationships and historical argument.'},
  GR:{name:'Generalization',score:'8.5',text:'The architecture travels beyond Napoleon and 1812. It becomes a broader challenge to how we assign causes, credit, blame and historical importance.'}
};

export default async function ArtifactPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const a=getArtifact(slug); if(!a)notFound();
 const dims=['RL','AD','CD','ID','IC','GR'];
 return <main className={styles.page}>
   <header className={styles.hero}>
     <div className="eyebrow">{a.domain} · {a.year} · TORC analysis</div>
     <h1>{a.title}</h1>
     <p className={styles.creator}>{a.creator}</p>
     <p className={styles.hook}>The novel begins with people who appear to make history. It gradually makes those people insufficient to explain history.</p>
     <div className={styles.verdictGrid}>
       <div><span>Operational Order</span><strong>G</strong><small>Generative cognition</small></div>
       <div><span>Cognitive Magnitude</span><strong>915</strong><small>Observed evaluation range 900–922</small></div>
     </div>
   </header>

   <section className={styles.section}>
     <div className={styles.kicker}>The determination</div>
     <h2>History gets bigger as its heroes get smaller.</h2>
     <p className={styles.lead}>Napoleon commands. Kutuzov commands. Officers make plans. Soldiers obey, improvise, panic, wait, misunderstand and survive. Yet the more Tolstoy shows us, the less believable it becomes that any one of these people can explain what happens.</p>
     <p>That is the decisive achievement of <em>War and Peace</em>. The novel does not simply tell us that powerful people are less powerful than they think. It builds a world in which large historical outcomes emerge from thousands of constrained actions, accidents, local motives and conditions that no single mind possesses.</p>
     <blockquote>Napoleon does not merely turn out to be a flawed historical actor. The novel turns him into evidence that the usual story of historical agency is too simple.</blockquote>
   </section>

   <section className={styles.section}>
     <div className={styles.kicker}>Where the cognition lives</div>
     <h2>The book keeps taking control away from the people who seem to have it.</h2>
     <div className={styles.points}>
       <article><b>01</b><h3>Command is not causation.</h3><p>Orders move through armies that are already moving. They arrive late, collide with circumstances, are misunderstood or become irrelevant. The distance between deciding and causing keeps widening.</p></article>
       <article><b>02</b><h3>Kutuzov matters because he sees the limit.</h3><p>His intelligence is not presented simply as superior command. Part of it lies in recognizing when events cannot be forced into the shape a commander wants.</p></article>
       <article><b>03</b><h3>The battlefield destroys the clean story.</h3><p>From above, a battle can later look like strategy. From inside it, the event is fragmented across fear, terrain, timing, confusion, momentum and innumerable local decisions.</p></article>
       <article><b>04</b><h3>The characters live the same problem privately.</h3><p>Pierre and Andrei repeatedly discover that intention does not guarantee outcome. Their personal crises are not separate from the historical argument; they give the problem a human scale.</p></article>
       <article><b>05</b><h3>History arrives afterward and tidies the mess.</h3><p>The completed event can be narrated as though somebody made it happen. Tolstoy keeps exposing the gap between that retrospective story and the distributed reality the novel has shown us.</p></article>
     </div>
   </section>

   <section className={`${styles.section} ${styles.boundary}`}>
     <div className={styles.kicker}>The boundary</div>
     <h2>Why G — and why 3c remains the serious alternative.</h2>
     <p><em>War and Peace</em> contains extraordinary 3c material. Pierre, Andrei and others are forced to rethink agency, death, purpose, knowledge and how a life can be inhabited when certainty collapses. A strong reading can stop there.</p>
     <p>TORC goes one step further because the completed novel does not leave those transformations as the largest thing it is doing. Again and again, individual consciousness is placed inside a wider question: <strong>what actually makes events happen?</strong></p>
     <p>If the philosophy of history were detachable commentary, 3c would probably be enough. It isn't. The same pressure appears in the battles, the commanders, the private lives and the way the book asks us to reinterpret apparent agency. The historical argument changes what the characters themselves mean.</p>
     <div className={styles.callout}><span>TORC conclusion</span><strong>3c is deeply present. G governs the completed artifact.</strong></div>
   </section>

   <section className={styles.section}>
     <div className={styles.kicker}>Cognitive Magnitude</div>
     <h2>915 / 1000</h2>
     <p className={styles.lead}>The score is high not because the novel is long, famous or difficult. It is high because an enormous number of consequential structures remain active at once—and because the book makes them work together.</p>
     <div className={styles.dimensions}>{dims.map(k=>{const d=dimensionCopy[k];return <article key={k}><div className={styles.dimHead}><b>{k}</b><strong>{d.score}</strong></div><h3>{d.name}</h3><p>{d.text}</p></article>})}</div>
     <p className={styles.range}>Published CMS: <strong>915</strong> · Observed evaluation range: <strong>900–922</strong>. The published profile is TORC's final determination; internal evaluator records and complete protocol procedures are not published.</p>
   </section>

   <section className={`${styles.section} ${styles.writerSection}`}>
     <div className={styles.kicker}>For writers</div>
     <h2>What this analysis can see that a score cannot.</h2>
     <p>Imagine the same problem inside a screenplay. You may already have a powerful idea about institutions, memory, violence, identity or information. But is that idea actually governing the work—or is it commentary sitting beside the story?</p>
     <p>TORC Development Analysis looks for that boundary. It can identify where the deepest operation already lives, what is keeping it local, and what would have to change for the entire artifact to reorganize around it. Sometimes the right answer is to push further. Sometimes doing so would damage the work.</p>
     <div className={styles.cta}><div><span>Have an original artifact?</span><strong>Find out what it is actually doing.</strong></div><Link className="button primary" href="/evaluate-your-work">Submit your artifact →</Link></div>
   </section>

   <footer className={styles.footerNote}>TORC evaluates demonstrated cognition in the completed artifact. Operational Order and Cognitive Magnitude describe cognitive architecture; they are not measures of artistic worth.</footer>
 </main>
}
