import styles from './submit.module.css';
import SubmissionForm from './SubmissionForm';
import PricingCards from './PricingCards';

export default function SubmitArtifactPage(){
 return <main className={styles.page}>
  <header className={styles.hero}>
   <h1><span>Your work may not need more.</span><span>It may need what is already there to do more.</span></h1>
   <p className={styles.heroTagline}>Find what your work actually does — and what is preventing its strongest architecture from becoming necessary.</p>
  </header>

  <section className={styles.process} aria-label="TORC development process">
   <div className={styles.processStep}>
    <h3>Diagnose</h3>
    <p><b>What is actually here?</b> Establish the governing architecture of the work as it exists — not what it intends to be.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Find the gap</h3>
    <p><b>What still explains too much?</b> Locate where a simpler explanation remains sufficient, or where a stronger warranted architecture remains unrealized.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Intervene</h3>
    <p><b>What is the smallest change that matters?</b> Find high-leverage interventions that make more of the existing work necessary.</p>
   </div>
   <div className={styles.processStep}>
    <h3>Test again</h3>
    <p><b>Did the work actually change?</b> A revised artifact receives no credit for following the advice. The change has to be demonstrated by the work.</p>
   </div>
  </section>

  <section id="pricing" className={styles.pricing}>
   <div className={styles.sectionHeadLight}>
    <h2>Choose how far you want to go.</h2>
    <p className={styles.pricingIntro}>Start with diagnosis, move into development, or close the loop by testing the revised work again.</p>
   </div>
   <PricingCards />
  </section>

  <section className={styles.principle} aria-label="TORC Development Principle">
   <span>THE TORC DEVELOPMENT PRINCIPLE</span>
   <h2>The best intervention makes more of the existing artifact necessary.</h2>
   <p>Several apparently different problems can be consequences of one deeper structural limitation. TORC looks for the smallest intervention capable of changing the function of material throughout the work — not the largest pile of notes.</p>
   <p className={styles.principleClose}>That is structural leverage.</p>
  </section>

  <section id="submit" className={styles.submitSection}>
   <div className={styles.submitIntro}>
    <span>START WITH YOUR WORK</span>
    <h2>Submit your artifact.</h2>
    <p>Tell us what you made and what you want to understand. You do not need to know your TORC classification or arrive with a preferred outcome.</p>
    <div className={styles.submitTrust}>
     <div><b>01</b><span>Private by default</span></div>
     <div><b>02</b><span>No payment at submission</span></div>
     <div><b>03</b><span>Scope confirmed first</span></div>
    </div>
   <div className={styles.privacyTrust}>
     <span className={styles.privacyEyebrow}>YOUR WORK REMAINS YOURS</span>
     <p className={styles.privacySummary}>Submitted artifacts are used only to perform your TORC analysis and are deleted after completion.</p>
     <details className={styles.privacyDetails}>
      <summary>Submission &amp; Privacy <span aria-hidden="true">→</span></summary>
      <div className={styles.privacyBody}>
       <h3>Submission &amp; Privacy</h3>
       <p>Your work remains yours. Submitting an artifact to TORC does not transfer any ownership, copyright, or other intellectual-property rights to TORC.</p>
       <p>Submitted materials are used only for the purpose of providing the TORC service you requested. TORC does not publish, sell, distribute, or use submitted work for promotional purposes without your explicit permission.</p>
       <p>Access to submitted materials is limited to what is necessary to perform the requested analysis. Submitted files are deleted from TORC&apos;s working records after the requested service has been completed and delivered.</p>
       <p>Where third-party technical services are required to receive, store, transmit, or process a submission, they may process data only as part of providing those services.</p>
       <p>TORC analyses, classifications, and recommendations are evaluative judgments. They do not affect the creator&apos;s ownership of the underlying work.</p>
       <p>If you would like your submitted material deleted earlier, you may contact TORC at <a href="mailto:contact@torc.world">contact@torc.world</a>.</p>
      </div>
     </details>
    </div>
   </div>
   <SubmissionForm />

  </section>
 </main>
}
