import './globals.css';
import './site-polish.css';

import Link from 'next/link';
import styles from './nav.module.css';

export const metadata={title:'TORC — Demonstrated Intelligence in Artifacts',description:'A framework for evaluating demonstrated intelligence in artifacts.'};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><div className="shell">
    <nav className="nav">
      <Link className={`${styles.brandLockup} brand`} href="/" aria-label="TORC home">
        <b>TORC</b>
        <span>Theory Of Representational Consciousness</span>
      </Link>

      <div className={`navlinks ${styles.navLinks}`}>
        <Link href="/artifacts">Artifacts</Link>
        <Link href="/theory">Theory</Link>
        <Link className={styles.submitLink} href="/evaluate-your-work">Submit Your Artifact</Link>
        <Link className={styles.orgLink} href="/for-organizations">Organizations</Link>
      </div>
    </nav>

    {children}
  </div></body></html>
}
