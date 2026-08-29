import Link from 'next/link';
import styles from './organizations.module.css';

const useCases = [
  {no:'01',title:'Evaluate a portfolio',short:'Apply one evaluative standard across a slate, catalogue, submission pool, or recurring stream of work.',example:'250 submissions → standardized TORC profiles → comparative shortlist → deeper analysis of selected works.'},
  {no:'02',title:'Compare what the corpus demonstrates',short:'See differences in Operational Order, Cognitive Magnitude, dimensional architecture, bottlenecks, and outliers.',example:'Compare a development slate by demonstrated cognition rather than reputation, genre, or surface complexity.'},
  {no:'03',title:'Find what deserves deeper attention',short:'Identify where works stop, which boundaries matter, and which artifacts warrant development or closer analysis.',example:'Separate elaborate work from artifacts that actually demonstrate the target cognitive operation.'},
  {no:'04',title:'Build a recurring TORC workflow',short:'Create a repeatable evaluation layer for editorial, research, selection, development, or internal review.',example:'Custom reporting, evaluator calibration, research collaboration, recurring corpus analysis, or methodology licensing.'},
];

export default function Organizations(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.heroCopy}>
    <div className={styles.eyebrow}>TORC FOR ORGANIZATIONS</div>
    <h1>Evaluate cognition<br/>at scale.</h1>
    <p className={styles.lede}>One standard across a portfolio, submission pool, catalogue, or recurring stream of completed artifacts.</p>
    <div className={styles.actions}>
     <a className={styles.primary} href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">Discuss an institutional use case</a>
     <Link className={styles.secondary} href="/artifacts">Explore published evaluations</Link>
    </div>
   </div>
   <div className={styles.heroPanel} aria-label="Illustrative TORC portfolio view">
    <div className={styles.panelTop}><span>ILLUSTRATIVE PORTFOLIO VIEW</span><span>TORC / 50</span></div>
    <div className={styles.orderRows}>
     <div><span>3c</span><i style={{width:'16%'}}/><b>08</b></div><div><span>3b</span><i style={{width:'28%'}}/><b>14</b></div><div><span>3a</span><i style={{width:'38%'}}/><b>19</b></div><div><span>2</span><i style={{width:'18%'}}/><b>09</b></div>
    </div>
    <div className={styles.cmsRange}><span>CMS RANGE</span><b>612</b><div><i/><i/><i/><i/><i/></div><b>894</b></div>
    <div className={styles.panelFoot}><span>ORDER DISTRIBUTION</span><span>MAGNITUDE RANGE</span><span>OUTLIERS</span></div>
    <p>Conceptual display only — not client data.</p>
   </div>
  </header>

  <section className={styles.volume}>
   <div className={styles.bigNumber}>50</div>
   <div className={styles.volumeCopy}>
    <div className={styles.eyebrow}>HIGH-VOLUME EVALUATION</div>
    <h2>Fifty artifacts a week?</h2>
    <p>Then TORC should not behave like fifty isolated commissions. The artifact class, analytical depth, reporting, volume, and cadence can be designed as one repeatable evaluation program.</p>
    <a href="mailto:contact@torc.world?subject=TORC%20High-Volume%20Evaluation%20Inquiry">Discuss a volume workflow <span>→</span></a>
   </div>
   <div className={styles.flow} aria-label="Illustrative evaluation workflow">
    <div><b>01</b><span>ARTIFACTS</span><strong>50</strong></div><em>→</em><div><b>02</b><span>PROFILES</span><strong>50</strong></div><em>→</em><div><b>03</b><span>PATTERNS</span><strong>06</strong></div><em>→</em><div><b>04</b><span>DEEP DIVES</span><strong>?</strong></div>
   </div>
  </section>

  <section className={styles.applications}>
   <div className={styles.sectionHeading}><div><div className={styles.eyebrow}>WHAT TORC CAN DO</div><h2>One corpus. A clearer view.</h2></div><p>Select a use case to see the practical output.</p></div>
   <div className={styles.cards}>{useCases.map(item=><details className={styles.card} key={item.no}><summary><span className={styles.cardNo}>{item.no}</span><div><h3>{item.title}</h3><p>{item.short}</p></div><span className={styles.explore}>See example <b>+</b></span></summary><div className={styles.cardReveal}><span>IN PRACTICE</span><p>{item.example}</p></div></details>)}</div>
  </section>

  <section className={styles.principle}>
   <div className={styles.sectionLabel}>THE STANDARD STAYS FIXED</div>
   <div><h2>Scale changes the workflow.<br/>Not the determination.</h2><p>TORC can adapt reporting depth and implementation to the organization. Volume, reputation, commercial importance, and the desired outcome do not alter the Operational Order or Cognitive Magnitude demonstrated by the artifact.</p></div>
  </section>

  <section className={styles.contact}>
   <div><div className={styles.eyebrow}>INSTITUTIONAL ENGAGEMENTS</div><h2>Tell us what you need to evaluate.</h2><p>Send the artifact type, approximate volume, purpose, and the level of reporting you need. TORC can then scope the evaluation workflow around the corpus.</p></div>
   <div className={styles.inquiry}><span>USEFUL TO INCLUDE</span><ul><li>Artifact type or corpus</li><li>Approximate volume and frequency</li><li>Selection, development, research, or other purpose</li><li>Desired reporting or comparison depth</li></ul><a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">Start an institutional inquiry <b>→</b></a></div>
  </section>
 </main>
}
