import styles from './organizations.module.css';

const useCases = [
  {
    no: '01',
    title: 'Portfolio intelligence',
    short: 'Evaluate a slate, catalogue, submission pool, or recurring stream under one consistent analytical standard.',
    example: 'Example · 250 works → standardized TORC profiles → corpus distribution → outliers and boundary cases → selected deep dives.',
  },
  {
    no: '02',
    title: 'Submission & selection support',
    short: 'Make large bodies of work more legible before scarce editorial, curatorial, research, or development attention is allocated.',
    example: 'Example · Evaluate broadly, identify meaningful differences, then investigate the works that genuinely warrant closer human attention.',
  },
  {
    no: '03',
    title: 'Development intelligence',
    short: 'Identify where a work currently stops, what operation is not yet fully realized, and which interventions could materially change the artifact.',
    example: 'Example · Distinguish additional complexity from structural development, then concentrate development resources where they can propagate.',
  },
  {
    no: '04',
    title: 'Comparative & research programs',
    short: 'Study patterns across creators, media, periods, cohorts, or research corpora without collapsing Operational Order and Cognitive Magnitude into one ranking.',
    example: 'Example · Compare operational distributions, dimensional architectures, outliers, and recurrent bottlenecks across a defined corpus.',
  },
];

const engagementTypes = [
  'Portfolio Evaluation',
  'Submission Intelligence',
  'Development Program',
  'Recurring Evaluation Program',
  'Research Collaboration',
];

export default function Organizations(){
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>TORC FOR ORGANIZATIONS</div>
          <h1>See what a body of work<br/>is actually doing.</h1>
          <p className={styles.lede}>
            Evaluate cognitive architecture across a slate, catalogue, submission pool,
            or recurring stream of work — under one consistent analytical standard.
            TORC turns individual evaluations into a comparative view of the corpus.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
              Discuss an institutional use case
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroVisualLabel}>CORPUS INTELLIGENCE</div>
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
        <span>CORPUS-LEVEL INSIGHT</span>
      </section>

      <section className={styles.intro}>
        <div className={styles.eyebrow}>THE INSTITUTIONAL DIFFERENCE</div>
        <div>
          <h2>50 artifacts should produce more than 50 reports.</h2>
          <div className={styles.twoCopy}>
            <p>
              At institutional scale, the value is not simply repetition. Individual
              profiles should begin to reveal the structure of the body of work itself:
              concentrations, gaps, outliers, recurring bottlenecks, and works that
              warrant deeper investigation.
            </p>
            <p>
              TORC supports selection, development, research, and allocation decisions.
              It does not predict commercial success and it does not replace editorial,
              curatorial, production, acquisition, or research judgment.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>APPLICATIONS</div>
            <h2>Evaluate broadly. Investigate selectively.</h2>
          </div>
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
          <div className={styles.eyebrow}>CORPUS → IDENTIFY → INVESTIGATE → DEVELOP</div>
          <h2>Fifty artifacts should not behave like fifty isolated commissions.</h2>
          <p>
            Institutional TORC is designed as an evaluation program: establish a common
            standard across the corpus, identify meaningful patterns and exceptions,
            then direct deeper analysis and development attention where it is most warranted.
          </p>
          <a href="mailto:contact@torc.world?subject=TORC%20Institutional%20Program%20Inquiry">
            Discuss an evaluation program <span>→</span>
          </a>
        </div>

        <div className={styles.flow} aria-label="Illustrative evaluation workflow">
          <div><b>01</b><span>ARTIFACTS</span><strong>50</strong></div>
          <em>→</em>
          <div><b>02</b><span>STANDARDIZED PROFILES</span><strong>50</strong></div>
          <em>→</em>
          <div><b>03</b><span>CORPUS PATTERNS</span><strong>06</strong></div>
          <em>→</em>
          <div><b>04</b><span>DEEP DIVES</span><strong>SELECTED</strong></div>
        </div>
      </section>

      <section className={styles.output}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>WHAT BECOMES VISIBLE AT SCALE</div>
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
            <h3>Where the corpus operates.</h3>
            <p>Operational Orders, meaningful concentrations, and boundary cases across the evaluated set.</p>
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

      <section className={styles.principle}>
        <div className={styles.eyebrow}>FROM EVALUATION TO ATTENTION</div>
        <div>
          <h2>Make the allocation of judgment better.</h2>
          <p>
            The purpose of institutional TORC is not to automate judgment. It is to make
            better allocation of judgment possible — showing where human attention,
            development resources, comparative investigation, or deeper evaluation are
            most likely to matter.
          </p>
          <div className={styles.greenlight}>TORC IS NOT AN AUTOMATED GREENLIGHT.</div>
        </div>
      </section>

      <section className={styles.engagements}>
        <div className={styles.engagementLead}>
          <div className={styles.eyebrow}>ENGAGEMENT TYPES</div>
          <h2>Built around the decision problem.</h2>
          <p>
            Institutional work is scoped around corpus size, cadence, analytical depth,
            reporting needs, and what the organization actually needs to decide or develop.
          </p>
        </div>
        <div className={styles.engagementList}>
          {engagementTypes.map((item, index) => (
            <div className={styles.engagementRow} key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <div className={styles.eyebrow}>INSTITUTIONAL INQUIRY</div>
          <h2>Start with the corpus.</h2>
          <p>
            Tell TORC what kind of work you are evaluating, how much of it there is,
            whether the program is one-off or recurring, and what decision, development,
            or research problem the evaluation needs to support.
          </p>
          <div className={styles.proprietaryBox}>
            <span>PROPRIETARY METHODOLOGY</span>
            <p>
              The TORC evaluation methodology remains proprietary and is not transferred
              as part of an engagement. Clients receive the evaluation, evidence, reporting,
              and agreed analytical outputs — not the underlying adjudication machinery.
            </p>
          </div>
        </div>

        <div className={styles.inquiry}>
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
