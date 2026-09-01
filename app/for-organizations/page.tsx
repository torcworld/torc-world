import styles from './organizations.module.css';

const applications = [
  {
    no: '01',
    title: 'Corpus Intelligence',
    text: 'See what recurs, what diverges, where structural limits cluster, and which works change the picture across a slate, catalogue, or body of work.',
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
            See what repeats, what diverges, where structural bottlenecks recur, and which works deserve scarce human attention across a slate, catalogue, submission pool, or recurring stream.
          </p>
          <a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Discuss an institutional use case <span>→</span>
          </a>
        </div>

        <div className={styles.heroThesis}>
          <span>THE INSTITUTIONAL PREMISE</span>
          <strong>50 artifacts should produce more than 50 reports.</strong>
          <p>
            At scale, individual diagnoses become something more useful: a view of the corpus itself — what it repeatedly achieves, where it repeatedly stops, and which exceptions change the picture.
          </p>
        </div>
      </header>

      <section className={styles.standardBar}>
        <span>ONE CORPUS</span><i/>
        <span>REPEATING PATTERNS</span><i/>
        <span>MEANINGFUL EXCEPTIONS</span><i/>
        <span>BETTER-PLACED ATTENTION</span>
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
            <b>DISCOVER</b>
            <p>Find recurring achievements, structural bottlenecks, boundary cases, and meaningful exceptions.</p>
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
            <h2>Patterns no single<br/>report can show.</h2>
          </div>
          <p>
            The individual evaluation tells you what a work is doing. At scale, TORC reveals what the body of work is doing.
          </p>
        </div>

        <div className={styles.signalMatrix}>
          <article>
            <span>01</span>
            <strong>What the corpus repeatedly achieves</strong>
            <p>See which kinds of structural achievement recur across the body of work — and where meaningful boundary cases cluster.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Where the work repeatedly stops</strong>
            <p>Identify recurring structural constraints and bottlenecks that may be invisible when each artifact is considered alone.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Which differences actually matter</strong>
            <p>Distinguish superficial variation from meaningful differences in cognitive architecture, constraint, inference, integration and reach.</p>
          </article>
          <article>
            <span>04</span>
            <strong>What deserves deeper attention</strong>
            <p>Surface works that diverge meaningfully from the corpus so scarce editorial, curatorial, acquisition or development attention can be placed deliberately.</p>
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
