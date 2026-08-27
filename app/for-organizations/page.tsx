import Link from 'next/link';
import styles from './organizations.module.css';

export default function Organizations(){
  return (
    <main>
      <header className={`page-title ${styles.hero}`}>
        <div className="eyebrow">TORC for Organizations</div>
        <h1>Evaluate cognition at scale.</h1>
        <p className="lede">
          TORC provides a standardized framework for evaluating the cognitive operation
          and magnitude demonstrated in completed artifacts — across individual works,
          collections, submissions, and evaluation programs.
        </p>
        <div className="buttons">
          <a className="button primary" href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Discuss an institutional use case
          </a>
          <Link className="button" href="/artifacts">Explore published evaluations</Link>
        </div>
      </header>

      <section className={`section ${styles.intro}`}>
        <div>
          <div className="eyebrow">A common evaluative language</div>
          <h2>More than a collection of isolated reports.</h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            When an organization evaluates many artifacts, consistency becomes part of
            the problem. TORC separates <b>Operational Order</b> from <b>Cognitive Magnitude</b>
            so that works can be compared without collapsing very different kinds of
            cognitive achievement into a single ranking.
          </p>
          <p>
            The framework can be used for private review, comparative selection,
            portfolio analysis, development programs, research, and other settings in
            which a repeatable analytical structure matters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Applications</div>
        <h2>Built for more than one artifact at a time.</h2>

        <div className={styles.cards}>
          <article>
            <span>01</span>
            <h3>Portfolio &amp; high-volume evaluation</h3>
            <p>
              Evaluate a slate, catalogue, submission pool, or recurring stream of work
              under one consistent framework rather than through unrelated pieces of commentary.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Comparative intelligence</h3>
            <p>
              Examine how artifacts differ in Operational Order, Cognitive Magnitude,
              dimensional architecture, recurrent strengths, bottlenecks, and outliers.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Development &amp; selection support</h3>
            <p>
              Use TORC analysis to identify where a work currently stops, what kind of
              transformation would actually matter, and which artifacts warrant deeper
              attention or development.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Licensing &amp; custom implementation</h3>
            <p>
              Discuss internal workflows, evaluator calibration, research collaborations,
              custom reporting, methodology licensing, or future software/API applications
              where TORC may fit an existing process.
            </p>
          </article>
        </div>
      </section>

      <section className={`section ${styles.volume}`}>
        <div className={styles.volumeNumber}>50</div>
        <div>
          <div className="eyebrow">High-volume use</div>
          <h2>Fifty artifacts a week?</h2>
          <p className="lede">
            TORC can be structured as an evaluation program rather than fifty isolated
            commissions. Define the artifact class, analytical depth, reporting needs,
            volume, and cadence; TORC can then propose an appropriate workflow.
          </p>
          <p className={styles.note}>
            Large-volume work is scoped separately. The objective is methodological
            consistency without pretending that every artifact requires the same depth
            of analysis.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">What an organization receives</div>
        <h2>Evidence that can be compared.</h2>

        <div className={styles.deliverables}>
          <div>
            <b>Standardized artifact evaluation</b>
            <p>A shared structure for assessing different works without reducing them to taste or prestige.</p>
          </div>
          <div>
            <b>Traceable analytical reasoning</b>
            <p>Operational classifications and magnitude profiles tied to evidence in the completed artifact.</p>
          </div>
          <div>
            <b>Comparable profiles</b>
            <p>Operational Order, six-dimensional Cognitive Magnitude architecture, CMS, and boundary analysis.</p>
          </div>
          <div>
            <b>Aggregate insight where useful</b>
            <p>Patterns across a portfolio: distributions, recurrent ceilings, dimensional strengths, and meaningful outliers.</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.principle}`}>
        <div className="eyebrow">Methodological independence</div>
        <h2>The evaluation does not change because the client is larger.</h2>
        <p className="manifesto">
          TORC can adapt its workflow, reporting depth, and implementation to an
          organization. The underlying evaluation standard remains artifact-first.
          Volume, reputation, commercial importance, and the desired outcome do not
          purchase a higher Operational Order or Cognitive Magnitude Score.
        </p>
      </section>

      <section className={`section ${styles.contact}`}>
        <div>
          <div className="eyebrow">Institutional engagements</div>
          <h2>Tell us what you need to evaluate.</h2>
          <p className="lede">
            Institutional work is scoped individually according to artifact type, volume,
            analytical depth, reporting requirements, cadence, and implementation needs.
          </p>
        </div>

        <div className={styles.inquiry}>
          <b>Useful things to include in your inquiry</b>
          <ul>
            <li>What kind of artifacts you are evaluating</li>
            <li>Approximate volume and frequency</li>
            <li>Whether the analysis is for selection, development, research, or another purpose</li>
            <li>The level of reporting or comparison you need</li>
          </ul>
          <a className="button primary" href="mailto:contact@torc.world?subject=TORC%20Institutional%20Inquiry">
            Contact TORC
          </a>
          <p className={styles.email}>contact@torc.world</p>
        </div>
      </section>
    </main>
  );
}
