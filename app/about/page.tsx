import Link from 'next/link';
import styles from './about.module.css';

export default function About(){
  return <main className={styles.aboutPage}>
    <header className={styles.aboutHero}>
      <div className="eyebrow">ABOUT TORC</div>
      <h1>Theory Of<br/>Representational<br/>Consciousness</h1>
      <p className={styles.heroLede}>TORC was developed by G. K. Muijlaert as a theory and diagnostic framework for evaluating demonstrated cognition in completed artifacts.</p>
    </header>

    <section className={`section ${styles.originSection}`}>
      <div className="eyebrow">ORIGIN</div>
      <h2>What can the artifact itself demonstrate?</h2>
      <p>TORC began with that question. Its development led to a framework for distinguishing the cognitive operation achieved by an artifact from the magnitude and architecture of cognition demonstrated in achieving it.</p>
      <p>The completed artifact remains the evaluative unit: the work is the evidence.</p>
    </section>

    <section className={`section ${styles.bookBlock}`}>
      <div className="eyebrow">THE CANONICAL STATEMENT</div>
      <h2><i>The Age of False Depth</i></h2>
      <p className={styles.bookSubtitle}>Intelligence, Representation, and What Artifacts Actually Do</p>
      <p className={styles.bookMeta}>A Theory Of Representational Consciousness · G. K. Muijlaert</p>
      <Link className="button primary" href="/theory/book">Read the Living Edition</Link>
    </section>

    <div className={styles.closingMark}>
      <strong>TORC.world</strong>
      <span>G. K. Muijlaert</span>
    </div>
  </main>
}
