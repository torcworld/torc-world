import Link from 'next/link';
import styles from './theory.module.css';

export default function Theory(){
  return <main className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}>TORC / THE THEORY</div>
        <h1>A Theory Of<br/>Representational<br/>Consciousness</h1>
        <p className={styles.lede}>A theory of what completed representations actually demonstrate — and how to distinguish cognitive operation from its appearance.</p>
      </div>

      <div className={styles.bookStage}>
        <div className={styles.bookLabel}>THE CANONICAL LIVING EDITION</div>
        <article className={styles.book}>
          <span>THE AGE OF FALSE DEPTH</span>
          <div className={styles.bookTitle}>
            <b>The Age</b>
            <b>of False</b>
            <b>Depth</b>
          </div>
          <p>Intelligence, Representation, and What Artifacts Actually Do</p>
          <small>G. K. MUIJLAERT</small>
        </article>

        <blockquote className={styles.bookExcerpt}>
          <span className={styles.openQuote} aria-hidden="true">“</span>
          <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so? We have many words for extraordinary achievement: profound, original, complex, revolutionary, brilliant, genius.</p>
          <p>But these words often collapse very different things. A work can be enormously complicated without revealing anything new. Another can be almost embarrassingly simple once understood and nevertheless change the structure through which a problem can be seen. One thinker can display extraordinary intelligence while operating entirely inside an inherited framework.</p>
          <p>Another can notice that the framework itself is the problem. These are not merely differences of taste. Something different has happened. Eventually I found a simpler question:</p>
          <strong>What has actually been accomplished?</strong>
          <span className={styles.closeQuote} aria-hidden="true">…”</span>
        </blockquote>

        <Link className={styles.readBook} href="/theory/book">Read the full book <b>→</b></Link>
      </div>
    </header>

    <section className={styles.statement}>
      <span>THE QUESTION</span>
      <h2>What has actually been accomplished?</h2>
      <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so? TORC begins by separating demonstrated operation from the signals commonly mistaken for it: complexity, prestige, obscurity, difficulty, symbolism, recursion, or reputation.</p>
      <p className={styles.origin}>TORC was developed by G. K. Muijlaert as a theory and diagnostic framework for evaluating demonstrated cognition in completed artifacts.</p>
    </section>
  </main>
}
