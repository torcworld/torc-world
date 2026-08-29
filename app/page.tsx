import Link from 'next/link';
import { artifacts } from '@/lib/artifacts';
import styles from './home.module.css';

const featured = [
  'pale-fire',
  'on-formally-undecidable-propositions-of-principia-mathematica-and-related-systems-i',
  '2001-a-space-odyssey',
  'the-art-of-fugue',
  'kasparov-vs-topalov-wijk-aan-zee-1999',
  'fountain',
];

export default function Home() {
  const picks = featured.map(slug => artifacts.find(a => a.slug === slug)).filter(Boolean);

  return <main className={styles.home}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.kicker}>THEORY OF REPRESENTATIONAL CONSCIOUSNESS</div>
        <h1>TORC</h1>
        <p className={styles.tagline}>Demonstrated intelligence in artifacts.</p>
        <p className={styles.intro}>
          TORC evaluates completed works by separating two questions that are often confused:
          <strong> what kind of cognitive operation does the artifact actually perform?</strong> And
          <strong> how much structured cognition does it demonstrate in performing it?</strong>
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.darkAction} href="/artifacts">Explore the archive</Link>
          <Link className={styles.textAction} href="/theory">Enter the theory <span>→</span></Link>
        </div>
      </div>

      <aside className={styles.coordinateMark} aria-label="TORC evaluates Operational Order and Cognitive Magnitude">
        <div className={styles.markTop}>
          <span>DEMONSTRATED<br/>INTELLIGENCE PROFILE</span>
          <b>DIP</b>
        </div>
        <div className={styles.axis}>
          <div className={styles.axisY}><span>OPERATIONAL ORDER</span><i/></div>
          <div className={styles.field}>
            <i/><i/><i/><i/><i/><i/><i/>
            <b>ORDER</b>
            <em>×</em>
            <strong>MAGNITUDE</strong>
          </div>
          <div className={styles.axisX}><i/><span>COGNITIVE MAGNITUDE</span></div>
        </div>
        <div className={styles.markBottom}>
          <span>ORDER ≠ MAGNITUDE</span>
          <span>ARTIFACT FIRST</span>
        </div>
      </aside>
    </section>

    <section className={styles.routeStrip}>
      <Link href="/artifacts"><span>01</span><b>Archive</b><small>See TORC applied to completed works.</small><em>→</em></Link>
      <Link href="/compare"><span>02</span><b>Compare</b><small>Put two demonstrated intelligence profiles side by side.</small><em>→</em></Link>
      <Link href="/theory"><span>03</span><b>Theory</b><small>Understand the framework and read the living edition.</small><em>→</em></Link>
    </section>

    <section className={styles.archive}>
      <div className={styles.sectionHead}>
        <div><span>FROM THE ARCHIVE</span><h2>See the framework at work.</h2></div>
        <Link href="/artifacts">Explore all artifacts →</Link>
      </div>
      <div className={styles.artifactGrid}>
        {picks.map((a:any) => <Link key={a.slug} href={`/artifact/${a.slug}`} className={styles.artifactCard}>
          <div className={styles.artifactMeta}>{a.domain} · {a.year}</div>
          <h3>{a.title}</h3>
          <p>{a.creator}</p>
          <div className={styles.profileLine}>
            <span>{a.status === 'evaluated' ? a.torc : '—'}</span>
            <i/>
            <b>{a.status === 'evaluated' ? a.cms : 'Pending'}</b>
          </div>
          <small>Open evaluation <em>→</em></small>
        </Link>)}
      </div>
    </section>

    <section className={styles.twoDoors}>
      <Link href="/evaluate-your-work" className={styles.creatorDoor}>
        <span>FOR CREATORS</span>
        <h2>What does your work actually demonstrate?</h2>
        <p>Independent TORC evaluation and development analysis for original artifacts.</p>
        <b>Submit your artifact →</b>
      </Link>
      <Link href="/for-organizations" className={styles.orgDoor}>
        <span>FOR ORGANIZATIONS</span>
        <h2>Evaluate cognition at scale.</h2>
        <p>Standardized evaluation, comparative intelligence, portfolio analysis, and custom institutional applications.</p>
        <b>Explore institutional use →</b>
      </Link>
    </section>
  </main>;
}
