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
   <div className={styles.invitationCopy}>
    <span className={styles.eyebrow}>THE LIVING EDITION</span>
    <p>The Age of False Depth develops the theory from first principles — from the distinction between apparent and demonstrated depth to a systematic account of what creative and intellectual works actually accomplish.</p>
    <a href="/theory/book/read" className={styles.openBookLink}>Read the book →</a>
   </div>
   <a href="/theory/book/read" className={styles.closedBook} aria-label="Open The Age of False Depth">
    <span className={styles.bookSpine}></span>
    <span className={styles.coverFrame}></span>
    <span className={styles.coverCrest} aria-hidden="true">
      <span className={styles.crown}>♛</span>
      <span className={styles.laurel}>❧</span>
      <span className={styles.coverT}>T</span>
      <span className={styles.laurelBottom}>⌣</span>
    </span>
    <span className={styles.coverTitle}>THE AGE OF<br/>FALSE DEPTH</span>
    <span className={styles.coverAuthor}>G. K. MUIJLAERT</span>
   </a>
  </section>
 </main>
}
