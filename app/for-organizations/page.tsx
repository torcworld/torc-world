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

      <section className={styles.corpusSystem} aria-labelledby="corpus-system-title">
        <div className={styles.corpusSystemHead}>
          <div>
            <div className={styles.corpusSystemEyebrow}>THE CORPUS INTELLIGENCE SYSTEM</div>
            <h2 id="corpus-system-title">From volume to<br/>actionable intelligence.</h2>
          </div>
          <p>
            Evaluate the corpus as one field. Reveal the pattern. Investigate the differences that matter. Then direct human attention where structural change can actually matter.
          </p>
        </div>

        <div className={styles.corpusMap} aria-label="Corpus to actionable intelligence">
          <div className={styles.corpusInput}>
            <span className={styles.mapLabel}>CORPUS</span>
            <b>50 artifacts</b>
            <div className={styles.artifactCloud} aria-hidden="true">
              {Array.from({length: 32}).map((_,i)=><i key={i}/>) }
            </div>
          </div>

          <div className={styles.mapArrow} aria-hidden="true">→</div>

          <div className={styles.visibilityCore}>
            <span>WHAT BECOMES VISIBLE</span>
            <div className={styles.ringOuter} aria-hidden="true"/>
            <div className={styles.ringInner} aria-hidden="true"/>
            <div className={styles.coreTerms}>
              <b>PATTERNS</b>
              <b>OUTLIERS</b>
              <b>BOTTLENECKS</b>
              <b>OPPORTUNITIES</b>
            </div>
          </div>

          <div className={styles.mapArrow} aria-hidden="true">→</div>

          <div className={styles.actionOutput}>
            <span className={styles.mapLabel}>ACTIONABLE INTELLIGENCE</span>
            <div className={styles.actionTree}>
              <i aria-hidden="true"/>
              <div><span>EDITORIAL</span><span>DEVELOPMENT</span><span>SELECTION</span><span>RESEARCH</span></div>
            </div>
          </div>
        </div>

        <div className={styles.corpusStages} aria-label="TORC institutional workflow">
          <article><span>01</span><b>CORPUS</b><p>Establish the field.</p></article>
          <article><span>02</span><b>DISCOVER</b><p>Reveal the pattern.</p></article>
          <article><span>03</span><b>INVESTIGATE</b><p>Explain the difference.</p></article>
          <article><span>04</span><b>DEVELOP</b><p>Act on structure.</p></article>
        </div>

        <div className={styles.corpusPrinciple}>
          <strong>TORC IS NOT AN AUTOMATED GREENLIGHT.</strong>
          <span>It is a system for placing human judgment more deliberately.</span>
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
