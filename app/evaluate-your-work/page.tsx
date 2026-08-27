import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';

const dimensions = [
  ['Operational ceiling', 'Where the work currently stops, why that boundary matters, and what a genuinely deeper operation would require.'],
  ['Cognitive Magnitude', 'Where the work is carrying substantial cognitive load — and where its architecture is still comparatively thin, loose, or underused.'],
  ['False-depth audit', 'Where complexity, symbolism, ambiguity, recursion, or philosophical language may be signalling more than the structure itself demonstrates.'],
];

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.heroCopy}>
    <div className={styles.eyebrow}>TORC DEVELOPMENT ANALYSIS</div>
    <h1>Find where your work is now —<br/>and what would have to change for it to go further.</h1>
    <p>TORC evaluates the cognitive operation your artifact actually performs, the magnitude of cognition demonstrated in its construction, and — where useful — the structural boundary preventing the work from doing more.</p>
    <a className={styles.primary} href="#submit">Submit your artifact</a>
   </div>
   <aside className={styles.heroIndex}>
    <span>ANALYSIS / 01</span>
    <div><b>ORDER</b><p>What kind of cognitive operation is actually present?</p></div>
    <div><b>MAGNITUDE</b><p>How much cognitive architecture does the artifact sustain?</p></div>
    <div><b>BOUNDARY</b><p>What prevents the next structural operation, if one is genuinely latent?</p></div>
   </aside>
  </header>

  <section className={styles.processStrip}>
   <div><span>01</span><b>Submit</b><small>Scope request</small></div>
   <i>→</i>
   <div><span>02</span><b>Review</b><small>Scope · price · turnaround</small></div>
   <i>→</i>
   <div><span>03</span><b>Evaluate</b><small>Artifact-first analysis</small></div>
   <i>→</i>
   <div><span>04</span><b>Develop</b><small>Evidence-based next moves</small></div>
  </section>

  <section className={styles.intro}>
   <div><span className={styles.number}>01</span><h2>Not conventional coverage.</h2></div>
   <div className={styles.copy}>
    <p>TORC does not primarily ask whether a work follows established conventions, feels prestigious, or appears intellectually sophisticated. It asks what the completed artifact <em>demonstrates</em>.</p>
    <p>A Level 2 work does not become Level 3 by adding symbolism or self-reference. A high Cognitive Magnitude Score does not automatically mean a higher Operational Order. Development begins by locating the work precisely enough to understand what kind of change would actually matter.</p>
   </div>
  </section>

  <section className={styles.darkSection}>
   <div className={styles.sectionHead}><span>WHAT TORC CAN REVEAL</span><h2>“Make it deeper” is not a development note.</h2></div>
   <div className={styles.revealGrid}>{dimensions.map(([title,text],i)=><article key={title}><div className={styles.cardNo}>0{i+1}</div><h3>{title}</h3><p>{text}</p><div className={styles.cardSignal}/></article>)}</div>
  </section>

  <section className={styles.example}>
   <div className={styles.exampleLabel}>A TORC DEVELOPMENT QUESTION</div>
   <blockquote>“Your work reaches Level 2. What, specifically, prevents the transition to 3a?”</blockquote>
   <p>The answer might not be “more complexity.” The work may already be highly symbolic and relationally dense. The missing operation may be that the framework through which the protagonist understands reality never itself becomes implicated in the problem. TORC development isolates that distinction and identifies where the artifact would have to change for the transition to become structurally real.</p>
  </section>

  <section className={styles.pricing}>
   <div className={styles.sectionHeadLight}><span>FOUNDING SERVICES</span><h2>Choose how far you want to go.</h2><p>Founding rates are intentionally below the intended standard pricing while the service builds its first body of client work.</p></div>
   <div className={styles.priceGrid}>
    <article className={styles.priceCard}>
     <div><span className={styles.package}>TORC Evaluation</span><div className={styles.price}>€149</div><p className={styles.priceLead}>What does the work demonstrate?</p></div>
     <ul><li>Operational Order</li><li>Six-dimensional cognitive profile</li><li>Cognitive Magnitude Score + DIP</li><li>Boundary analysis</li><li>Principal strengths and limitations</li></ul>
     <a href="#submit">Choose Evaluation <span>→</span></a>
    </article>
    <article className={`${styles.priceCard} ${styles.featured}`}>
     <div className={styles.recommended}>RECOMMENDED · FOUNDING RATE</div>
     <div><span className={styles.package}>TORC Development</span><div className={styles.price}>€349 <small>standard €495</small></div><p className={styles.priceLead}>Where does the work stop — and what could make it stronger?</p></div>
     <ul><li>Everything in TORC Evaluation</li><li>Operational-ceiling diagnosis</li><li>Next-Order boundary analysis</li><li>Cognitive Magnitude development</li><li>False-depth audit</li><li>Prioritized structural opportunities</li></ul>
     <a href="#submit">Choose Development <span>→</span></a>
    </article>
    <article className={styles.priceCard}>
     <div><span className={styles.package}>TORC Deep Analysis</span><div className={styles.price}>from €695</div><p className={styles.priceLead}>A deeper examination of the artifact as a complete cognitive architecture.</p></div>
     <ul><li>Everything in TORC Development</li><li>Section / sequence-level analysis</li><li>Competing interpretations tested</li><li>Order × Magnitude interaction</li><li>Extended revision priorities</li><li>Substantial final report</li></ul>
     <a href="#submit">Choose Deep Analysis <span>→</span></a>
    </article>
   </div>
   <p className={styles.scopeNote}>Final scope and turnaround are confirmed before any work begins. Very long or unusually complex artifacts may require a custom quote.</p>
  </section>

  <section className={styles.higher}>
   <div className={styles.rule}/><h2>Higher isn’t always better.</h2>
   <p>TORC development is not an attempt to force every artifact toward the highest possible Operational Order or CMS. A thriller, comedy, proof, novel, game, or screenplay can succeed brilliantly at the operation it performs. The question is whether the work fully realizes <em>its own</em> cognitive architecture — and, where a deeper operation is genuinely latent, what would be required to reach it.</p>
  </section>

  <section className={styles.experienceSection}>
   <div className={styles.sectionHeadLight}><span>EXPERIENCES WITH TORC</span><h2>What did the analysis reveal?</h2><p>The most useful feedback is not simply whether someone liked the report, but whether TORC exposed something in the work they could act on.</p></div>
   <div className={styles.experienceEmpty}>
    <div className={styles.quoteMark}>“</div>
    <p>Client experiences will appear here as the founding evaluations are completed.</p>
    <p className={styles.experienceNote}>Testimonials are published only with the client’s explicit permission. Anonymous attribution is available.</p>
   </div>
  </section>

  <section className={styles.revisionSection}>
   <span>AFTER THE REVISION</span>
   <h2>See what actually changed.</h2>
   <p>After revising from a TORC Development Analysis, clients can request a focused re-evaluation. The purpose is not to reward revision with a higher score, but to test whether the intended structural changes are actually present in the new artifact.</p>
   <div className={styles.revisionPrice}><strong>Revision Re-evaluation</strong><span>Founding price to be confirmed after the first client cycle.</span></div>
  </section>

  <section id="submit" className={styles.submitSection}>
   <div className={styles.submitIntro}>
    <span>SUBMIT YOUR ARTIFACT</span><h2>Start with the work.</h2>
    <p>Upload the artifact and tell us what you want to understand. Submission is a scope request, not an automatic purchase. You will receive confirmation of scope, price, and turnaround before an evaluation begins.</p>
    <div className={styles.submitTrust}>
     <div><b>01</b><span>Private by default</span></div>
     <div><b>02</b><span>No payment at submission</span></div>
     <div><b>03</b><span>Scope confirmed first</span></div>
    </div>
   </div>
   <SubmissionForm />
  </section>

  <section className={styles.finePrint}>
   <div><span>01</span><h3>Private by default</h3><p>Submitted work is treated as private evaluation material. Public inclusion in the TORC archive is a separate decision and is never implied by submission.</p></div>
   <div><span>02</span><h3>Artifact first</h3><p>Payment does not purchase a higher score or Operational Order. The evaluation follows the evidence preserved in the artifact.</p></div>
   <div><span>03</span><h3>No forced “upgrade”</h3><p>If moving toward a higher Order would damage the work, the analysis should say so. Development recommendations serve the artifact, not the ladder.</p></div>
  </section>
 </main>
}
