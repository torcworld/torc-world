import Link from 'next/link';
import { artifacts } from '@/lib/artifacts';

const featured = [
  'pale-fire',
  'on-formally-undecidable-propositions-of-principia-mathematica-and-related-systems-i',
  '2001-a-space-odyssey',
  'the-art-of-fugue',
  'kasparov-vs-topalov-wijk-aan-zee-1999',
  'fountain',
];

export default function Home() {
  const picks = featured.map(slug => artifacts.find(a => a.slug === slug)).filter(Boolean);

  return <main className="homeV2">
    <section className="homeHero">
      <h1>TORC</h1>
      <div className="homeHeroRule" />
      <p className="homeTagline">Demonstrated intelligence in artifacts.</p>
      <p className="homeIntro">TORC evaluates artifacts by asking two different questions: <strong>what kind of cognitive operation does the work actually perform?</strong> And <strong>how much structured cognition does it demonstrate in performing it?</strong></p>
      <div className="buttons homeHeroButtons">
        <Link className="button primary" href="/artifacts">Explore artifacts</Link>
        <Link className="button" href="/theory">Read the theory</Link>
      </div>
    </section>

    <section className="section homeCoordinates">
      <div className="eyebrow">Two coordinates</div>
      <div className="coordinateGrid">
        <article>
          <span className="coordinateNo">01</span>
          <h2>Operational Order</h2>
          <p>What does the artifact actually do? TORC classifies the highest cognitive operation required to explain the work — not its prestige, difficulty, reputation, or subject matter.</p>
          <Link href="/theory" className="small homeTextLink">Understand Operational Order →</Link>
        </article>
        <article>
          <span className="coordinateNo">02</span>
          <h2>Cognitive Magnitude Score</h2>
          <p>How much structured cognition does the artifact demonstrate while performing that operation? The score measures the architecture of the achievement across six independent dimensions.</p>
          <Link href="/theory" className="small homeTextLink">Understand Cognitive Magnitude →</Link>
        </article>
      </div>
      <p className="homePrinciple">The two coordinates are not interchangeable. A higher score does not automatically mean a higher operation, and a higher operation does not automatically mean a higher score.</p>
    </section>

    <section className="section">
      <div className="section-head homeSectionHead">
        <div><div className="eyebrow">From the archive</div><h2>See the framework at work.</h2></div>
        <Link href="/artifacts" className="small homeTextLink">Explore the full database →</Link>
      </div>
      <div className="grid homeArtifactGrid">{picks.map((a:any) => <Link className="card" key={a.slug} href={`/artifact/${a.slug}`}>
        <div className="meta">{a.domain} · {a.year}</div>
        <h3>{a.title}</h3>
        <div className="small">{a.creator}</div>
        <div className="dip">{a.status === 'evaluated' ? `${a.torc} | ${a.cms}` : 'Evaluation in progress'}</div>
      </Link>)}</div>
    </section>

    <section className="section homeTheoryBand">
      <div>
        <div className="eyebrow">The theory behind TORC</div>
        <h2>The Age of False Depth</h2>
      </div>
      <div>
        <p className="lede">TORC grows out of a broader theory of representation, intelligence, and the difference between appearing cognitively deep and actually performing a deep cognitive operation.</p>
        <div className="buttons"><Link className="button primary" href="/theory">Read the Living Edition</Link></div>
      </div>
    </section>

    <section className="section commissionBand homeCreatorBand">
      <div><div className="eyebrow">Original work</div><h2>Want your own artifact analyzed?</h2><p className="lede">Independent TORC evaluation for screenplays, manuscripts, research, music, games, and other original work.</p></div>
      <div className="buttons"><Link className="button primary" href="/evaluate-your-work">Have your artifact evaluated</Link></div>
    </section>

    <section id="organizations" className="section homeOrganizations">
      <div className="eyebrow">TORC for organizations</div>
      <h2>Professional applications.</h2>
      <p className="lede">For producers, studios, publishers, research groups, universities, AI teams, and other organizations evaluating complex creative or intellectual work.</p>
      <div className="orgCards">
        <article><h3>Private evaluation</h3><p>Apply TORC to unreleased screenplays, manuscripts, narrative projects, research outputs, games, or other original work without adding it to the public archive.</p></article>
        <article><h3>Comparative analysis</h3><p>Compare several artifacts under the same framework — for example a slate of scripts, submissions, concepts, or competing project options.</p></article>
        <article><h3>Portfolio & batch analysis</h3><p>Map recurring strengths, bottlenecks, and cognitive architectures across a body of work rather than evaluating one artifact in isolation.</p></article>
        <article><h3>Licensing & custom applications</h3><p>Discuss internal use of the TORC methodology, custom evaluation workflows, or other organizational applications of the framework.</p></article>
      </div>
      <div className="orgInquiry homeOrgInquiry"><b>Clients choose the material and scope — not the result.</b><p>Professional engagements are scoped individually. Pricing, turnaround, confidentiality, and deliverables are agreed before any work begins.</p><div className="buttons"><a className="button primary" href="mailto:contact@torc.world?subject=TORC%20Professional%20Inquiry">Discuss a project</a></div></div>
    </section>
  </main>;
}
