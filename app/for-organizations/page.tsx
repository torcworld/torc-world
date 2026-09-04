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
        </div>

        <div className={styles.heroApplications}>
          <span>INSTITUTIONAL APPLICATIONS</span>
          <div className={styles.heroApplicationList}>
            {applications.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.corpusSystem} aria-labelledby="corpus-system-title">
        <div className={styles.corpusTransitionBand}>From volume to actionable intelligence.</div>

        <div className={styles.corpusVisualBody}>
        <div className={styles.intelligenceDiagram} aria-label="Corpus intelligence system">
          <div className={styles.diagramCorpus}>
            <span className={styles.diagramLabel}>CORPUS</span>
            <strong>50 ARTIFACTS</strong>
            <div className={styles.artifactField} aria-hidden="true">
              {Array.from({length: 42}).map((_,i)=><i key={i}/>)}
            </div>
          </div>

          <div className={styles.diagramConnector} aria-hidden="true">
            <i/><i/><i/>
          </div>

          <div className={styles.diagramCore}>
<div className={styles.coreCircle}>
              <b>PATTERNS</b>
              <b>OUTLIERS</b>
              <b>BOTTLENECKS</b>
              <b>OPPORTUNITIES</b>
            </div>
          </div>

          <div className={styles.branchField} aria-hidden="true">
            <i className={styles.branchOne}/><i className={styles.branchTwo}/>
            <i className={styles.branchThree}/><i className={styles.branchFour}/>
          </div>

          <div className={styles.diagramOutputs}>
            <span className={styles.diagramLabel}>ACTIONABLE INTELLIGENCE</span>
            <div><b>EDITORIAL</b><b>DEVELOPMENT</b><b>SELECTION</b><b>RESEARCH</b></div>
          </div>
        </div>

        </div>
        <div className={styles.corpusStatement}>
          <strong>
            <span>50 artifacts</span>
            <span>should produce more than</span>
            <span>50 reports.</span>
          </strong>
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
            Contact TORC <b>→</b>
          </a>
        </div>
      </section>

      <aside className={styles.proprietaryNote} aria-label="TORC methodology notice">
        <p>
          <strong>The TORC evaluation methodology remains proprietary and is not transferred as part of an engagement.</strong>
          {' '}Internal gates, adjudication procedures, thresholds, evaluator instructions,
          and other proprietary evaluation machinery remain within TORC.
        </p>
      </aside>
    </main>
  );
}
