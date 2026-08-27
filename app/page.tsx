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

    <section className={styles.coordinates}>
      <div className={styles.sectionLead}>
        <span>TWO COORDINATES</span>
        <h2>Different questions.<br/>Different evidence.</h2>
      </div>
      <div className={styles.coordinateGrid}>
        <article>
          <div className={styles.coordinateLabel}>01 / CATEGORICAL</div>
          <h3>Operational Order</h3>
          <p>What does the artifact actually do? TORC identifies the highest cognitive operation required to explain the work — not its prestige, difficulty, reputation, or subject matter.</p>
          <div className={styles.microGraphic}>
            <span>1</span><i/><span>2</span><i/><span>3a</span><i/><span>3b</span><i/><span>3c</span><i/><span>G</span>
          </div>
          <Link href="/theory">Understand Operational Order <b>→</b></Link>
        </article>
        <article>
          <div className={styles.coordinateLabel}>02 / MAGNITUDE</div>
          <h3>Cognitive Magnitude</h3>
          <p>How much structured cognition does the artifact demonstrate while performing that operation? Magnitude is distributed across six independent dimensions rather than treated as a vague impression of complexity.</p>
          <div className={styles.dimensionMini}>
            {['RL','AD','CD','ID','IC','GR'].map((d,i)=><div key={d}><span>{d}</span><i style={{width:`${46+i*8}%`}}/></div>)}
          </div>
          <Link href="/theory">Understand Cognitive Magnitude <b>→</b></Link>
        </article>
      </div>
      <p className={styles.principle}>A higher score does not automatically mean a higher operation. A higher operation does not automatically mean a higher score. Neither is a synonym for quality, truth, influence, or creator intelligence.</p>
    </section>

    <section className={styles.instrument}>
      <div className={styles.instrumentIntro}>
        <span>FROM THEORY TO INSTRUMENT</span>
        <h2>The profile is the result.<br/>Not the procedure.</h2>
        <p>TORC began as a theory of demonstrated cognition in artifacts. Developing that theory into a usable assessment method required something more: a disciplined way to interrogate the artifact, test competing interpretations, and locate exactly where its cognitive structure holds — or stops.</p>
      </div>

      <div className={styles.instrumentFlow}>
        <div><b>01</b><span>THEORY</span><p>What demonstrated cognition in an artifact means.</p></div>
        <i>→</i>
        <div><b>02</b><span>FRAMEWORK</span><p>Operational Order, Cognitive Magnitude, and dimensional architecture.</p></div>
        <i>→</i>
        <div className={styles.protocolStep}><b>03</b><span>PROTOCOL</span><p>A proprietary evaluation procedure governing how the evidence is tested.</p></div>
        <i>→</i>
        <div><b>04</b><span>DIAGNOSIS</span><p>What the artifact does, where cognition resides, and where it becomes constrained.</p></div>
      </div>

      <div className={styles.protocolPanel}>
        <div>
          <span>THE TORC EVALUATION PROTOCOL</span>
          <h3>A framework is only as reliable as the procedure used to apply it.</h3>
        </div>
        <div>
          <p>Operational Order and the six-dimensional Cognitive Magnitude model are the visible architecture of TORC. Evaluations are conducted through a substantially more detailed proprietary protocol developed alongside the theory.</p>
          <p>The protocol incorporates evidentiary requirements, boundary tests, exception rules, interpretive safeguards, anti-inflation firewalls, cross-dimensional checks, and procedures for ambiguous or competing signals. These controls are designed to make TORC conclusions harder to obtain without sufficient evidence.</p>
          <small>The complete TORC Evaluation Protocol is proprietary and is not publicly disclosed.</small>
        </div>
      </div>

      <div className={styles.sixLens}>
        <div>
          <span>SIX DIMENSIONS · MULTIPLE LENSES</span>
          <h3>Not six sliders. Six places to look.</h3>
          <p>The dimensional model helps locate the architecture beneath the aggregate magnitude: where cognition is concentrated, where it is thin, where dimensions reinforce one another, and where an apparent achievement is not supported by the underlying structure.</p>
        </div>
        <div className={styles.lensGraphic}>
          {['RL','AD','CD','ID','IC','GR'].map((d,i)=><div key={d}><b>{d}</b><i style={{height:`${42+i*8}%`}}/><span>{String(i+1).padStart(2,'0')}</span></div>)}
        </div>
      </div>
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

    <section className={styles.theoryBand}>
      <div className={styles.bookMark}>
        <span>THE LIVING EDITION</span>
        <b>THE<br/>AGE OF<br/>FALSE<br/>DEPTH</b>
        <small>G. K. MUIJLAERT</small>
      </div>
      <div className={styles.theoryCopy}>
        <span>THE THEORY BEHIND TORC</span>
        <h2>The appearance of depth is not the same as a deep operation.</h2>
        <p>TORC grows out of a broader theory of representation, intelligence, and what completed artifacts preserve as evidence. The canonical statement is maintained as a living edition on TORC.world.</p>
        <div className={styles.theoryActions}>
          <Link href="/theory">Explore the theory</Link>
          <Link href="/theory/book">Read the Living Edition <b>→</b></Link>
        </div>
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
