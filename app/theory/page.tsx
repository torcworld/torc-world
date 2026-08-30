import Link from 'next/link';
import styles from './theory.module.css';

export default function Theory(){
  return <main className={styles.page}>
    <section className={styles.theoryLayout}>
      <div className={styles.content}>
        <h1>Theory Of Representational Consciousness</h1>

        <Link className={styles.book} href="/theory/book" aria-label="Read The Age of False Depth">
          <span>THE AGE OF FALSE DEPTH</span>
          <div className={styles.bookTitle}>
            <b>The Age</b>
            <b>of False</b>
            <b>Depth</b>
          </div>
          <p>Intelligence, Representation, and What Artifacts Actually Do</p>
          <small>G. K. MUIJLAERT</small>
        </Link>

        <blockquote className={styles.bookExcerpt}>
          <span className={styles.openQuote} aria-hidden="true">“</span>
          <div>
            <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so? We have many words for extraordinary achievement: profound, original, complex, revolutionary, brilliant, genius.</p>
            <p>But these words often collapse very different things. A work can be enormously complicated without revealing anything new. Another can be almost embarrassingly simple once understood and nevertheless change the structure through which a problem can be seen. One thinker can display extraordinary intelligence while operating entirely inside an inherited framework.</p>
            <p>Another can notice that the framework itself is the problem. These are not merely differences of taste. Something different has happened. Eventually I found a simpler question:</p>
            <strong>What has actually been accomplished?</strong><span className={styles.closeQuote} aria-hidden="true">”</span>
          </div>
        </blockquote>

        <Link className={styles.readBook} href="/theory/book">Read the full book <b>→</b></Link>
      </div>
      <div className={styles.colorField} aria-hidden="true" />
    </section>
  </main>
}
