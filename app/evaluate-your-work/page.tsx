import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';
import PricingCards from './PricingCards';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <h1><span>Your work may not need more.</span><span>It may need what is already there to do more.</span></h1>
   <p className={styles.heroTagline}>You may already know what your work is about. TORC shows you what it is actually doing — and what prevents its strongest architecture from becoming necessary.</p>
  </header>

  <section className={styles.process} aria-label="TORC development process">
   <div className={styles.processStep}>
    <h3>See</h3>
    <p><b>What have I actually built?</b> Diagnose the governing architecture, its strongest achievements and the central limitation holding it back.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Find the gap</h3>
    <p><b>What still explains too much?</b> Locate where a simpler explanation remains sufficient, or where stronger existing material has not yet become structurally necessary.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Intervene</h3>
    <p><b>What is the smallest change that matters?</b> Design a few high-leverage interventions that change the function of material across the whole work.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Verify</h3>
    <p><b>Did the revision actually work?</b> Re-evaluate the revised artifact without assuming the advice succeeded. The work itself has to demonstrate the change.</p>
   </div>
  </section>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}>
    <h2>Choose how far you want to go.</h2>
    <p className={styles.pricingIntro}>Three different moments in one development process: <b>see the work</b>, <b>intervene in the work</b>, or <b>verify the revision</b>. Start where you need to start.</p>
   </div>
   <PricingCards />
  </section>

  <section className={styles.principle} aria-label="TORC Development Principle">
   <span>THE TORC DEVELOPMENT PRINCIPLE</span>
   <h2>The best intervention makes more of the existing artifact necessary.</h2>
   <p>Several apparently different problems can be consequences of one deeper structural limitation. Evaluation identifies that limitation. Development looks for the smallest intervention capable of changing the function of material throughout the work — not the largest pile of notes.</p>
   <p className={styles.principleClose}>See first. Intervene second. Verify what changed.</p>
  </section>

  <section className={styles.creditBand}>
   <div>
    <span>NEW TO TORC?</span>
    <h2>Start by seeing the work clearly.</h2>
   </div>
   <p>The €195 Evaluation stands on its own: a complete diagnosis of what your work is doing, where its architecture is strongest, and the central gap limiting it. If that diagnosis reveals something you want to develop further, upgrade to TORC Development within 30 days and the full €195 fee is credited.</p>
  </section>

  <section id="submit" className={styles.submitSection}>
   <div className={styles.submitIntro}>
    <span>START WITH YOUR WORK</span>
    <h2>Submit your artifact.</h2>
    <p>Tell us what you made and what you want to understand. You do not need to know TORC terminology, arrive with a preferred classification, or already know what needs fixing.</p>
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
