'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './nav.module.css';

export default function TorcNav(){
  const pathname=usePathname();
  const activeStyle={background:'#c7aa76',borderColor:'#8f744e',color:'#171714'};
  const active=(href:string)=>pathname===href||pathname.startsWith(href+'/');
  return <nav className="nav">
    <Link className={`${styles.brandLockup} brand`} href="/" aria-label="TORC home">
      <b>TORC</b>
      <span>Theory Of Representational Consciousness</span>
    </Link>
    <div className={`navlinks ${styles.navLinks}`}>
      <Link className={styles.mainLink} style={active('/artifacts')?activeStyle:undefined} aria-current={active('/artifacts')?'page':undefined} href="/artifacts">Artifacts</Link>
      <Link className={styles.mainLink} style={active('/theory')?activeStyle:undefined} aria-current={active('/theory')?'page':undefined} href="/theory">Theory</Link>
      <Link className={styles.submitLink} style={active('/evaluate-your-work')?activeStyle:undefined} aria-current={active('/evaluate-your-work')?'page':undefined} href="/evaluate-your-work">Submit Your Artifact</Link>
      <Link className={styles.orgLink} href="/for-organizations">Organizations</Link>
    </div>
  </nav>
}
