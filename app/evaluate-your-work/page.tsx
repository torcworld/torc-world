import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';
import PricingCards from './PricingCards';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.eyebrow}>SUBMIT YOUR ARTIFACT</div>
   <h1>Find out what your work actually demonstrates.</h1>
   <p>Choose what you need: a rigorous diagnosis, a development analysis, or a full diagnose–revise–re-evaluate cycle.</p>
   <a className={styles.primary} href="#pricing">Choose an analysis</a>
  </header>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}><h2>Choose how far you want to go.</h2></div>
   <PricingCards />
   <p className={styles.scopeNote}>One artifact, three levels of engagement. Scope and turnaround are confirmed before work begins; unusually long or complex artifacts may require a custom quote.</p>
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
