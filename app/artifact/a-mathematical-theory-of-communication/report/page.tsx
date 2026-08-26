import Link from 'next/link';import {consensusReport} from '@/lib/shannon_reports';
function renderLine(line:string,i:number){
 const t=line.trim();
 if(!t)return <div key={i} style={{height:12}}/>;
 if(t.startsWith('### '))return <h3 key={i}>{t.slice(4)}</h3>;
 if(t.startsWith('## '))return <h2 key={i}>{t.slice(3)}</h2>;
 if(t.startsWith('# '))return <h1 key={i}>{t.slice(2)}</h1>;
 if(t.startsWith('- '))return <p key={i} style={{paddingLeft:18}}>• {t.slice(2)}</p>;
 if(t==='---')return <hr key={i}/>;
 return <p key={i}>{line.replace(/\*\*/g,'')}</p>;
}
export default function Page(){return <main><header className="page-title"><div className="eyebrow">Consensus report</div><h1>A Mathematical Theory of Communication</h1><p className="lede">GΩ (modal; no majority consensus) | 913 · Seven-evaluator aggregate</p></header><section className="section prose">{consensusReport.split('\n').map(renderLine)}</section><Link className="button" href="/artifact/a-mathematical-theory-of-communication">← Back to artifact</Link></main>}
