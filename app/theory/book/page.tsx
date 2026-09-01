import styles from './book.module.css';

export default function BookLanding(){
 return <main className={`${styles.bookPage} ${styles.bookLanding}`}>
  <section className={styles.manifestHero}>
   <div className={styles.manifestTitle}>
    <span className={styles.eyebrow}>THE THEORY BEHIND TORC</span>
    <h1>The Age of<br/>False Depth</h1>
    <p>Intelligence, Representation, and What Artifacts Actually Do</p>
    <div className={styles.authorLine}><span className={styles.byLabel}>by</span><b>G. K. Muijlaert</b></div>
   </div>
   <div className={styles.manifestThesis}>
    <span className={styles.eyebrow}>THE CENTRAL QUESTION</span>
    <h2>What has actually been accomplished?</h2>
    <p>Complexity can resemble depth. Recursion can resemble insight. TORC begins by separating the appearance of cognition from the operation an artifact actually performs.</p>
    <a href="/theory/book/read" className={styles.readCta}>READ THE BOOK →</a>
   </div>
  </section>
  <section className={styles.bookInvitation} aria-label="The Age of False Depth book">
   <div className={styles.bookObjectWrap}>
   <a href="/theory/book/read" className={styles.visualBookLink} aria-label="Open The Age of False Depth">
    <img className={styles.visualBookCover} src="/images/torc-aged-gold-book.jpg" alt="The Age of False Depth — aged TORC gold binding" />
   </a>
   <a href="/theory/book/read" className={styles.openBookLink}>CLICK THE BOOK TO READ →</a>
   </div>
  </section>
 </main>
}
