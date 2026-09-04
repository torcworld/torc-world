'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './nav.module.css';

export default function TorcNav(){
  const pathname=usePathname();
  const active=(href:string)=>pathname===href||pathname.startsWith(href+'/');

  return <nav className={styles.navRoot} aria-label="Primary navigation">
    <Link className={styles.brandLockup} href="/" aria-label="TORC home">
      <b>TORC</b>
      <span>Theory Of Representational Consciousness</span>
    </Link>
    <div className={styles.navLinks}>
      <Link className={`${styles.mainLink} ${active('/artifacts')?styles.activeLink:''}`} aria-current={active('/artifacts')?'page':undefined} href="/artifacts">Artifacts</Link>
      <Link className={`${styles.mainLink} ${active('/theory')?styles.activeLink:''}`} aria-current={active('/theory')?'page':undefined} href="/theory">Theory</Link>
      <Link className={`${styles.submitLink} ${active('/evaluate-your-work')?styles.activeLink:''}`} aria-current={active('/evaluate-your-work')?'page':undefined} href="/evaluate-your-work#pricing">Submit Your Artifact</Link>
      <Link className={`${styles.orgLink} ${active('/for-organizations')?styles.orgActive:''}`} aria-current={active('/for-organizations')?'page':undefined} href="/for-organizations">Organizations</Link>
    </div>
  </nav>;
}
