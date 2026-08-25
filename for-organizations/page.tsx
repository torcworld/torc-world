import Link from 'next/link';

export default function ForOrganizations(){
  return <main>
    <section className="hero">
      <div className="eyebrow">TORC/DIP for organizations</div>
      <h1>Evaluate complex work with a common framework.</h1>
      <p className="lede">For producers, studios, publishers, research groups, universities, AI teams, and other organizations that need private, comparative, or portfolio-level analysis.</p>
      <div className="buttons">
        <Link className="button primary" href="/methodology">Explore the methodology</Link>
        <Link className="button" href="/artifacts">See evaluated artifacts</Link>
      </div>
    </section>

    <section className="section">
      <div className="eyebrow">Professional applications</div>
      <div className="orgCards">
        <article><h3>Private evaluation</h3><p>Apply TORC/DIP to unreleased screenplays, manuscripts, narrative projects, research outputs, games, or other original work without publishing it in the archive.</p></article>
        <article><h3>Comparative analysis</h3><p>Evaluate several candidates under the same framework—for example, a slate of scripts, submissions, concepts, or project options.</p></article>
        <article><h3>Portfolio & batch analysis</h3><p>Map recurring strengths, bottlenecks, and cognitive architectures across a body of work rather than treating each artifact in isolation.</p></article>
        <article><h3>Licensing & custom applications</h3><p>Explore internal use of the TORC/DIP methodology, custom evaluation workflows, or other organizational applications of the framework.</p></article>
      </div>
    </section>

    <section className="section orgIntro">
      <div>
        <div className="eyebrow">Independent by design</div>
        <h2>Clients choose the question, not the answer.</h2>
        <p className="lede">A professional engagement can define the material, scope, confidentiality requirements, comparisons, and reporting format. It does not purchase a preferred TORC classification, CMS, dimensional profile, or conclusion.</p>
      </div>
      <div className="orgPrinciple">
        <b>Professional inquiries</b>
        <p>Organizational services are being introduced individually rather than through a standardized enterprise checkout. Scope, pricing, confidentiality, turnaround, and deliverables can be agreed before any work begins.</p>
      </div>
    </section>
  </main>
}
