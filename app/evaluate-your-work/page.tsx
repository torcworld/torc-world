import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';
import PricingCards from './PricingCards';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.eyebrow}>SUBMIT YOUR ARTIFACT</div>
   <h1>Find out what your work does — and what it can become.</h1>
  </header>

  <section className={styles.process} aria-label="TORC development process">
   <div className={styles.processStep}><b>01</b><span>Diagnose</span></div>
   <div className={styles.processStep}><b>02</b><span>Find the gap</span></div>
   <div className={styles.processStep}><b>03</b><span>Intervene</span></div>
   <div className={styles.processStep}><b>04</b><span>Test again</span></div>
  </section>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}><h2>Choose how far you want to go.</h2></div>
   <PricingCards />
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
