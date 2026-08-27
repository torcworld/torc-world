import Link from 'next/link';
import styles from './about.module.css';

export default function About(){
  return <main className={styles.aboutPage}>
    <header className={styles.aboutHero}>
      <div className="eyebrow">ABOUT TORC</div>
      <h1>Origin</h1>
      <div className={styles.identity}>
        <span><b>T</b>heory</span>
        <span><b>O</b>f</span>
        <span><b>R</b>epresentational</span>
        <span><b>C</b>onsciousness</span>
      </div>
      <p className={styles.byline}>Developed by G. K. Muijlaert.</p>
    </header>

    <section className={`section ${styles.originSection}`}>
      <p>TORC began as an attempt to answer a deceptively difficult question: what can a completed artifact itself demonstrate about cognition?</p>
      <p>The theory separates the cognitive operation achieved by an artifact from the amount and architecture of cognition demonstrated in achieving it. That distinction became Operational Order and Cognitive Magnitude.</p>
      <p>As the theory was developed and tested against increasingly different artifacts, it also became something more practical: an analytical instrument capable of locating where an artifact's cognitive structure is strong, where it becomes constrained, and what evidence actually supports the depth it appears to possess.</p>
    </section>

    <section className={styles.evolution}>
      <div className={styles.evolutionHead}>
        <span>THE DEVELOPMENT OF TORC</span>
        <h2>From theory to diagnostic instrument.</h2>
      </div>
      <div className={styles.evolutionGrid}>
        <div><b>01</b><h3>Theory</h3><p>An account of demonstrated cognition as preserved in completed artifacts.</p></div>
        <div><b>02</b><h3>Framework</h3><p>Operational Order, Cognitive Magnitude, and a six-dimensional model for describing cognitive architecture.</p></div>
        <div><b>03</b><h3>Protocol</h3><p>A proprietary assessment procedure developed to apply the framework rigorously and consistently.</p></div>
        <div><b>04</b><h3>Analysis</h3><p>A way to identify operational ceilings, dimensional strengths and constraints, false depth, and meaningful developmental boundaries.</p></div>
      </div>
    </section>

    <section className={`section ${styles.bookBlock}`}>
      <div className="eyebrow">THE CANONICAL STATEMENT</div>
      <h2><i>The Age of False Depth</i></h2>
      <p className={styles.bookSubtitle}>Intelligence, Representation, and What Artifacts Actually Do</p>
      <p className={styles.bookMeta}>A Theory Of Representational Consciousness · G. K. Muijlaert</p>
      <Link className="button primary" href="/theory/book">Read the Living Edition</Link>
    </section>

    <section className={`section ${styles.compactSection}`}>
      <div className="eyebrow">ARTIFACT FIRST</div>
      <h2>The work is the evidence.</h2>
      <p>TORC evaluates demonstrated cognition in the completed artifact. It does not infer a creator's intelligence, intention, worth, or psychological state from the work.</p>
    </section>

    <section className={`section ${styles.compactSection}`}>
      <div className="eyebrow">THE TWO COORDINATES</div>
      <h2>Order is not magnitude.</h2>
      <p>Operational Order describes the kind and depth of cognitive operation demonstrated by an artifact. Cognitive Magnitude describes how much cognition is demonstrated and how that magnitude is architected across the dimensional model. Neither is a synonym for quality, truth, influence, prestige, or creator IQ.</p>
    </section>

    <section className={styles.proprietary}>
      <div>
        <span>THE EVALUATION PROTOCOL</span>
        <h2>Public framework.<br/>Proprietary machinery.</h2>
      </div>
      <div>
        <p>The visible TORC profile is not the complete evaluation procedure. TORC assessments use a substantially more detailed proprietary protocol incorporating evidentiary requirements, boundary tests, exception rules, interpretive safeguards, anti-inflation firewalls, cross-dimensional checks, and procedures for ambiguous or competing signals.</p>
        <p>The protocol exists to discipline interpretation and make conclusions harder to obtain without sufficient evidence. Its complete procedures are proprietary and are not publicly disclosed.</p>
      </div>
    </section>

    <div className={styles.closingMark}>
      <strong>TORC.world</strong>
      <span>Theory → Framework → Protocol → Analysis</span>
    </div>
  </main>
}
