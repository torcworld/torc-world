import Link from 'next/link';
import styles from './theory.module.css';

export default function Theory(){
  return <main className={styles.page}>
    <header className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>TORC / THE THEORY</div>
        <h1>A Theory Of<br/>Representational<br/>Consciousness</h1>
        <p className={styles.lede}>A framework for evaluating the cognition demonstrated in completed artifacts.</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/theory/book">Read the Living Edition</Link>
          <a className={styles.secondary} href="#framework">See the framework</a>
        </div>
      </div>

      <aside className={styles.book}>
        <span>CANONICAL LIVING EDITION</span>
        <b>The Age<br/>of False<br/>Depth</b>
        <p>Intelligence, Representation, and What Artifacts Actually Do</p>
        <small>G. K. MUIJLAERT</small>
      </aside>
    </header>

    <section className={styles.problem}>
      <div className={styles.sectionNo}>01 / THE PROBLEM</div>
      <div>
        <h2>What has actually been accomplished?</h2>
        <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so? TORC begins by separating demonstrated operation from the signals commonly mistaken for it: complexity, prestige, obscurity, difficulty, symbolism, recursion, or reputation.</p>
        <p className={styles.callout}>The artifact is the evidence. The creator is not the unit of evaluation.</p>
      </div>
    </section>

    <section id="framework" className={styles.coordinates}>
      <div className={styles.sectionHead}>
        <div><span>02 / THE FRAMEWORK</span><h2>Two coordinates.<br/>One profile.</h2></div>
        <p>Operational Order and Cognitive Magnitude answer different questions and must remain analytically distinct.</p>
      </div>

      <div className={styles.cards}>
        <article>
          <span>OPERATIONAL ORDER</span>
          <h3>What kind of operation?</h3>
          <p>Operational Order measures the depth and kind of cognitive disclosure achieved by an artifact.</p>
          <div className={styles.orderGraphic}>
            <b>1</b><i/><b>2</b><i/><b>3a</b><i/><b>3b</b><i/><b>3c</b><i/><b>G</b>
          </div>
        </article>
        <article>
          <span>COGNITIVE MAGNITUDE</span>
          <h3>How much cognition?</h3>
          <p>Cognitive Magnitude measures how much cognition is demonstrated in successfully constructing the artifact, and the architecture through which that magnitude is achieved.</p>
          <div className={styles.magnitudeGraphic}>
            {['RL','AD','CD','ID','IC','GR'].map((d,i)=><div key={d}><b>{d}</b><i style={{width:`${44+i*9}%`}}/></div>)}
          </div>
        </article>
      </div>

      <div className={styles.dip}>
        <span>DEMONSTRATED INTELLIGENCE PROFILE</span>
        <b>Operational Order</b><em>×</em><b>Cognitive Magnitude</b><strong>= DIP</strong>
      </div>
    </section>

    <section className={styles.protocol}>
      <div className={styles.protocolNo}>03</div>
      <div className={styles.protocolBody}>
        <span>FROM FRAMEWORK TO ASSESSMENT</span>
        <h2>TORC is not applied by reading six numbers off an artifact.</h2>
        <p className={styles.protocolLede}>The public framework identifies the principal coordinates and dimensions. The evaluation itself is governed by a proprietary protocol developed to operationalize the theory consistently across difficult, ambiguous, and structurally different artifacts.</p>

        <div className={styles.protocolTerms}>
          {['Evidentiary requirements','Boundary tests','Exception rules','Interpretive safeguards','Anti-inflation firewalls','Cross-dimensional checks','Ambiguous-signal procedures'].map(x=><span key={x}>{x}</span>)}
        </div>

        <p>These controls do not replace interpretation; they discipline it. Their purpose is to prevent complexity, prestige, obscurity, symbolism, or surface sophistication from being mistaken for demonstrated cognitive operation without adequate structural evidence.</p>
        <small>The complete TORC Evaluation Protocol is proprietary and is not publicly disclosed.</small>
      </div>
    </section>

    <section className={styles.bookSection}>
      <div className={styles.bookNumber}>04</div>
      <div>
        <span>THE CANONICAL EDITION</span>
        <h2><i>The Age of False Depth</i></h2>
        <h3>Intelligence, Representation, and What Artifacts Actually Do</h3>
        <p>The book is the canonical theoretical statement of TORC and is maintained on TORC.world as a living edition while the framework continues to be tested and refined. The online text is the authoritative version.</p>
        <div className={styles.bookActions}>
          <Link href="/theory/book">Read the full book <b>→</b></Link>
          <Link href="/about">About TORC</Link>
        </div>
        <small>G. K. Muijlaert</small>
      </div>
    </section>
  </main>
}
