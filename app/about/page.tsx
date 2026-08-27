import Link from 'next/link';
import styles from './about.module.css';

export default function About(){return <main className={styles.aboutPage}>
<header className={styles.aboutHero}>
  <div className="eyebrow">About TORC</div>
  <h1>Origin</h1>
  <div className={styles.identity} aria-label="Theory Of Representational Consciousness">
    <span><b>T</b>heory</span>
    <span><b>O</b>f</span>
    <span><b>R</b>epresentational</span>
    <span><b>C</b>onsciousness</span>
  </div>
  <p className={styles.byline}>Developed by <strong>G. K. Muijlaert</strong>.</p>
</header>

<section className={`section prose ${styles.originSection}`}>
  <p>TORC began with a question about the difference between apparent intellectual depth and what a completed work actually demonstrates. From that question developed a framework for examining the cognitive operations preserved in artifacts across literature, philosophy, science, cinema, music, formal systems, games, and other domains.</p>
  <div className={styles.bookBlock}>
    <div className="eyebrow">Canonical theoretical statement</div>
    <h2><i>The Age of False Depth</i></h2>
    <p className={styles.bookSubtitle}>Intelligence, Representation, and What Artifacts Actually Do</p>
    <p className={styles.bookMeta}>A Theory Of Representational Consciousness · G. K. Muijlaert</p>
    <Link className="button primary" href="/theory/book">Read the Living Edition</Link>
  </div>
</section>

<section className={`section prose ${styles.compactSection}`}>
  <div className="eyebrow">The starting point</div>
  <h2>Artifact first</h2>
  <p>TORC begins with the completed work. It evaluates cognition demonstrated in the structure of an artifact rather than treating reputation, difficulty, historical importance, or presumed creator intelligence as substitutes for evidence.</p>
  <p>A TORC evaluation therefore describes <strong>what the work demonstrates</strong>, not the creator as a person.</p>
</section>

<section className={`section prose ${styles.compactSection}`}>
  <div className="eyebrow">What TORC evaluates</div>
  <h2>Two coordinates.</h2>
  <p><strong>Operational Order</strong> identifies the kind and depth of cognitive operation the artifact performs.</p>
  <p><strong>Cognitive Magnitude</strong> measures the amount and architecture of cognition demonstrated in performing it.</p>
  <p>Together they form the artifact's <strong>Demonstrated Intelligence Profile (DIP)</strong>.</p>
</section>

<section className={styles.closingMark}>
  <strong>TORC.world</strong>
  <span>Operational Order × Cognitive Magnitude</span>
</section>
</main>}
