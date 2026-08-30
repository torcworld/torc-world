'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './nav.module.css';

export default function TorcNav(){
  const pathname=usePathname();
  const active=(href:string)=>pathname===href||pathname.startsWith(href+'/');
  return <nav className={`nav ${styles.navRoot}`}>
    <Link className={`${styles.brandLockup} brand`} href="/" aria-label="TORC home">
      <b>TORC</b>
      <span>Theory Of Representational Consciousness</span>
    </Link>
    <div className={`navlinks ${styles.navLinks}`}>
      <Link className={`${styles.mainLink} ${active('/artifacts')?styles.activeLink:''}`} aria-current={active('/artifacts')?'page':undefined} href="/artifacts">Artifacts</Link>
      <Link className={`${styles.mainLink} ${active('/theory')?styles.activeLink:''}`} aria-current={active('/theory')?'page':undefined} href="/theory">Theory</Link>
      <Link className={`${styles.submitLink} ${active('/evaluate-your-work')?styles.activeLink:''}`} aria-current={active('/evaluate-your-work')?'page':undefined} href="/evaluate-your-work">Submit Your Artifact</Link>
      <Link className={styles.orgLink} href="/for-organizations">Organizations</Link>
    </div>
  </nav>
}
