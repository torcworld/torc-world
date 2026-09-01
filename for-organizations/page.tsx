import styles from './organizations.module.css';

const useCases = [
  {
    no: '01',
    title: 'Portfolio Intelligence',
    short: 'See how a slate, catalogue, or corpus is distributed by demonstrated operation, magnitude, and dimensional architecture.',
    example: 'Example · 50 completed works → standardized profiles → corpus-level patterns → selected outliers for deeper review.',
  },
  {
    no: '02',
    title: 'Submission & Selection Support',
    short: 'Create a consistent analytical layer across a high-volume submission pool without turning TORC into an automated greenlight.',
    example: 'Example · Evaluate broadly, identify meaningful structural differences, then direct human attention to the works that warrant it.',
  },
  {
    no: '03',
    title: 'Development Intelligence',
    short: 'Identify where selected works currently stop, what remains structurally unrealized, and which interventions could matter most.',
    example: 'Example · Move from corpus evaluation to a small number of development deep dives on the works chosen for further investment.',
  },
  {
    no: '04',
    title: 'Comparative & Research Programs',
    short: 'Use one stable evaluative language across a defined body of work for comparative analysis, research, or longitudinal study.',
    example: 'Example · Compare recurring patterns across creators, media, programs, cohorts, or periods without collapsing TORC and CMS into one score.',
  },
];

const engagements = [
  ['Portfolio Evaluation','A defined slate or corpus evaluated under one consistent TORC standard.'],
  ['Submission Intelligence','High-volume evaluation designed to improve where human review and attention are allocated.'],
  ['Development Program','Evaluation followed by selective, artifact-specific development work on the strongest opportunities.'],
  ['Recurring Evaluation Program','A repeatable institutional workflow for ongoing slates, submissions, or commissioning pipelines.'],
  ['Research Collaboration','Custom comparative or corpus-level analysis for clearly defined research questions.'],
];

export default function Organizations(){
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>TORC FOR ORGANIZATIONS</div>
          <h1>See what a body of work<br/>is actually doing.</h1>
          <p className={styles.lede}>
            Evaluate cognitive architecture across a slate, catalogue, submission pool, or recurring stream of work — under one consistent analytical standard.
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
              <span>ILLUSTRATIVE CORPUS VIEW</span>
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

      <section className={styles.applications}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>WHAT BECOMES VISIBLE AT SCALE</div>
            <h2>50 artifacts should produce more than 50 reports.</h2>
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
          <div className={styles.eyebrow}>EVALUATE BROADLY. INVESTIGATE SELECTIVELY.</div>
          <h2>Fifty artifacts a week?</h2>
          <p>
            Then TORC should not behave like fifty isolated commissions. A corpus can be evaluated under one standard, compared as a whole, and used to identify where deeper analytical attention is actually warranted.
          </p>
          <a href="mailto:contact@torc.world?subject=TORC%20Corpus%20Evaluation%20Inquiry">
            Discuss a corpus workflow <span>→</span>
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

      <section className={styles.principle}>
        <div>
          <div className={styles.eyebrow}>FROM EVALUATION TO ATTENTION</div>
        </div>
        <div>
          <h2>Make better allocation of judgment possible.</h2>
          <p>
            The purpose of institutional TORC is not to automate judgment. It is to make the allocation of judgment more informed: where human attention, development time, research effort, and deeper evaluation should go next.
          </p>
          <div className={styles.decisionFlow} aria-label="Institutional TORC decision flow">
            <span>CORPUS</span><b>→</b><span>IDENTIFY</span><b>→</b><span>INVESTIGATE</span><b>→</b><span>DEVELOP</span>
          </div>
          <p className={styles.greenlight}><strong>TORC is not an automated greenlight.</strong> It supports selection, editorial, development, research, and acquisition judgment; it does not replace them.</p>
        </div>
      </section>

      <section className={styles.output}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>INSTITUTIONAL OUTPUT</div>
            <h2>One corpus.<br/>A clearer view.</h2>
          </div>
          <p>
            Reporting depth can be adapted to the engagement while the underlying evaluation standard remains constant.
          </p>
        </div>

        <div className={styles.outputGrid}>
          <article>
            <span>01 / OPERATIONAL DISTRIBUTION</span>
            <div className={styles.miniBars}>
              <i style={{height:'32%'}}/><i style={{height:'58%'}}/><i style={{height:'86%'}}/><i style={{height:'48%'}}/><i style={{height:'72%'}}/>
            </div>
            <h3>Where the corpus operates.</h3>
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

      <section className={styles.engagements}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>INSTITUTIONAL ENGAGEMENTS</div>
            <h2>Access TORC without transferring the methodology.</h2>
          </div>
          <p>Engagements are scoped around the corpus, the decision problem, and the depth of analysis required.</p>
        </div>
        <div className={styles.engagementGrid}>
          {engagements.map(([title,copy],index)=><article key={title}>
            <span>{String(index+1).padStart(2,'0')}</span>
            <div><h3>{title}</h3><p>{copy}</p></div>
          </article>)}
        </div>
        <div className={styles.proprietaryNote}>
          <span>PROPRIETARY METHODOLOGY</span>
          <p>The TORC evaluation methodology remains proprietary and is not transferred as part of an engagement. Clients receive the evaluation, evidence, comparative analysis, and agreed reporting — not the underlying adjudication system.</p>
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <div className={styles.eyebrow}>START WITH THE CORPUS</div>
          <h2>Discuss an institutional use case.</h2>
          <p>
            Institutional work is scoped individually according to artifact type, volume, cadence, decision problem, and the reporting depth that would actually be useful.
          </p>
        </div>
        <div className={styles.inquiry}>
          <span>USEFUL TO INCLUDE</span>
          <ul>
            <li>Artifact type or corpus</li>
            <li>Approximate volume and frequency</li>
            <li>Whether the need is selection, development, research, or comparison</li>
            <li>Desired reporting and deep-dive depth</li>
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
