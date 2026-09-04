import Link from 'next/link';
import { artifacts } from '@/lib/artifacts';
import styles from './home.module.css';

const featured = [
  'pale-fire',
  'on-formally-undecidable-propositions',
  '2001-a-space-odyssey',
  'dependent-arising',
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
          TORC asks a simple question of a completed work: <strong>what has actually been accomplished?</strong> It makes the governing architecture of an artifact visible — what the work is doing, where its strongest intelligence resides, and what its apparent depth is actually made of.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryAction} href="/methodology">Understand TORC <span>→</span></Link>
          <Link className={styles.secondaryAction} href="/artifacts">Explore artifacts <span>→</span></Link>
        </div>
      </div>

      <aside className={styles.coordinateMark} aria-label="TORC evaluates Operational Order and Cognitive Magnitude">
        <div className={styles.markTop}><span>DEMONSTRATED<br/>INTELLIGENCE PROFILE</span><b>DIP</b></div>
        <div className={styles.axis}>
          <div className={styles.axisY}><span>OPERATIONAL ORDER</span><i/></div>
          <div className={styles.field}><i/><i/><i/><i/><i/><i/><i/><b>ORDER</b><em>×</em><strong>MAGNITUDE</strong></div>
          <div className={styles.axisX}><i/><span>COGNITIVE MAGNITUDE</span></div>
        </div>
        <div className={styles.markBottom}><span>ORDER ≠ MAGNITUDE</span><span>ARTIFACT FIRST</span></div>
      </aside>
    </section>

    <section className={styles.archive}>
      <div className={styles.sectionHead}>
        <div><span>SEE IT APPLIED</span><h2>Different works.<br/>Different operations.</h2></div>
        <div className={styles.archiveActions}>
          <Link href="/artifacts">Explore all artifacts →</Link>
          <Link href="/compare">Compare two artifacts →</Link>
        </div>
      </div>
      <div className={styles.artifactGrid}>
        {picks.map((a:any) => <Link key={a.slug} href={`/artifact/${a.slug}`} className={styles.artifactCard}>
          <div className={styles.artifactMeta}>{a.domain} · {a.year}</div>
          <h3>{a.title}</h3><p>{a.creator}</p>
          <div className={styles.profileLine}><span>{a.status === 'evaluated' ? a.torc : '—'}</span><i/><b>{a.status === 'evaluated' ? a.cms : 'Pending'}</b></div>
          <small>Open evaluation <em>→</em></small>
        </Link>)}
      </div>
    </section>

    <section className={styles.coordinates}>
      <div className={styles.sectionLead}><span>HOW TORC DISTINGUISHES</span><h2>Two questions.<br/>Two kinds of evidence.</h2></div>
      <div className={styles.coordinateGrid}>
        <Link href="/methodology#operational-order" className={styles.coordinateCard}>
          <div className={styles.coordinateLabel}>01 / PRIMARY HIERARCHY</div>
          <h3>Operational Order</h3>
          <p>Which cognitive operation governs the completed artifact? TORC identifies the highest operation the work actually requires — independent of prestige, difficulty or subject matter.</p>
          <div className={styles.microGraphic}><span>1</span><i/><span>2</span><i/><span>3a</span><i/><span>3b</span><i/><span>3c</span><i/><span>G</span></div>
          <b className={styles.cardAction}>Explore Operational Order <span>→</span></b>
        </Link>
        <Link href="/methodology#dimensions" className={styles.coordinateCard}>
          <div className={styles.coordinateLabel}>02 / MAGNITUDE</div>
          <h3>Cognitive Magnitude</h3>
          <p>How much structured cognition does the artifact demonstrate within that operation? Six dimensions describe its magnitude without reducing complexity to a single impression.</p>
          <div className={styles.dimensionMini}>{['RL','AD','CD','ID','IC','GR'].map((d,i)=><div key={d}><span>{d}</span><i style={{width:`${46+i*8}%`}}/></div>)}</div>
          <b className={styles.cardAction}>Explore Cognitive Magnitude <span>→</span></b>
        </Link>
      </div>
    </section>

    <section className={styles.theoryCompact}>
      <Link className={styles.compactBook} href="/theory/book">
        <span>THE AGE OF FALSE DEPTH</span>
        <strong>The Age<br/>of False<br/>Depth</strong>
        <p>Intelligence, Representation, and What Artifacts Actually Do</p>
        <small>Read the Living Edition →</small>
      </Link>
      <Link className={styles.theoryCopyLink} href="/theory/book">
        <span>THE THEORY</span>
        <h2>The appearance of depth is not the same as a deep operation.</h2>
        <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so?</p>
        <b>Enter the theory <em>→</em></b>
      </Link>
    </section>

    <section className={styles.twoDoors}>
      <Link href="/evaluate-your-work#pricing" className={styles.creatorDoor}>
        <span>FOR CREATORS</span><h2>See your own work differently.</h2>
        <p>Evaluation, structural development and revision verification for original artifacts.</p><b className={styles.doorAction}>Submit your artifact <span>→</span></b>
      </Link>
      <Link href="/for-organizations" className={styles.orgDoor}>
        <span>FOR ORGANIZATIONS</span><h2>See what a body of work reveals.</h2>
        <p>Find recurring achievements, structural bottlenecks and meaningful exceptions across a corpus.</p><b className={styles.doorAction}>Explore TORC for organizations <span>→</span></b>
      </Link>
    </section>
  </main>;
}
