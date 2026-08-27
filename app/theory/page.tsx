import Link from 'next/link';

export default function Theory(){
 return <main>
  <header className="page-title">
   <h1>TORC: The Theory</h1>
   <p className="lede"><b>A Theory Of Representational Consciousness</b></p>
   <p>A framework for evaluating the cognition demonstrated in completed artifacts.</p>
   <p><b>G. K. Muijlaert</b></p>
   <div className="buttons">
    <Link className="button primary" href="/theory/book">Read the living edition</Link>
   </div>
  </header>

  <section className="chapter prose">
   <h2>The problem</h2>
   <p>Why do some artifacts genuinely reorganize the way reality becomes intelligible, while others create the appearance of having done so? TORC begins by asking a simpler question: <b>what has actually been accomplished?</b></p>
  </section>

  <section className="chapter prose">
   <h2>Two coordinates</h2>
   <p><b>Operational Order</b> measures the depth and kind of cognitive disclosure achieved by an artifact.</p>
   <p><b>Cognitive Magnitude</b> measures how much cognition is demonstrated in successfully constructing the artifact, and the architecture through which that magnitude is achieved.</p>
   <p>The six-dimensional architecture is summarized by the <b>Cognitive Magnitude Score</b>. Together, Operational Order and Cognitive Magnitude form the artifact's TORC evaluation.</p>
  </section>

  <section className="chapter prose">
   <h2>The canonical edition</h2>
   <p><i>The Age of False Depth: Intelligence, Representation, and What Artifacts Actually Do</i> is maintained here as the canonical living edition of TORC.</p>
   <p>Because the framework is still being tested and refined, the current book is published on TORC.world rather than as a downloadable edition. The online text is the authoritative version.</p>
   <p><b>G. K. Muijlaert</b></p>
   <div className="buttons">
    <Link className="button primary" href="/theory/book">Read the full book</Link>
   </div>
  </section>
 </main>
}