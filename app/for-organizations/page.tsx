import styles from './organizations.module.css';

const applications = [
  {
    no: '01',
    title: 'Portfolio Intelligence',
    text: 'See concentrations, gaps, boundary cases, and outliers across a slate, catalogue, or body of work.',
  },
  {
    no: '02',
    title: 'Submission Intelligence',
    text: 'Evaluate broadly before scarce editorial, curatorial, or acquisition attention is allocated.',
  },
  {
    no: '03',
    title: 'Development Programs',
    text: 'Identify where selected works structurally stop and where deeper development attention can materially change them.',
  },
  {
    no: '04',
    title: 'Comparative Research',
    text: 'Compare creators, cohorts, media, periods, or corpora without collapsing distinct cognitive coordinates into one ranking.',
  },
];


export default function Organizations(){
  return (
    <main className={styles.page}>
      <header className={styles.newHero}>
        <div className={styles.heroStatement}>
          <div className={styles.eyebrow}>TORC FOR ORGANIZATIONS</div>
          <h1>See what a body of work<br/>is actually doing.</h1>
          <p>
            Evaluate cognitive architecture across a slate, catalogue, submission pool,
            or recurring stream — using one consistent analytical standard.
          </p>
          <a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Discuss an institutional use case <span>→</span>
          </a>
        </div>

        <div className={styles.heroThesis}>
          <span>THE INSTITUTIONAL PREMISE</span>
          <strong>50 artifacts should produce more than 50 reports.</strong>
          <p>
            At scale, individual evaluations become a view of the corpus:
            where it operates, what repeats, what diverges, and what deserves deeper attention.
          </p>
        </div>
      </header>

      <section className={styles.standardBar}>
        <span>ONE CORPUS</span><i/>
        <span>ONE EVALUATIVE STANDARD</span><i/>
        <span>COMPARABLE PROFILES</span><i/>
        <span>CORPUS-LEVEL INTELLIGENCE</span>
      </section>

      <section className={styles.system}>
        <div className={styles.systemIntro}>
          <div className={styles.eyebrow}>FROM VOLUME TO JUDGMENT</div>
          <h2>Evaluate broadly.<br/>Investigate selectively.</h2>
          <p>
            Evaluation becomes a disciplined way to allocate human attention —
            not an automated substitute for it.
          </p>
        </div>

        <div className={styles.systemFlow} aria-label="TORC institutional workflow">
          <div className={styles.flowNode}>
            <span>01</span>
            <b>CORPUS</b>
            <p>A slate, catalogue, submission pool, or recurring stream.</p>
          </div>
          <div className={styles.flowLink}>→</div>
          <div className={styles.flowNode}>
            <span>02</span>
            <b>IDENTIFY</b>
            <p>Profiles, distributions, bottlenecks, boundaries, and outliers.</p>
          </div>
          <div className={styles.flowLink}>→</div>
          <div className={styles.flowNode}>
            <span>03</span>
            <b>INVESTIGATE</b>
            <p>Direct deeper analysis toward the works that warrant it.</p>
          </div>
          <div className={styles.flowLink}>→</div>
          <div className={styles.flowNode}>
            <span>04</span>
            <b>DEVELOP</b>
            <p>Concentrate development resources where structural change can propagate.</p>
          </div>
        </div>

        <div className={styles.systemRule}>
          <span>TORC IS NOT AN AUTOMATED GREENLIGHT.</span>

        </div>
      </section>

      <section className={styles.visibility}>
        <div className={styles.visibilityHead}>
          <div>
            <div className={styles.eyebrow}>WHAT BECOMES VISIBLE AT SCALE</div>
            <h2>One corpus.<br/>A clearer view.</h2>
          </div>
          <p>
            A common standard makes relationships visible that isolated reports cannot.
          </p>
        </div>

        <div className={styles.signalMatrix}>
          <article>
            <span>01</span>
            <strong>Operational distribution</strong>
            <p>Where the corpus operates, including meaningful concentrations and boundary cases.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Cognitive magnitude</strong>
            <p>How much cognition is carried without confusing magnitude with Operational Order.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Dimensional architecture</strong>
            <p>Recurring strengths, weaknesses, and bottlenecks across RL · AD · CD · ID · IC · GR.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Outliers & exceptions</strong>
            <p>Works that diverge meaningfully from the corpus and warrant closer analytical attention.</p>
          </article>
        </div>
      </section>

      <section className={styles.applicationsNew}>
        <div className={styles.applicationHead}>
          <div className={styles.eyebrow}>INSTITUTIONAL APPLICATIONS</div>
          <h2>Different problems.<br/>One analytical language.</h2>
        </div>

        <div className={styles.applicationList}>
          {applications.map((item) => (
            <article key={item.no}>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.boundary}>
        <div>
          <div className={styles.eyebrow}>THE BOUNDARY</div>
          <h2>Access to TORC.<br/>Not transfer of TORC.</h2>
        </div>
        <div className={styles.boundaryCopy}>
          <p>
            Organizations receive the agreed evaluations, evidence, comparative reporting,
            and analytical outputs.
          </p>
          <p>
            <strong>The TORC evaluation methodology remains proprietary and is not transferred as part of an engagement.</strong>
            {' '}Internal gates, adjudication procedures, thresholds, evaluator instructions,
            and other proprietary evaluation machinery remain within TORC.
          </p>
        </div>
      </section>

      <section className={styles.finalContact}>
        <div>
          <div className={styles.eyebrow}>INSTITUTIONAL INQUIRY</div>
          <h2>Start with the corpus.</h2>
          <p>
            Tell TORC what you are evaluating, the approximate volume, whether the program
            is one-off or recurring, and what decision or development problem it needs to support.
          </p>
        </div>
        <div className={styles.contactCard}>
          <span>USEFUL TO INCLUDE</span>
          <ul>
            <li>Artifact type or corpus</li>
            <li>Approximate volume and frequency</li>
            <li>Selection, development, research, or allocation purpose</li>
            <li>Desired reporting and comparison depth</li>
          </ul>
          <a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Discuss an institutional use case <b>→</b>
          </a>
          <small>contact@torc.world</small>
        </div>
      </section>
    </main>
  );
}
