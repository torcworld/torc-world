import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';
import PricingCards from './PricingCards';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <h1><span>Find out what your work does</span><span>and what it can become.</span></h1>
   <p className={styles.heroTagline}>No generic feedback, but structural diagnosis.</p>
  </header>

  <section className={styles.process} aria-label="TORC development process">
   <div className={styles.processStep}>
    <h3>Diagnose</h3>
    <p>Establish what the artifact demonstrably does now — its governing operation and strongest genuine alternative.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Find the gap</h3>
    <p>Identify where a simpler explanation still accounts for too much, or where the strongest architecture remains under-realized.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Intervene</h3>
    <p>Prioritize the smallest structural changes capable of making more of the existing artifact necessary and causally active.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Test again</h3>
    <p>Evaluate the revised artifact again to determine what actually changed — not what was intended to change.</p>
   </div>
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
