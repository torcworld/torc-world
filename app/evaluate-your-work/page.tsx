import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.eyebrow}>SUBMIT YOUR ARTIFACT</div>
   <h1>Find out what your work actually demonstrates.</h1>
   <p>Choose the depth of analysis you want, submit the artifact, and TORC will assess the work itself: its Operational Order, Cognitive Magnitude, and the structural boundary that matters.</p>
   <a className={styles.primary} href="#pricing">Choose an analysis</a>
  </header>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}><h2>Choose how far you want to go.</h2></div>
   <div className={styles.priceGrid}>
    <article className={styles.priceCard}>
     <div><span className={styles.package}>TORC Evaluation</span><div className={styles.price}>€149</div><p className={styles.priceLead}>A complete TORC profile of the artifact as it stands.</p></div>
     <ul><li>Operational Order</li><li>Six-dimensional cognitive profile</li><li>Cognitive Magnitude Score + DIP</li><li>Boundary analysis</li><li>Principal strengths and limitations</li></ul>
     <a href="?package=evaluation#submit">Choose Evaluation <span>→</span></a>
    </article>

    <article className={`${styles.priceCard} ${styles.featured}`}>
     <div className={styles.recommended}>RECOMMENDED · FOUNDING RATE</div>
     <div><span className={styles.package}>TORC Development</span><div className={styles.price}>€349 <small>standard €495</small></div><p className={styles.priceLead}>Where the work stops — and what could make it structurally stronger.</p></div>
     <ul><li>Everything in TORC Evaluation</li><li>Operational-ceiling diagnosis</li><li>Next-Order boundary analysis</li><li>Cognitive Magnitude development</li><li>False-depth audit</li><li>Prioritized structural opportunities</li></ul>
     <a href="?package=development#submit">Choose Development <span>→</span></a>
    </article>

    <article className={styles.priceCard}>
     <div><span className={styles.package}>TORC Deep Analysis</span><div className={styles.price}>from €695</div><p className={styles.priceLead}>A deeper examination of the artifact as a complete cognitive architecture.</p></div>
     <ul><li>Everything in TORC Development</li><li>Section / sequence-level analysis</li><li>Competing interpretations tested</li><li>Order × Magnitude interaction</li><li>Extended revision priorities</li><li>Substantial final report</li></ul>
     <a href="?package=deep#submit">Choose Deep Analysis <span>→</span></a>
    </article>
   </div>
   <p className={styles.scopeNote}>Final scope, price, and turnaround are confirmed before any work begins. Very long or unusually complex artifacts may require a custom quote.</p>
  </section>

  <section className={styles.example}>
   <blockquote>“Your work reaches Level 2. What specifically prevents the transition to 3a?”</blockquote>
   <p>TORC isolates the operation that is present, the one that is missing, and the structural change that would actually matter — rather than prescribing generic “depth.”</p>
  </section>

  <section id="submit" className={styles.submitSection}>
   <div className={styles.submitIntro}>
    <span>START WITH YOUR WORK</span>
    <h2>Submit your artifact.</h2>
    <p>Upload the work and tell us what you want to understand. No payment is taken here; scope, price, and turnaround are confirmed first.</p>
    <div className={styles.submitTrust}>
     <div><b>01</b><span>Private by default</span></div>
     <div><b>02</b><span>No payment at submission</span></div>
     <div><b>03</b><span>Scope confirmed first</span></div>
    </div>
   </div>
   <SubmissionForm />
  </section>
 </main>
}
