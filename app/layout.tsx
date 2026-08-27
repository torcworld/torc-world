import './globals.css';
import Link from 'next/link';
import styles from './nav.module.css';

export const metadata={title:'TORC — Demonstrated Intelligence in Artifacts',description:'A framework for evaluating demonstrated intelligence in artifacts.'};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><div className="shell">
  <nav className="nav">
   <Link className="brand" href="/">TORC</Link>
   <div className={`navlinks ${styles.navLinks}`}>
    <Link href="/artifacts">Artifacts</Link>
    <Link href="/theory">Theory</Link>
    <Link href="/compare">Compare</Link>
    <Link href="/for-organizations">Organizations</Link>
    <Link href="/about">About</Link>
    <Link className={styles.submitLink} href="/evaluate-your-work">Submit Your Artifact</Link>
   </div>
  </nav>
  {children}
  <footer>TORC.world · Operational Order × Cognitive Magnitude · Order ≠ magnitude ≠ quality ≠ truth ≠ influence ≠ creator IQ.</footer>
 </div></body></html>
}
