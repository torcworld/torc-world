import styles from '../book.module.css';

export default function Book(){
 return <main className={`${styles.bookPage} ${styles.readingPage}`}>
  <section className={`section prose auditReport ${styles.bookReader}`} aria-label="Book text" />
  <div className={styles.readerBottomGround} aria-hidden="true" />
 </main>
}
