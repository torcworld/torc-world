import Link from 'next/link';
import styles from './artifact-analysis.module.css';

type Dim={key:string;name:string;score:string;artifact:string};
type Props={domain:string;year:string;title:string;creator:string;order:string;orderName:string;cms:number;range:string;headline:string;analysis:string[];dimensions:Dim[];boundaryTitle:string;boundary:string[];exceptionalTitle:string;exceptional:string[]};
const defs:Record<string,[string,string]>= {
 RL:['Relational Load','How many meaningful relationships must the artifact maintain and coordinate simultaneously?'],
 AD:['Abstraction Depth','How far can the artifact move beyond the concrete case toward deeper or more general structures while preserving relevant distinctions?'],
 CD:['Constraint Density','How many interacting requirements must the artifact satisfy at once, and how strongly do they restrict viable construction?'],
 ID:['Inferential Distance','How large and non-routine is the movement from what is immediately available to the deeper relation or explanation established?'],
 IC:['Integrative Compression','How much diverse complexity can the artifact organize through a smaller underlying architecture without flattening what matters?'],
 GR:['Generalization Reach','How far can the demonstrated structure travel into materially different problem-spaces while preserving its governing relations?']
};
export default function ArtifactAnalysis(p:Props){return <main className={styles.page}>
<header className={styles.hero}><div className="eyebrow">{p.domain} · {p.year} · TORC analysis</div><h1>{p.title}</h1><p className={styles.creator}>{p.creator}</p><div className={styles.verdictGrid}><div><span>Operational Order</span><strong>{p.order}</strong><small>{p.orderName}</small></div><div><span>Cognitive Magnitude</span><strong>{p.cms}</strong><small>{p.range}</small></div></div></header>
<article className={styles.essay}><section><div className={styles.kicker}>Analysis</div><h2>{p.headline}</h2>{p.analysis.map((x,i)=><p key={i}>{x}</p>)}</section></article>
<section className={styles.cmsSection}><div className={styles.kicker}>Cognitive architecture</div><h2 className={styles.dimensionsTitle}>The six-dimensional model</h2><p className={styles.cmsIntro}>See how TORC’s Cognitive Magnitude Score (CMS) is carried across the artifact.</p><div className={styles.dimensions}>{p.dimensions.map(d=><details className={styles.dimension} key={d.key}><summary><span className={styles.dimKey}>{d.key}</span><span className={styles.dimName}><b>{d.name}</b><small>Definition + artifact analysis</small></span><span className={styles.bar} aria-hidden="true"><span style={{width:`${Number(d.score)*10}%`}} /></span><strong>{d.score}</strong></summary><div className={styles.dimBody}><p><b>In plain language.</b> {defs[d.key][1]}</p><p><b>Why this artifact scores {d.score}.</b> {d.artifact}</p></div></details>)}</div></section>
<article className={`${styles.essay} ${styles.essayAfterDimensions}`}><section className={styles.boundary}><h2>{p.boundaryTitle}</h2>{p.boundary.map((x,i)=><p key={i}>{x}</p>)}<Link className={`${styles.methodologyCta} ${styles.orderModelCta}`} href="/methodology#operational-order"><span>TORC classification model</span><strong>Explore the 7 Cognitive Orders</strong><span aria-hidden="true">→</span></Link></section></article>
<section className={styles.exceptional}><div className={styles.kicker}>What makes it exceptional</div><h2>{p.exceptionalTitle}</h2>{p.exceptional.map((x,i)=><p key={i}>{x}</p>)}</section>
<section className={styles.bottomCta}><Link className={styles.submitButton} href="/evaluate-your-work">Submit your artifact →</Link><div><span>TORC Development Analysis</span><h2>What is your artifact actually doing?</h2><p>Find the deepest operation already present in the work—and the structural boundary keeping it from becoming fully realized.</p></div></section>
</main>}
