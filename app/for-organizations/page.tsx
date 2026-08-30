import styles from './organizations.module.css';

const useCases = [
  {
    no: '01',
    title: 'Portfolio & high-volume evaluation',
    short: 'One evaluative language across a slate, catalogue, submission pool, or recurring stream of work.',
    example: 'Example · 250 submissions → standardized TORC profiles → comparative shortlist → deeper analysis of selected works.',
  },
  {
    no: '02',
    title: 'Comparative intelligence',
    short: 'See how artifacts differ in Operational Order, Cognitive Magnitude, dimensional architecture, bottlenecks, and outliers.',
    example: 'Example · Compare a development slate by demonstrated operation rather than reputation, genre, or surface complexity.',
  },
  {
    no: '03',
    title: 'Development & selection support',
    short: 'Identify where a work currently stops, what transformation would actually matter, and where deeper attention is warranted.',
    example: 'Example · Separate “promising but elaborate” from work that already demonstrates the target cognitive operation.',
  },
  {
    no: '04',
    title: 'Licensing & custom implementation',
    short: 'Explore internal workflows, evaluator calibration, research collaborations, custom reporting, or methodology licensing.',
    example: 'Example · Build a TORC-informed review layer around an existing editorial, research, or selection process.',
  },
];

export default function Organizations(){
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>TORC FOR ORGANIZATIONS</div>
          <h1>Evaluate cognition<br/>at scale.</h1>
          <p className={styles.lede}>
            A standardized framework for evaluating the cognitive operation and magnitude
            demonstrated in completed artifacts — across individual works, portfolios,
            submission pools, and recurring evaluation programs.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
              Discuss an institutional use case
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroVisualLabel}>STATISTICAL ANALYSIS</div>
          <div className={styles.heroPanel} aria-label="Illustrative TORC portfolio view">
          <div className={styles.panelTop}>
            <span>ILLUSTRATIVE PORTFOLIO VIEW</span>
            <span>TORC / 50</span>
          </div>
          <div className={styles.orderRows}>
            <div><span>3c</span><i style={{width:'16%'}}/><b>08</b></div>
            <div><span>3b</span><i style={{width:'28%'}}/><b>14</b></div>
            <div><span>3a</span><i style={{width:'38%'}}/><b>19</b></div>
            <div><span>2</span><i style={{width:'18%'}}/><b>09</b></div>
          </div>
          <div className={styles.cmsRange}>
            <span>CMS RANGE</span>
            <b>612</b>
            <div><i/><i/><i/><i/><i/></div>
            <b>894</b>
          </div>
          <div className={styles.panelFoot}>
            <span>ORDER DISTRIBUTION</span>
            <span>MAGNITUDE RANGE</span>
            <span>OUTLIERS</span>
          </div>
          <p>Conceptual display only — not client data.</p>
          </div>
        </div>
      </header>

      <section className={styles.signalStrip}>
        <span>STANDARDIZED EVALUATION</span>
        <i/>
        <span>COMPARABLE PROFILES</span>
        <i/>
        <span>TRACEABLE EVIDENCE</span>
        <i/>
        <span>AGGREGATE INSIGHT</span>
      </section>

      <section className={styles.intro}>
        <div className={styles.sectionLabel}>THE PROBLEM</div>
        <div>
          <h2>When the volume grows, consistency becomes part of the evaluation.</h2>
          <div className={styles.twoCopy}>
            <p>
              Fifty independent opinions do not automatically become intelligence. TORC
              gives an organization a common analytical structure across the corpus.
            </p>
            <p>
              Operational Order and Cognitive Magnitude remain distinct, allowing works
              to be compared without reducing different kinds of cognitive achievement
              to a single prestige ranking.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>APPLICATIONS</div>
            <h2>Built for more than one artifact at a time.</h2>
          </div>
          <p>Select a use case to see how it could work in practice.</p>
        </div>

        <div className={styles.cards}>
          {useCases.map((item) => (
            <details className={styles.card} key={item.no}>
              <summary>
                <span className={styles.cardNo}>{item.no}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                </div>
                <span className={styles.explore}>Explore use case <b>+</b></span>
              </summary>
              <div className={styles.cardReveal}>
                <span>IN PRACTICE</span>
                <p>{item.example}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.volume}>
        <div className={styles.bigNumber}>50</div>
        <div className={styles.volumeCopy}>
          <div className={styles.eyebrow}>HIGH-VOLUME USE</div>
          <h2>Fifty artifacts a week?</h2>
          <p>
            Then TORC should not behave like fifty isolated commissions. Define the
            artifact class, analytical depth, reporting requirements, volume, and cadence;
            the engagement can be designed as a repeatable evaluation program.
          </p>
          <a href="mailto:contact@torc.world?subject=TORC%20High-Volume%20Evaluation%20Inquiry">
            Discuss a volume workflow <span>→</span>
          </a>
        </div>

        <div className={styles.flow} aria-label="Illustrative evaluation workflow">
          <div><b>01</b><span>ARTIFACTS</span><strong>50</strong></div>
          <em>→</em>
          <div><b>02</b><span>PROFILES</span><strong>50</strong></div>
          <em>→</em>
          <div><b>03</b><span>PATTERNS</span><strong>06</strong></div>
          <em>→</em>
          <div><b>04</b><span>DEEP DIVES</span><strong>?</strong></div>
        </div>
      </section>

      <section className={styles.output}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>INSTITUTIONAL OUTPUT</div>
            <h2>One corpus.<br/>A clearer view.</h2>
          </div>
          <p>
            Reporting depth can be adapted to the engagement while the underlying
            evaluation standard remains constant.
          </p>
        </div>

        <div className={styles.outputGrid}>
          <article>
            <span>01 / OPERATIONAL DISTRIBUTION</span>
            <div className={styles.miniBars}>
              <i style={{height:'32%'}}/><i style={{height:'58%'}}/><i style={{height:'86%'}}/><i style={{height:'48%'}}/><i style={{height:'72%'}}/>
            </div>
            <h3>Where the portfolio operates.</h3>
            <p>Operational Orders and meaningful boundary concentrations across the evaluated set.</p>
          </article>
          <article>
            <span>02 / COGNITIVE MAGNITUDE</span>
            <div className={styles.rangeGraphic}><i/><b>612</b><b>894</b></div>
            <h3>How much cognition is carried.</h3>
            <p>CMS range and magnitude architecture without confusing magnitude with Operational Order.</p>
          </article>
          <article>
            <span>03 / DIMENSIONAL ARCHITECTURE</span>
            <div className={styles.dimensionGraphic}>
              <b>RL</b><i/><b>AD</b><i/><b>CD</b><i/><b>ID</b><i/><b>IC</b><i/><b>GR</b><i/>
            </div>
            <h3>Where the structure is strong or thin.</h3>
            <p>Recurring dimensional patterns that can disappear inside a single aggregate score.</p>
          </article>
          <article>
            <span>04 / OUTLIERS</span>
            <div className={styles.dotGraphic}><i/><i/><i/><i/><i/><i/><i/></div>
            <h3>What deserves a closer look.</h3>
            <p>Works that diverge meaningfully from the corpus and may warrant deeper analytical attention.</p>
          </article>
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <div className={styles.eyebrow}>INSTITUTIONAL ENGAGEMENTS</div>
          <h2>Start an institutional inquiry.</h2>
          <p>
            Institutional work is scoped individually according to artifact type, volume,
            analytical depth, reporting requirements, cadence, and implementation needs.
          </p>
        </div>
        <div className={styles.inquiry}>
          <span>USEFUL TO INCLUDE</span>
          <ul>
            <li>Artifact type or corpus</li>
            <li>Approximate volume and frequency</li>
            <li>Selection, development, research, or other purpose</li>
            <li>Desired reporting or comparison depth</li>
          </ul>
          <a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Contact TORC <b>→</b>
          </a>
          <small>contact@torc.world</small>
        </div>
      </section>
    </main>
  );
}
