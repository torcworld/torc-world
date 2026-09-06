import styles from '../book.module.css';

export default function Book(){
 return <main className={`${styles.bookPage} ${styles.readingPage}`}>
  <div className={styles.bookMetaBar}><span>The Age of False Depth</span><span>G. K. Muijlaert</span></div>
  <section className={`section prose auditReport ${styles.bookReader}`}>
   <p className="book-front-heading"><strong>The Age of False Depth</strong></p>
   <p className="book-kicker"><strong>Representation, Intelligence, and the Question of Genius</strong></p>
   <p className="book-kicker"><strong>Coming Soon</strong></p>
  </section>
  <div className={styles.readerBottomGround} aria-hidden="true" />
 </main>
}
